import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        control,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        try {
            let fileId = post?.featuredImage;
            if (data.image?.[0]) {
                const file = await appwriteService.uploadFile(data.image[0]);
                if (file) fileId = file.$id;
                if (post?.featuredImage) await appwriteService.deleteFile(post.featuredImage);
            }

            const payload = {
                ...data,
                featuredImage: fileId,
                userId: userData?.$id,
            };

            const dbPost = post
                ? await appwriteService.updatePost(post.$id, payload)
                : await appwriteService.createPost(payload);

            if (dbPost?.$id) navigate(`/post/${dbPost.$id}`);
        } catch (error) {
            console.error("Error submitting post:", error);
        }
    };

    const slugTransform = useCallback((value) => {
        return value
            ?.trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s+/g, "-");
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: "Title is required." })}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}

                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: "Slug is required." })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                {errors.slug && <p className="text-red-500 text-sm">{errors.slug.message}</p>}

                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post ? "Image is required." : false })}
                />
                {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

                {post?.featuredImage && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}

                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: "Status is required." })}
                />
                {errors.status && <p className="text-red-500 text-sm">{errors.status.message}</p>}

                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
