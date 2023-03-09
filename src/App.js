import './App.css';
import Header from "./MyComponent/Header";
import { Todos } from './MyComponent/Todos';
import React, { useState } from 'react';
// import { Footer } from './MyComponents/Footer';

function App() {
   
  const onDelete = (todo)=>{
    console.log("i am  delete")

    setTodos(todos.filter((e) =>{
      return e!==todo;
    }));

  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Joshwa shahbaz",
      desc: "i am Joshwa Shahbaz fom pakistan"
    },
    {
      sno: 2,
      title: "Aaina shahbaz",
      desc: "i am Aaina Shahbaz fom pakistan"
    },
    {
      sno: 3,
      title: "Areeba shahbaz",
      desc: "i am Areeba Shahbaz fom pakistan. I don't have brain. I am a bloody troll. "
    }
  ]);


  return (
    <>
   <Header title="Joshwa Shahbaz"/>
   <Todos todos={todos} onDelete={onDelete}/>
   
   </>
  );
}

export default App;
