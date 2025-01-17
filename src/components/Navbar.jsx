import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="container nav_bar"
    data-aos='fade-down'
    data-aos-duration='1000'
    >
        <div className="left nav_items"><span className='text-warning'>B</span>IJNESH KUMAR</div>
        <div className="right">
            <a href="#Home" className="nav_items">Home</a>
            <a href="#Skills" className="nav_items">Skills</a>
            <a href="#Projects" className="nav_items">Projects</a>
            <a href="#Contact" className="nav_items">Contact</a>
        </div>
    </div>
    </>
  )
}

export default Navbar