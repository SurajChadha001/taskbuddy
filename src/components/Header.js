import React from 'react'
import Logo from "../assets/logo.svg"
import "./header.css";
const Header = () => {
  return (
    <div>
      <img styleclassName="logo" src={Logo} alt="" />
    </div>
  )
}

export default Header
