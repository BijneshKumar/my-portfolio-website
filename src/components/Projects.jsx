import React from 'react'
import countryImg from '../assets/company/country-guide.png'
import miniDictionary from '../assets/company/mini-dictionary.png'

const Projects = () => {
  return (
    <>
    <div className="container pr" id='Projects'>
      <h1 className='my-5'>PROJECTS</h1>
      <>
            <a href='https://global-country-guide-bk.netlify.app/' target='_blank' className='text-decoration-none proj'>
             <div className='pr-items text-center my-5'
              data-aos='zoom-in'
              data-aos-duration='1000'>
             <div className="left">
              <img src={countryImg} alt="" />
             </div>
             <div className="right px-4">
              <h2>Globle Country guide</h2>
              <p style={{color:'yellowgreen'}}>A dynamic web application built with HTML, CSS, and JavaScript that provides key information about countries around the world.</p>
              <p>Features: Search Bar ,Region Filter, Light/Dark Mode</p>

             </div>
             </div>
             </a>

             
            <a href='https://mini-dictionary-bk.netlify.app/' target='_blank' className='text-decoration-none proj'>
             <div className='pr-items text-center my-5'
              data-aos='zoom-in'
              data-aos-duration='1000'>
             <div className="left">
              <img src={miniDictionary} alt="" />
             </div>
             <div className="right px-4">
              <h2>Mini Dictionary</h2>
              <p style={{color:'yellowgreen'}}>A React-based web application that serves as an interactive and user-friendly dictionary</p>
              <p>Features: Login Page with Validation, Word Search with Suggestions, Meaning Lookup, API Integration</p>

             </div>
             </div>
             </a>
          </>
    </div>
    </>
  )
}

export default Projects