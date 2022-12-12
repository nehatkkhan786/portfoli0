import React from 'react'
import {Box, Typography} from '@mui/material'
import './Projects.css'

const ProjectItem = ({projectsData}) => {
  return (
     <>
      {projectsData.map((item)=>{
          return (
              <Box key={item.id} className='project-item'>
                <img src={item?.image} className='project-image'/>
                <Typography>{item?.Name}</Typography>
              </Box>
              
              )
            })}
    </>

  )
}

export default ProjectItem