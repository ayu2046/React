import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { Controller } from 'react-hook-form';

export default function RTE({ name, control, label, defaultValue = '' }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
    ],
    content: defaultValue,
    autofocus: true,
    editable: true,
  });

  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || 'content'}
        control={control}
        render={({ field: { onChange } }) => (
          <>
            <EditorContent
              editor={editor}
              className="border rounded-md p-3"
              onBlur={() => onChange(editor.getHTML())}
            />
          </>
        )}
      />
    </div>
  );
}