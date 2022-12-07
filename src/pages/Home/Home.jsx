import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import './Home.css'
import profile from '../../assets/profile.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';

const Home = () => {
  return ( 
   <Box className='home-wrapper'>
    <Box className='profile-image'>
        <img src={profile}/>
    </Box>
    <Box sx={{mb:20, mt:2}} className='content'>
        <Typography variant='h6'>Hello! My name is</Typography>
        <Typography variant='h3'>Nehat Khan</Typography>
        <Typography sx={{fontSize:{sm:'20px', md:'30px'}}}>Developer | Ethical Hacker | Traveller</Typography>
        <Box  sx={{display:'flex', flexDirection:'row',my:2, gap:{sm:1, md:2}}}>
            <IconButton onClick={()=>window.location= 'https://www.instagram.com/nehat_khan/'}>
                <InstagramIcon/>
            </IconButton>

            <IconButton onClick={()=>window.location = 'https://twitter.com/nehatkhan82'}>
                <TwitterIcon/>
            </IconButton>
            
            <IconButton onClick = {()=>window.location = 'https://www.reddit.com/user/Nehatkhan786'}>
                <RedditIcon/>
            </IconButton>
        </Box>
       
    </Box>
   </Box>
  )
}

export default Home