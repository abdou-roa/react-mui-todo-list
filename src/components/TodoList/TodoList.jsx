import { useState, useEffect } from 'react'

import TodoForm from "../TodoForm/TodoForm";
import Tlist from "../Tlist/Tlist";

import { Box, Typography,TextField, Button } from "@mui/material";
import { ElevatorSharp } from '@mui/icons-material';
import TodoContext from '../../contexts/TodoContext';


export default function TodoList(){

    const [todos, setTodos] = useState(()=>{
      const localValue = localStorage.getItem('ITEMS')
      if(localValue === null) return []
      return JSON.parse(localValue)
    });

    useEffect(()=>{
      localStorage.setItem('ITEMS', JSON.stringify(todos))
    }, [todos])

    //methods

    const addTodo = (todoTitle)=>{
      setTodos(currentTodos=>{
        return [...currentTodos, {id: crypto.randomUUID(), title: todoTitle, completed: false}]
      })
    }
  
    const deleteTodo = todoId=>{
        //console.log(`to be deleted is the item with id: ${todoId}`)
      setTodos(currentTodos=>{
        return currentTodos.filter(todo=>todo.id !== todoId)
      })
    }

    const checkTodo = todoId=>{
        setTodos(currentTodos=>{
           return ( currentTodos.map(todo=>{
                if (todo.id == todoId){
                    return {...todo, completed : !todo.completed}
                }
                return todo
            }) 
           )
        })
        // setTodos(currentTodos=>{
        //     const updatedTodos = currentTodos.map(todo => {
        //       if (todo.id === todoId) {
        //         return {...todo, completed: !todo.completed}
        //       }
        //       return todo
        //     })
        //     return updatedTodos
        //   })
        
    }


    return (
        <TodoContext.Provider value={{todos, setTodos}}>
          <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Typography component='h1' variant='h2'>Todo List</Typography>
              <TodoForm addTodo={addTodo}/>
          </Box>
          <Box>
              <Tlist todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
          </Box>
        </TodoContext.Provider>
    )
}