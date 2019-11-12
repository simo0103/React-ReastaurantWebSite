import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import desktopBackground from '../../images/desktop/salafreccette.png';
import mobileBackground from '../../images/mobile/banner-mobile.png';
import linkBackground from '../../images/desktop/bulldog.jpg';
import { NavLink } from "react-router-dom";


import '../../style/css/home.css';

class Home extends Component {
  render() {
    const MobileImg = () => <img src={mobileBackground} alt="herobanner" className="heroBanner"/>;
    const DesktopImg = () => <img src={desktopBackground} alt="herobanner" className="heroBanner"/>;
    let RenderBackgroundImg = () => isMobileOnly ? <MobileImg/> : <DesktopImg/>

    const DesktopHome = () => 
    <div className = "content">
      <div className = "imgContainer">
        <img src={desktopBackground} alt="herobanner" className="heroBanner"/>
        <div className="overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="secondaryMenu">
            <li>
              <img src={linkBackground} alt="eventi" />
              <div className="linkOverlay">
               <span>eventi</span> 
              </div>
            </li>
            <li>
              <img src={linkBackground} alt="galleria" />
              <div className="linkOverlay">
                <span>galleria</span>
              </div>
            </li>
            <li>
              <NavLink to='/sport'>
                <img src={linkBackground} alt="sport" />
                <div className="linkOverlay">
                  <span>sport</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
     
     
    </div>


    let RenderDesktopContent = () => !isMobileOnly ? <DesktopHome/> : null;
    return (
      <div id="sitePage" className="Home">
        <div className = "content">
          <RenderBackgroundImg/> 
        </div>
       
        <RenderDesktopContent/>
      </div>
        
    );
  }
}

export default Home;