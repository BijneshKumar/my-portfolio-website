import React from 'react'
import bootstraps from '../assets/skills/bootstrap.png'
import css from '../assets/skills/css.png'
import github from '../assets/skills/github.png'
import html from '../assets/skills/html.png'
import javascript from '../assets/skills/javascript.png'
import reacts from '../assets/skills/react.png'
import tailwinds from '../assets/skills/tailwind.png'

const Skills = () => {
  
  return (
    <>
     <div className="container skills" id='Skills'>
      <h1 className='my-5'>SKILLS</h1>
      <div className="items">
      <>
              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={html} alt='image' />
                <h3>HTML</h3>
              </div>

              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={css} alt='image' />
                <h3>CSS</h3>
              </div>

              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={javascript} alt='image' />
                <h3>JavaScript</h3>
              </div>

              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={reacts} alt='image' />
                <h3>React</h3>
              </div>

              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={bootstraps} alt='image' />
                <h3>Bootstrap</h3>
              </div>

              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={tailwinds} alt='image' />
                <h3>Tailwind CSS</h3>
              </div>

              <div className="item"
               data-aos='flip-left'
               data-aos-duration='1000'>
                <img src={github} alt='image' />
                <h3>GitHub</h3>
              </div>
          </>
      </div>
     </div>

    </>
  )
}

export default Skills