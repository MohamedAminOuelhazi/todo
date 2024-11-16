import React from 'react'

export default function Todoinput(props) {

  const {addtodo,todovalue, setTodovalue}=props


  return (
    <header>
      <input type="text" value={todovalue} onChange={(e)=>{
        setTodovalue(e.target.value)
      }} placeholder='Enter todo ...' />
      <button onClick={()=>{
        addtodo(todovalue)
        setTodovalue('')
      }}> Add todo </button>
    </header>



  )
}
