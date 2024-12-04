import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 
        <div className=" bg-amber-100 flex flex-wrap justify-center gap-3 rounded-2xl shadow-xl p-3">
        <button 
        onClick={() => setColor("black")} 
        className="bg-black text-white outline-none p-2 rounded-full " >Black</button>
        <button 
        onClick={() => setColor("red")} 
        className="bg-red-600 outline-none p-2 rounded-full ">Red</button>
        <button 
        onClick={() => setColor("green")}
        className="bg-green-600 outline-none p-2 rounded-full ">Green</button>
        <button 
        onClick={() => setColor("blue")}
        className="bg-blue-600 outline-none p-2 rounded-xl">Blue</button>
        <button 
        onClick={() => setColor("yellow")}
        className="bg-yellow-600 outline-none p-2 rounded-xl">Yellow</button>
        <button 
        onClick={() => setColor("gray")}
        className="bg-gray-600 outline-none p-2 rounded-xl">Gray</button>
        <button 
        onClick={() => setColor("orange")}
        className="bg-orange-600 outline-none p-2 rounded-xl" >Orange</button>
        </div>
      </div>
    </div>
    
  )
}

export default App