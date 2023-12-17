import { useState } from 'react'
import Create from './components/Create'
import Card from './components/Card'
import Filter from './components/Filter'

function App() {
  

  let [task,setTask] = useState([
    { 
      
      Task: 'Office task 1',
      description: 'This is a description of my task 1',
      completed:'Not Completed'  
    },
    {
      
      Task: 'Office task 2',
      description: 'This is a description of my task 2',
      completed:'Not Completed'  
    },
    {
      
      Task: 'Office task 3',
      description: 'This is a description of my task 3',
      completed:'Not Completed' 
    },
  ]
)
let [task1,setTask1] = useState([
  { 
    
    Task: 'Office task 1',
    description: 'This is a description of my task 1',
    completed:'Not Completed'  
  },
  {
    
    Task: 'Office task 2',
    description: 'This is a description of my task 2',
    completed:'Not Completed'  
  },
  {
    
    Task: 'Office task 3',
    description: 'This is a description of my task 3',
    completed:'Not Completed' 
  },
]
)

  return <>
    <Create task={task} setTask={setTask} />
    <Filter task={task} setTask={setTask} task1={task1} setTask1={setTask1}/>
  
    <div className="task-box">
      {
        task.map((e,i) => {
          return <Card task={task} setTask={setTask} task1={task1} setTask1={setTask1}  id={i} key={i}/>
        })
        
      }
    </div>
  </>

}

export default App