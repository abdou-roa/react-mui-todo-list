import { useState } from 'react';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import Popup from '../Popup/Popup';



export default function Tlist({todos, checkTodo, deleteTodo}){

    //add deleteTodo callback the original function on App.js file
    //updateTodo callback the original function on App.js file

    const handleToggle = (todo) => () => {
      console.log('s')
    };

    return (
      <>
      {todos.length == 0 && <Typography variant='h5' component='p'>No Todos up until now!</Typography>}
      <List sx={{ minWidth: '540px', maxWidth: 500, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          const labelId = `checkbox-list-label-${todo}`;
  
          return (
            <ListItem
              key={todo.id}
              secondaryAction={
                <>
                <IconButton edge="end" aria-label="edit" sx={{marginX:.5}}>
                    <Popup todoId={todo.id} />
                </IconButton>
                <IconButton  onClick={()=>{deleteTodo(todo.id)}} edge="end" aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={todo.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onChange={()=>{checkTodo(todo.id)}}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>


      
      </>
    );
}
