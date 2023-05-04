import React from 'react'
import logo2 from "../images/mylogo2.png"
import Links from './Links'

const Header = () => {
  const logostyle = {
    height : "65px"
  }
  return (
    <>
    <header className='header'>
        <img src={logo2} style={logostyle} className = "logo" alt="image" />
        <Links/>
    </header>
    </>
  )
}

export default Header
