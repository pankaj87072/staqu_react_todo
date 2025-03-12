import React, { useState } from 'react'

const LiTags=({id,texts ,setLitext})=>{
  function deleteTask(){
    // const Tasks=document.getElementById('TaskInput');
    // console.log(Tasks.value);
    setLitext((prev)=>{
     return prev.filter((value,index)=>index!==id);
    });
    console.log(id);
    // litext.pop(keys);
  }
  return (
    <div className='li'>
    <li>{texts}</li>
    <button className='delete' onClick={()=>deleteTask()}>Delete</button>
    </div>
  )
}
const Todo = () => {
  const [litext,setLitext]=useState([]);
  const [Task,setTask]=useState("");
  function pushText(){
    // const Tasks=document.getElementById('TaskInput'); //this is mostly done in javascript but in react we have to use usestate so that consitency maintain and easy to manipulate
    // console.log(Tasks.value);
    setLitext((prev)=>([...prev,Task]));
    setTask("");
  }
  return (
    <div className='main' >
      <h2>Todo WebApp</h2>
      <div className='inputs'>
      <input type='text' id='TaskInput' value={Task} placeholder='Enter The Task' onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={()=>{
        pushText();
      }}>Add</button>
      </div>
      <ul id='listOfTasks'>
      {
        litext.map((text,index)=>{
          return <LiTags key={index} id={index} texts={text} setLitext={setLitext}/> 
        })
      }
      </ul>
    </div>
  )
}

export default Todo;
