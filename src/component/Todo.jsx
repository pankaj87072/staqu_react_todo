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
    <div>
    <li>{texts}</li>
    <button onClick={()=>deleteTask()}>Delete</button>
    </div>
  )
}
const Todo = () => {
  const [litext,setLitext]=useState([]);
  function pushText(){
    const Tasks=document.getElementById('TaskInput');
    console.log(Tasks.value);
    setLitext((prev)=>([...prev,Tasks.value]));
  }
  return (
    <div className='main' >
      <h2>Todo WebApp</h2>
      <div className='inputs'>
      <input type='text' id='TaskInput' placeholder='Enter The Task'/>
      <button onClick={()=>{
        pushText();
      }}>Add</button>
      </div>
      <ul id='listOfTasks'>
      {
        litext.map((e,index)=>{
          return <LiTags id={index} texts={e} setLitext={setLitext}/> 
        })
      }
      </ul>
    </div>
  )
}

export default Todo;
