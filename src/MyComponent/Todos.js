import React from 'react'
import { TodoItems } from "../MyComponent/TodoItems";

export const Todos = (props) => {
  return (
    <div className='container'>
        <h1 className='text-center my-3'style={{color : "orange"}}>Todos list</h1>
        {props.todos.map((todo)=>{
          return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        }
        )}
        
        </div>
  )
}
