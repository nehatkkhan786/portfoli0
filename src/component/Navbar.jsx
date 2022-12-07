import { Box, IconButton, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
  return (
   <Box className='navbar-wrapper' sx={{display:'flex', alignItems:'center', justifyContent:'space-between', paddingLeft:5, paddingRight:5, width:'100%', height:'80px'}}>
        <Box className='navbar-left'>
            <Typography onClick={()=>navigate('/')} sx={{fontWeight:'bold', fontSize:'30px',letterSpacing:2, cursor:'pointer'}}>nehat.dev</Typography>
        </Box>
        <Box className='navbar-right'>
            <IconButton>
                <MenuRoundedIcon sx={{fontSize:'30px'}}/>
            </IconButton>
        </Box>
   </Box>
  )
}

export default Navbar