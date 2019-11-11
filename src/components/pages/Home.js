import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import desktopBackground from '../../images/desktop/salafreccette.png';
import mobileBackground from '../../images/mobile/banner-mobile.png';
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
              <img src="#" alt="eventi" />
              <span>eventi</span>
            </li>
            <li>
              <img src="#" alt="galleria" />
              <span>galleria</span>
            </li>
            <li>
              <img src="#" alt="sport" />
              <span>sport</span>
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