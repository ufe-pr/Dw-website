import React from 'react'
import "./utility.css"
import mob from "../../img/mob.png"
import box from "../../img/box.png"
import meet from "../../img/meet.png"
import token from "../../img/token.png"
import showcase from "../../img/showcase.png"
import build from "../../img/builder.png"

const Utility = () => {
  return (<div className="grid-container">
    <h1 className="util">UTILITY</h1>
    <br/>
    <div className="grid-item ">
      <img src={mob} alt="Mobile"/>
      <p>
        Our goal is to make it incredibly easy for anyone to build interactive spaces right from your smartphones.
      </p>
    </div>
    <div className="grid-item">
      <img src={box} alt="alt"/>
      <p>
        Every Season, all Genesis Space holders will get a Mystery Loot box airdropped with loads of special Digital assets.
      </p>
    </div>
    <div className="grid-item">
      <img src={meet} alt="alt"/>
      <p>
        Have virtual meet ups with your community, invite your friends and take part in various interactive experiences. Curate your own Virtual Event at the stage located in the lobby area to get the most exposure in the metaverse.
      </p>
    </div>
    <div className="grid-item ">
      <img src={token} alt="alt"/>
      <p>
        Earn our Social Token by holding your access NFTs to buy digital assets to further enhance your Space. Collect rare items and display them!<br/>Very soon you will be able to Augment your digital assets into the real world.
      </p>
    </div>
    <div className="grid-item">
      <img src={showcase} alt="alt"/>
      <p>
        Showcase your NFTs and perform Virtual auctions for better visibility of your digital assets.
      </p>
    </div>
    <div className="grid-item">
      <img src={build} alt="alt"/>
      <p>
        Build your space with a flexible drag + drop room builder and inventory items created in collaboration with awesome artists.
      </p>
    </div>
  </div>);
}

export default Utility
