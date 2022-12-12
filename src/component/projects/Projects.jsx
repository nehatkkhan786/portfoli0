import React from 'react'
import {Box, Typography} from '@mui/material'
import './Projects.css'
import ProjectItem from './ProjectItem'


const projectsData = 
  [
    {
    "id": 1,
    "Name": "Domainer",
    "image": "http://dummyimage.com/112x100.png/dddddd/000000"
  }, {
    "id": 2,
    "Name": "Zathin",
    "image": "http://dummyimage.com/148x100.png/dddddd/000000"
  }, {
    "id": 3,
    "Name": "Tresom",
    "image": "http://dummyimage.com/235x100.png/dddddd/000000"
  }, {
    "id": 4,
    "Name": "Fintone",
    "image": "http://dummyimage.com/204x100.png/cc0000/ffffff"
  }, {
    "id": 5,
    "Name": "Ronstring",
    "image": "http://dummyimage.com/165x100.png/dddddd/000000"
  }, {
    "id": 6,
    "Name": "Holdlamis",
    "image": "http://dummyimage.com/245x100.png/dddddd/000000"
  },]

const Projects = () => {
  return (
    <Box className='projects-section'>
        <Typography variant='h3' sx={{textDecoration:'underline'}}>Projects</Typography>
        <Box className='projects'>
          <ProjectItem projectsData={projectsData}/>
        </Box>
    </Box>
  )
}

export default Projects