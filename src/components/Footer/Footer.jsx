import React from 'react'
import "../../components/Footer/footer.css"
import Flogo from "../../img/DWlogo.png"

const Footer = () => {
  return (<footer id="sticky-footer" class="flex-shrink-0 py-4 footer">
    <div class="container34 text-center">
      <div className='logo'>
        <img src={Flogo} alt="LOGO"/>
        <h1>Detangled <b>World</b>
        </h1>
      </div>
      <div className='right'>
        <small>
          &copy; All Rights Reserved 2022</small>
      </div>
    </div>
  </footer>)
}

export default Footer
