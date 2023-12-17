import React, { useState } from 'react'

function Create({task,setTask}) {

    let [Task,setTName]=useState("")
    let [description, setDescription]=useState("")
   
   const handleSubmit=()=>{
    let newArray=[...task]
    newArray.push({
        Task,
        description
    })
    setTask(newArray)
   }
   
    

  
    return <>
        <div id="todo-container" className="container-fluid">
            <h1 className="heading">My Todo</h1>
            <div className="todo-form">
                <input type="text" id="task_name" placeholder='Todo Name' onChange={(e)=>{setTName(e.target.value)}}/>
                <input type="text" id="task_description" placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}/>
                <button onClick={()=>handleSubmit()}>Add Todo</button>
            </div>
        </div>

        



    </>
}
export default Create;