import { useState, useEffect} from "react";
import "./App.css";
import Todoinput from "./Components/Todoinput";
import Todolist from "./Components/Todolist";

function App() {



  const [todos, setTodos]=useState([]);
  const [todovalue, setTodovalue]=useState('')


  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  function addtodo(newtodo){
    const newtodolist=[...todos , newtodo]
    persistData(newtodolist)
    setTodos(newtodolist)
  }


  function deletodo(index){
    const newtodolist =todos.filter((todo, todoindex)=>{
      return todoindex !=index 
    })
    return setTodos(newtodolist)
  }

  function editodo(index){
    const valuetobeedited =todos[index]
    setTodovalue(valuetobeedited)
    persistData(valuetobeedited)
    deletodo(index)
  }


  useEffect(()=>{
    if(!localStorage){
      return
    }

    let localTodos =localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])

  return( 
    <>
      <Todoinput addtodo={addtodo} todovalue={todovalue} setTodovalue={setTodovalue} />
        <Todolist todos={todos} deletodo={deletodo} editodo={editodo} />

    </>
  )

}

export default App;
