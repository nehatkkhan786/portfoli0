import { Typography } from '@mui/material'
import React from 'react'
import './skills.css'
import JS from '../../assets/skills/js.png'
import Python from '../../assets/skills/python.png'
import Github from '../../assets/skills/github.png'
import Html5 from '../../assets/skills/html-5.png'
import Postgress from '../../assets/skills/postgre.png'
import ReactImg from '../../assets/skills/physics.png'
import Wordpress from '../../assets/skills/wordpress.png'
import Css from '../../assets/skills/css-3.png'

const Skills = () => {
  return (
    
    <div className='skills-wrapper'>
      <Typography variant='h3'className='skills-title'>Skills</Typography>
        <div className='skills'>
              <div className='skills-left'>
                    <div className='skills-item'>
                        <img className='skill-img' src={JS}/>
                        <Typography className='skill-name'>JS</Typography>
                    </div>
                    <div className='skills-item'>
                        <img className='skill-img' src={Python}/>
                        <Typography className='skill-name'>Python</Typography>
                    </div>
                    <div className='skills-item'>
                        <img className='skill-img' src={Github}/>
                        <Typography className='skill-name'>Gihub</Typography>
                    </div>

                    <div className='skills-item'>                        
                        <img className='skill-img' src={Html5}/>
                        <Typography className='skill-name'>HTML</Typography>
                    </div>
                    <div className='skills-item'>                        
                        <img className='skill-img' src={Postgress}/>
                        <Typography className='skill-name'>Postgres</Typography>
                    </div>
                    <div className='skills-item'>                        
                        <img className='skill-img' src={ReactImg}/>
                        <Typography className='skill-name'>React</Typography>
                    </div>
                    <div className='skills-item'>                        
                        <img className='skill-img' src={Wordpress}/>
                        <Typography className='skill-name'>Wordpress</Typography>
                    </div>
                    <div className='skills-item'>                        
                        <img className='skill-img' src={Css}/>
                        <Typography className='skill-name'>CSS</Typography>
                    </div>
              </div>
              <div className='skills-right'>
                <Typography variant='body'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </div>

        </div>
    </div>
  )
}

export default Skills