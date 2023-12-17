import React from 'react'

function Filter({ task,setTask, task1,setTask1}) {

    
    const handleChange = (event) => {
        const a = event.target.value;
        let newArray = [...task1]
        if (a === "Completed") {
            newArray = newArray.filter((temp) => {
                return temp.completed === "Completed"
            });
        } else if(a === "Not Completed"){
            newArray = newArray.filter((temp) => {
                return temp.completed === "Not Completed"
            });
        }

            setTask(newArray);

            

    }
    

        return <>
            <div id='second' className="container-fluid">
                <h2>My Todo</h2>
                <label htmlFor="Staus_Filter" id='status1'>Staus Filter: <select name="filter" onClick={handleChange} >
                    <option value="All">All</option>
                    <option value="Not Completed">Not Completed</option>
                    <option value="Completed">Completed</option>
                </select></label>

            </div>

        </>
    }

    export default Filter