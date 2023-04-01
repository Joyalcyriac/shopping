import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopping Cart
          </Typography>
          <Button color="inherit"><Link to='/'>new</Link></Button>
          <Button color='inherit'><Link to='/add'>add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
