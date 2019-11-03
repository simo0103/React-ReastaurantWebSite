import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import desktopBackground from '../../images/desktop/salafreccette.png';
import mobileBackground from '../../images/mobile/banner-mobile.png';
import '../../style/css/home.css';

class Home extends Component {
  render() {
    const MobileImg = (props) => <img src={mobileBackground} alt="herobanner" className="heroBanner"/>;
    const DesktopImg = (props) => <img src={desktopBackground} alt="herobanner" className="heroBanner"/>;
    let RenderBackgroundImg = (props) => isMobileOnly ? <MobileImg/> : <DesktopImg/>

    return (
      <div id="sitePage" className="Home">
        <RenderBackgroundImg/>       
      </div>
        
    );
  }
}

export default Home;