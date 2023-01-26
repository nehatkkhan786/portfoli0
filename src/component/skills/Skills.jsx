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

I am a technology enthusiast with a passion for building beautiful and functional websites. With a background in network engineering and ethical hacking, I bring a unique perspective to the world of web development. My expertise in HTML, CSS, Django, Python, React, and JavaScript allows me to create visually stunning and secure websites that perform seamlessly.

I have a strong desire to learn and stay on top of the latest technologies and industry trends. My goal is to use my skills to help others achieve their online objectives and bring their vision to life. Whether it's a personal portfolio or a business website, I am committed to delivering the best possible results.

I am excited to share my work with you and look forward to the opportunity to work together on your next project. Let's bring your vision to life and create something amazing."

                </Typography>
              </div>

        </div>
    </div>
  )
}

export default Skills
