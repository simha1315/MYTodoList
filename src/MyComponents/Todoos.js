import React from 'react';
import Todo from './Todo';
export default function Todoos({todos,onDelete}) {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>TODOS LIST</h3>
      {todos.length===0? "NO TODOS":
      todos.map((todo)=>{
        return <Todo todo={todo} key= {todo.sno} onDelete={onDelete}/>
        
      })}
    </div>
  );
}
