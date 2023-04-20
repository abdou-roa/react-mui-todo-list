

import TopBar from './components/TopBar/TopBar'
import TodoList from './components/TodoList/TodoList'


import './App.css'
import { AppBar, Container, Typography } from '@mui/material'


function App() {

  return (
    <>
    <TopBar/>
    <Container
      sx={{
        paddingY: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <TodoList />


    </Container>
    </>
  )
}

export default App
