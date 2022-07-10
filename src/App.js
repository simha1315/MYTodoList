import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import Header  from './MyComponents/Header';
import Todoos from './MyComponents/Todoos';
import Footer from './MyComponents/Footer';
//import Todo from './MyComponents/Todo';
//import React, { useState } from 'react';
import { useState } from 'react';
function App() {
  const onDelete=(todo)=>{
    console.log("deleted",todo);
    setTodoos(todos_lis.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos_lis, setTodoos] = useState([
    {
      sno:10,
      title:"helloo",
      desc:"goooo"
    },
    {
      sno:11,
      title:"helloo",
      desc:"goooo"
    },
    {
      sno:12,
      title:"helloo",
      desc:"goooo"
    }
  ]);
  /*return (
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  return(
    <>
    <Header title="TODOS_LIST"search_bar={false}/>
    <Todoos todos={todos_lis} onDelete={onDelete}/>
    
    <Footer/>
    </>
  )
  
}

export default App;
