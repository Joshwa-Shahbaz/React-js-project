import React from 'react'

export const TodoItems = ({todo , onDelete}) => {
  return (
    <div>
         <h4>{todo.sno}</h4>
        <h4 className='my-2'>{todo.title}</h4>
        <h5 className='my-2'>{todo.desc}</h5>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    
    </div>
  )
}
