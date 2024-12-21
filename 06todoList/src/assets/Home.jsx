import React from 'react'
function Home() {

    

return (
    <div className=' flex flex-wrap justify-center p-4 rounded-md'>
    
      <div className=' text-black p-y-2 p-x-3 m-2 rounded-lg justify-evenly'>
        <h1 className='text-white text-2xl justify-center p-2 backdrop-blur-sm opacity-50 font-bold'> Welcome to Todo List </h1>
        <input className=' outline p-3 rounded-md ' type='text' placeholder='What to do next?..' />
        <button onClick={() => {
          console.log('button clicked')
        }}
        className='bg-blue-500 p-2 mx-2 my-3 text-white font-bold rounded-md hover:bg-blue-300'>Add Task</button> 
      </div>
    </div>
)
}

export default Home