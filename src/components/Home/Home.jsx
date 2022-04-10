import React from 'react'
import "./home.css"
import Logo from "../../img/dwlogo.svg"
import firstImg from "../../img/Website_1.jpg"
import Unlock from "../../img/unlock.png"
import UnlockH from "../../img/unlockh.png"

const Home = () => {
  return (<div>
    <img src={Logo} alt="Logo" className="svgLogo"/>
    <img src={firstImg} alt="Blendimage" className="imgbg"/>
  </div>);
}

export default Home
