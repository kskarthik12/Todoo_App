import React from 'react'
import { useState } from 'react'
function Card({task,setTask,id,task1,setTask1}) {
    const [test, setTest] = useState(false);
    const handleDelete = (i)=>{
        let newArray = [...task]
        newArray.splice(i,1)
        setTask(newArray)
    }


    const handleStatusChange = (event) => {
        const updatedTasks = [...task];
        updatedTasks[id].completed = event.target.value === 'completed' ? 'Completed' : 'Not Completed';
        setTask1(updatedTasks);
        setTest(false);
    };
    

    const handleEdit =(id)=>{
        setTest(true)
        
    }    
    

    return <>
      
        <div className='box'>
            <label htmlFor="Name:">Name: &nbsp;<span>{task[id].Task}</span></label>

            <label htmlFor="descrip">Description: &nbsp;<span>{task[id].description}</span></label>

            <label htmlFor="status">Status: &nbsp;<select id="status2" disabled={!test} onChange={handleStatusChange} name="status">
                <option value="not_completed" >{task[id].completed}</option>
                <option value="completed">Completed</option>
            </select></label>
    
            <div className='action'>
                <button onClick={()=> handleEdit(id)}>Edit</button>
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>


    </>
}

export default Card