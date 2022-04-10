import React from 'react'
import "../../components/Home/content.css"
import room from "../../img/2ndbg.jpg"
import avatar from "../../img/3rdimg.png"
import cmgsoon from "../../img/comingsoon.png"

export const Content = () => {
  return (<><div> 
      </div > <div className="container-fluid">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
      <h1 className = 'heading1' > A Community Built Metaverse </h1>
        <p className="desc1">
          Detangled World is a Pocket Metaverse for Thinkers &amp; Creators. Our social metaverse is free to play and unlocks the true potential of your brand with a Global access point. Unity game engine and Blender 3D makes it possible for our Artists and Devs to be able to deliver three unique Virtual Spaces to begin your journey into the Metaverse
          <br/>
          <br/>
          We aim to become India’s first Community build metaverse, Soon after the public Sale we will release the Standard operating procedures to submit and create your own digital assets &amp; how to port into the Game simulation.
        </p>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <img src={room} alt="mp4" className="img-fluid img1"/>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
        <img src={avatar} alt="responsive webite" className="img-fluid img2"/>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6">
        <h2 className="heading2">
          Your personal space in our Metaverse
        </h2>
        <p className="desc2">
          A Space your digital goods can live in our open world. Showcase your curated 3D virtual space with the collected digital goods to your friends and followers.
          <br/>
          Connect your wallet to display your Valuable NFTs. Invite your friends and followers to your Space in the Metaverse to create experiences together such as Multiplayer Games, Virtual Office, Virtual Discord server hangout space, NFT Gallery and many more. Possibilities are endless.
        </p>
      </div>
    </div>
    <img src={cmgsoon} className="cmgsoon" alt="coming soon"/>
  </div>
</>);
}

export default Content
