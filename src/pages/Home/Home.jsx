import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'


import Skills from '../../component/skills/Skills'
import Projects from '../../component/projects/Projects';
import Intro from '../../component/intro/Intro';

const Home = () => {
  return ( 
      <div>
            <Intro/>
            <Skills/>
            <Projects/>
     </div>
  )
}

export default Home