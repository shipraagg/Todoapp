import React,{useEffect} from 'react'
import {v4 as uuidv4} from "uuid";

const Form = ({input,setInput,todos,setTodos,editTools,setEdittools}) => {
  const updateTodo=(title,id,completed)=>{
    const newTodo=todos.map((todo)=>
      todo.id===id?{title,id,completed}:todo
    );
    setTodos(newTodo);
    setEdittools("");
  };
  useEffect(()=>{
    if(editTools){
      setInput(editTools.title);
    }
    else{
      setInput("");
    }
  },[setInput,editTools]);

  const onInputChange=(e)=>{
    setInput(e.target.value)
  };
  const onFormSubmit=(e)=>{
    e.preventDefault();
    if(!editTools)
    {
      setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
      setInput("");
    }
    else{
      updateTodo(input,editTools.id,editTools.completed)
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" 
        placeholder="Enter your items here......." 
        className="inputdata"
          value={input}
          required
          onChange={onInputChange}
        />
        <button className="button-add" type="submit">
            {editTools ?"OK":"Add"}
        </button>
    </form>
  )
}

export default Form;