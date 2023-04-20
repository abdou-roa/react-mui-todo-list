//import { useState } from "react";
import { useContext } from "react";

import { Box, Typography,TextField, Button } from "@mui/material";
import TodoContext from "../../contexts/TodoContext";

export default function updateTodo({todoId, closeTooltip}){
    //const [newTodo, setNewTodo] = useState('')
    const cntxt = useContext(TodoContext)
    let todos = cntxt.todos
    let setTodos = cntxt.setTodos

    const handleSubmit = event=>{
        event.preventDefault()
        const newTitle = event.target.querySelector('input[name="title"]').value
        let updatedTodos=setTodos(currentTodos=>{
            closeTooltip()
            return (
                currentTodos.map(todo=>{
                    if(todo.id===todoId){
                        return {...todo, title : newTitle}
                    }
                    return todo
                })
            ) 
        })
    }
    //addTodo callback the original function on App.js file
    return (
            <Box sx={{paddingY: 9}}>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic" name="title" label="Todo" placeholder="update todo" variant="outlined" sx={{minWidth:'400px', minHeight: '30px', marginX: .5}} />
                    <Button type="submit" variant="contained" sx={{minHeight: '55px', marginX: .5}}>Add todo</Button>
                </form>
            </Box>
    )
}