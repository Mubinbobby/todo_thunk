import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor: '#A594F9' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        
        </IconButton>
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ToDo List
        </Typography>
        <Link to={'/'}><Button color="active">Home</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
  </>
  )
}

export default Nav