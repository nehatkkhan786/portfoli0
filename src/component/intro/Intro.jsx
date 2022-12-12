import {Box, Typography, IconButton} from '@mui/material'
import './Intro.css'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profile from '../../assets/profile.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import {motion} from 'framer-motion'
import './scroll.scss'


const Intro = () => {
  return (
    <Box className='home-wrapper'>  
            <motion.div className='profile-image'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            >
                <img src={profile}/>
            </motion.div>

            <Box sx={{mb:{xs:8, md:20}, mt:2}} className='content'>
                <Typography variant='h7'>Hello! My name is</Typography>
                <Typography variant='h4'>Nehat Khan</Typography>
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
                    <IconButton>
                            <KeyboardArrowDownIcon className='arrow-down' sx={{fontSize:'50px', color:'orange'}}/>
                    </IconButton>
            </Box>
    </Box>
  )
}

export default Intro