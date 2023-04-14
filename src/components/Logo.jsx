import React from 'react'
import {Link} from "react-router-dom";
const Logo = () => {
  return (
    <Link to="/">
    <img src="/logo.png" width={50} alt="logo" /> <span style={{color:"#fff",fontWeight:"bold",fontSize:"1rem"}} className="youtube">Youtube</span> 
    </Link>
    )
}

export default Logo;

