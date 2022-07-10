import React from 'react';
import Todoos from './Todoos';
const Todo = ({todo,onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>onDelete(todo)}>DELETE</button>
    </div>
  );
}

export default Todo;