import React from 'react'
import Loader from 'react-loaders'
import {  FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import AnimatedLetters from '../components/AnimatedLetters'
import  proj2  from '../assets/images/project-2.jpg'
import  proj3  from '../assets/images/project-3.jpg'
import  proj4  from '../assets/images/project-4.jpg'
import  proj5  from '../assets/images/project-5.jpg'
import  proj6  from '../assets/images/project-6.jpg'
import  proj1  from '../assets/images/project-1.jpg'




function Projects() {

  const [letterClass] = useState('text-animate')
  return (
    
    <section className="container project-page">
      <div className="text-zone">
        <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e','c', 't', 's']}
                idx={15}
              />
        </h1>
     
        <section className='projects'>
          <div className="projects__items">
            <div className="projects__item">
              <img src={ proj1 } alt='My project'/>
              <div className="projects__btns">
                <a href="https://github.com/GustavModishi/number_guessing_game" 
                className="projects__btn"
                target="_blank">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={ proj2 } alt='My project'/>
              <div className="projects__btns">
               
                <a href="https://github.com/GustavModishi/react-TodoList" 
                className="projects__btn"
                target="_blank">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={ proj3 } alt='My project'/>
              <div className="projects__btns">
                
                <a href="https://github.com/GustavModishi/worldcupdb" 
                className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={ proj4 } alt='My project'/>
              <div className="projects__btns"> 
                <a href="https://github.com/GustavModishi/number_guessing_game" 
                className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={ proj5 } alt='My project'/>
              <div className="projects__btns">
  
                <a href="https://github.com/GustavModishi/Salon-Appointment-Scheduler" 
                className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>
            <div className="projects__item">
              <img src={ proj6 } alt='My project'/>
              <div className="projects__btns">
                
                <a href="https://github.com/GustavModishi/Learning_Sass" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>
          </div>
        </section>
     
        <Loader type="pacman" /> 
      </div>
    </section>
    


  )
}

export default Projects