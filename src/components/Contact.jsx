import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <>
    <div className="container contact" id='Contact'>
      <h1 className='my-5'>CONTACT ME</h1>
      <div className="contact-icon"
       data-aos='zoom-in-up'
       data-aos-duration='1000'>
        <a href='https://www.linkedin.com/in/Bijnesh-kumar10/' target='_blank' className="items">
        <CiLinkedin className='icon'/>
        </a >
        <a href='https://github.com/BijneshKumar' target='_blank' className="items">
        <FaGithub className='icon'/>
        </a >
        <a href='mailto:bijneshkumar10@gmail.com' target='_blank' className="items">
        <CgMail className='icon'/>
        </a >
        <a href='https://www.instagram.com/bijnesh.kumar.9849/' target='_blank' className="items">
        <FaInstagram className='icon'/>
        </a >
        <a href='https://www.facebook.com/bijnesh.kumar.9849' target='_blank' className="items">
          <CiFacebook className='icon'/>
        </a >
       
      </div>
    </div>
    </>
  )
}

export default Contact