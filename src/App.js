import React ,{useState,useEffect} from 'react';
import Header from './components/Header';
import "./App.css";
import Form from './components/Form';
import TodoList from './components/TodosList';

const App = () => {
  const initialState=JSON.parse(localStorage.getItem("todos"))||[];
  const[input,setInput]=useState("");
  const[todos,setTodos]=useState(initialState);
  const [editTools,setEdittools]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  
  return (
    <div className="container">
        <div className="app-wrapper">
          <div>
            <Header/>
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTools={editTools}
              setEdittools={setEdittools}
            />
          </div>
          <div>
            <TodoList todos={todos}
              setTodos={setTodos}
              setEdittools={setEdittools}
            />
          </div>
        </div>
    </div>
  )
}

export default App
