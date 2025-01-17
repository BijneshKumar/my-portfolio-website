import React from 'react'
import pdf from './pdf/Bijnesh_Resume.pdf'
import hero from '../assets/hero/hero.avif'
import Typed from 'typed.js'
import { useEffect,useRef } from 'react'
import { use } from 'react'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings:['Welcome to my profile!',"I'm Bijnesh Kumar",'A passionate Frontend Developer','Specialized in React Development.',"Let's build something amazing together!"],
      typeSpeed:60,
      backSpeed:60,
      loop:true
    }

    const typed = new Typed(typedRef.current,options)
  
    return () => {
      typed.destroy()
    }
  }, [])
  
  return (
    <>
    <div className="container home" id='Home'>
      <div className="left"
        data-aos='fade-up-right'
        data-aos-duration='1000'>
          <div className='info-div'>
        <h1 ref={typedRef}></h1>
        <a href={pdf} download='Bijnesh_resume.pdf' className="btn btn-outline-warning my-3">Download resume</a>
        </div>
      </div>
      <div className="right">
        <div className="img" 
         data-aos='fade-up-left'
         data-aos-duration='1000'>
          <img src={hero} alt='hero'/>
        </div>
      </div>
    </div>
    </>
  )
}
  
export default Home