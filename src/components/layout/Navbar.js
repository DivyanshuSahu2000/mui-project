import React, { useState } from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import FlightSharpIcon from '@mui/icons-material/FlightSharp';
import { Link } from 'react-router-dom'
import "../../style/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
//handle menu click
const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen)
}
//menu drawer
const drawer =(
  <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
<Typography color={"black"} variant='h6' component={'div'} sx={{flexGrow:1}}>
  
  <FlightSharpIcon sx={{mr:2}}/>
 <b>My Trip</b> 
</Typography>

<ul className='mobile-navigation'>
  <li>
    <Link to={'/'}>Home</Link>
  </li>
  <li>
    <Link to='/menu'>Menu</Link>
  </li>
  <li>
    <Link to='/about'>About</Link>
  </li>
  <li>
    <Link to='/contact'>Contact</Link>
  </li>
</ul>

  </Box>
)

  return (
    <>
        <Box>
<AppBar component={"nav"} sx={{bgcolor:"orange"}}>
  <Toolbar>
    <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'},}}
    onClick={handleDrawerToggle}>
<MenuIcon/>
    </IconButton>
  <Typography color={"black"} variant='h6' component={'div'} sx={{flexGrow:1, my:2}}>
  
    <FlightSharpIcon sx={{mr:2}}/>
   <b>My Trip</b> 
  </Typography>
  <Divider/>
 <Box sx={{display: {xs:'none', sm: "block"}}}>
  <ul className='navigation-menu'>
    <li>
      <Link to={'/'}>Home</Link>
    </li>
    <li>
      <Link to='/menu'>Menu</Link>
    </li>
    <li>
      <Link to='/about'>About</Link>
    </li>
    <li>
      <Link to='/contact'>Contact</Link>
    </li>
  </ul>
 </Box>
  </Toolbar>
</AppBar>
<Box component={"nav"}>
<Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'}, 
"& .MuiDrawer-paper":{
  boxSizing: "border-box",
  width: "170px"
}}}>
  {drawer}
</Drawer>
</Box>
<Box >

<Toolbar />
</Box>
        </Box>
    </>
  )
}

export default Navbar