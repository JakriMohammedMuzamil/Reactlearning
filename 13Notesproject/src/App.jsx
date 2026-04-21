import React, { useState } from 'react'

const App = () => {

  const [text, setText] = useState('')
  const [textarea, setTextArea] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
      e.preventDefault();
    
      setTask(prev => [...prev, { text, textarea }]);
  
      setText('');
      setTextArea('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className='flex flex-col lg:flex-row bg-black min-h-screen text-white'> 
        <form 
        className=' h-full lg:w-1/2 flex flex-col item-start gap-4 px-8 pb-10 pt-8'
        onSubmit={submitHandler}
        >
        <h1 className='font-extrabold p-1 text-2xl'>Add Notes</h1>
       
        <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-3 py-1 w-full rounded-xl border-2 shadow-2xl'
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
        />

        <textarea 
        name="textarea" 
        placeholder="Describe" 
        className='px-3 py-1 w-full rounded-xl border-2 h-60 shadow-2xl'
        value={textarea}
        onChange={(e)=>{
          setTextArea(e.target.value)
        }}
        ></textarea>

        <button 
        className='bg-white text-black rounded-md active:scale-95 p-2'
        >Submit</button>

      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start  gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map((elem, idx)=>{

             return (
              <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-lg font-bold text-black'>{elem.text}</h3>
                  <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.textarea}</p>
                </div>
                <button onClick={() => {deleteNote(idx)}} 
                className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
              </div>
            )})}
        </div>
      </div>
    </div>   
  )
}

export default App
