import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import desktopBackground from '../../images/desktop/salafreccette.jpg';
import mobileBackground from '../../images/mobile/banner-mobile.png';
import '../../style/css/home.css';

class Home extends Component {
  render() {
    const MobileImg = (props) => <img src={mobileBackground} alt="herobanner"/>;
    const DesktopImg = (props) => <img src={desktopBackground} alt="herobanner"/>;
    let RenderBackgroundImg = (props) => isMobileOnly ? <MobileImg/> : <DesktopImg/>

    return (
      <div className="Home">
        <RenderBackgroundImg/>       
      </div>
        
    );
  }
}

export default Home;