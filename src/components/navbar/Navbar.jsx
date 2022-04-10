import React from 'react'
import './navbar.css'
import {FaDiscord, FaTwitter} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (<nav className="navbar navbar-light navbar-expand-md justify-content-md-center justify-content-start">
    <ul className="navbar-nav mx-auto text-md-center text-left menu1">
      <h3>
        Detangled
        <b>World</b>
      </h3>
    </ul>
    <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
      <ul className="navbar-nav mx-auto text-md-center text-left menu">
        <li className="nav-item my-auto">
          <a className="nav-link navbar-brand mx-0 d-none d-md-inline navitem" href="#Community">Home</a>
        </li>
        <li className="nav-item my-auto">
          <a className="nav-link navbar-brand mx-0 d-none d-md-inline navitem" href="#ROADMAP">Roadmap</a>
        </li>
        <li className="nav-item my-auto">
          <a className="nav-link navbar-brand mx-0 d-none d-md-inline navitem" href="#UTILITY">Utility</a>
        </li>
      </ul>
      <ul className="nav navbar-nav flex-row justify-content-md-center justify-content-start flex-nowrap hov">
        <a className="nav-link hov" href="https://discord.gg/R9fuT7Da95" target="_blank">
          <FaDiscord className="fa-discord"/>
        </a>
        <a className="nav-link hov" href="https://twitter.com/UnlockYourVibe" target="_blank">
          <FaTwitter className="fa-twitter"/>
        </a>
        <button type="button" className="btn mb-3 mr-3 btn-secondary">
          Connect Wallet
        </button>
      </ul>
    </div>
  </nav>);
}

export default Navbar
