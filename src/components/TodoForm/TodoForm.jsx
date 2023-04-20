import { useState } from "react";
import { Box, Typography,TextField, Button } from "@mui/material";

export default function TodoForm({addTodo}){
    const [newTodo, setNewTodo] = useState('')

    //addTodo callback the original function on App.js file
    return (
        <>
            <Box sx={{paddingY: 9}}>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    if(newTodo == "") return 
                    
                    addTodo(newTodo)

                    setNewTodo("")
                }} >
                    <TextField value={newTodo} onChange={e=>setNewTodo(e.target.value)} id="outlined-basic" label="Todo" variant="outlined" sx={{minWidth:'400px', minHeight: '30px', marginX: .5}} />
                    <Button type="submit" variant="contained" sx={{minHeight: '55px', marginX: .5}}>Add todo</Button>
                </form>
            </Box>
        </>
    )
}