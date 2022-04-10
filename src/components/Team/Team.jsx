import React from 'react'
import "./team.css"
import avatar from "../../img/p.jpg"

const Team = () => {
  return (<> <h2 className = "rm" > MEET OUR TEAM </h2><div className="container">
              <div className="grid">
                  <div className="row2">
                      <div className="profile-card">
                          <div className="img">
                              <img src={avatar} /> </div>
<div className="caption">
  <h3>Samuraizan</h3>
  <p>Founder</p>
  <div className="social-links">
    <a href="#">
      <i className="fab fa-linkedin-in"/>
    </a>
    <a href="#">
      <i className="fab fa-instagram"/>
    </a>
    <a href="#">
      <i className="fab fa-twitter"/>
    </a>
  </div>
</div>
</div>
<div className="profile-card">
<div className="img">
  <img src={avatar}/>
</div>
<div className="caption">
  <h3>Aaradna</h3>
  <p>Co-Founder</p>
  <div className="social-links">
    <a href="#">
      <i className="fab fa-linkedin-in"/>
    </a>
    <a href="#">
      <i className="fab fa-instagram"/>
    </a>
    <a href="#">
      <i className="fab fa-twitter"/>
    </a>
  </div>
</div>
</div>
<div className="profile-card">
<div className="img">
  <img src={avatar}/>
</div>
<div className="caption">
  <h3>Tarun</h3>
  <p>
    Front End Developer
  </p>
  <div className="social-links">
    <a href="#">
      <i className="fab fa-linkedin-in"/>
    </a>
    <a href="#">
      <i className="fab fa-instagram"/>
    </a>
    <a href="#">
      <i className="fab fa-twitter"/>
    </a>
  </div>
</div>
</div>
</div>
<div className="row2">
<div className="profile-card">
<div className="img">
  <img src={avatar}/>
</div>
<div className="caption">
  <h3>UFE</h3>
  <p>
    Front End Developer
  </p>
  <div className="social-links">
    <a href="#">
      <i className="fab fa-linkedin-in"/>
    </a>
    <a href="#">
      <i className="fab fa-instagram"/>
    </a>
    <a href="#">
      <i className="fab fa-twitter"/>
    </a>
  </div>
</div>
</div>
<div className="profile-card">
<div className="img">
  <img src={avatar}/>
</div>
<div className="caption">
  <h3>Yesh</h3>
  <p>
    Web Devloper and Wizard
  </p>
  <div className="social-links">
    <a href="#">
      <i className="fab fa-linkedin-in"/>
    </a>
    <a href="#">
      <i className="fab fa-instagram"/>
    </a>
    <a href="#">
      <i className="fab fa-twitter"/>
    </a>
  </div>
</div>
</div>
</div>
</div>
</div>
</>);
}

export default Team
