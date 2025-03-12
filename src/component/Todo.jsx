import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, removeTodo} from '../redux/todoslice';
const LiTags=({id,texts ,setLitext})=>{
  const dispatch=useDispatch();
  // function deleteTask(){
    // const Tasks=document.getElementById('TaskInput');
    // console.log(Tasks.value);
    
    // setLitext((prev)=>{
    //  return prev.filter((value,index)=>index!==id);
    // });
    // console.log(id);
    // // litext.pop(keys);
  // }
  return (
    <div className='li'>
    <li>{texts}</li>
    <button className='delete' onClick={()=>dispatch(removeTodo(id))}>Delete</button>
    </div>
  )
}
const Todo = () => {
  const dispatch = useDispatch();
  const todoslist = useSelector(state => state.todos.list);
  // const [litext,setLitext]=useState([]);
  const [Task,setTask]=useState("");
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  function pushText(){
    // const Tasks=document.getElementById('TaskInput'); //this is mostly done in javascript but in react we have to use usestate so that consitency maintain and easy to manipulate
    // console.log(Tasks.value);
    // setLitext((prev)=>([...prev,Task]));
    // setTask("");
    dispatch(addTodo(Task));
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
        todoslist.map((text,index)=>{
          return <LiTags key={index} id={text.id} texts={text.todo} />
        })
      }
      </ul>
    </div>
  )
}

export default Todo;
