import React from 'react'
import { useState , createContext, useContext} from "react";

export default function TodoCard(props) {

  const {children, deletodo, index ,editodo}=props


  return (
        <li className='todoItem'>
          {children}
          <div className='actionsContainer'>
            <button onClick={()=>{
              editodo(index)
            }}>            
              <i class="fa-regular fa-pen-to-square"></i>
            </button>            
            <button onClick={()=>{
              deletodo(index)
            }}>
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </li>


  )
}
