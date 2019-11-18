import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import desktopBackground from '../../images/desktop/salafreccette.png';
import mobileBackground from '../../images/mobile/banner-mobile.png';
//import linkBackground from '../../images/desktop/bulldog.jpg';
import img1 from '../../images/gallery/img1.jpg';
import img2 from '../../images/gallery/img2.jpg';
import img3 from '../../images/gallery/img3.jpg';
import logo from '../../images/logo1bolder.png';
import arrowD from '../../images/svg/arrD.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//import { NavLink } from "react-router-dom";

import '../../style/css/home.css';

class Home extends Component {
 
  render() {
    const MobileImg = () => <img src={mobileBackground} alt="herobanner" className="heroBanner"/>;
    const DesktopImg = () => <img src={desktopBackground} alt="herobanner" className="heroBanner"/>;
    let RenderBackgroundImg = () => isMobileOnly ? <MobileImg/> : <DesktopImg/>;

    const DesktopHome = () => 
    <div id="content" className = "content">
      <div className="aboutUs">
        <p>Chi Siamo..<br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="gallery">
        <img className="photo" src={img1} alt="dragoni"/> 
        <img className="photo" src={img2} alt="dragoni"/> 
        <img className="photo" src={img3} alt="dragoni"/> 

      </div>
      {/* <div className = "imgContainer">
        <img src={desktopBackground} alt="herobanner" className="heroBanner"/>
        <div className="overlay">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul className="secondaryMenu">
            <li>
            <NavLink to='/eventi'>
              <img src={linkBackground} alt="eventi" />
              <div className="linkOverlay">
               <span>eventi</span> 
              </div>
            </NavLink>
            </li>
            <li>
              <NavLink to='/galleria'>
                <img src={linkBackground} alt="galleria" />
                <div className="linkOverlay">
                  <span>galleria</span>
                </div>
              </NavLink>
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
      </div>    */}
    </div>


    let RenderDesktopContent = () => !isMobileOnly ? <DesktopHome/> : null;
    return (
      <div id="sitePage" className="Home">
        <div className = "welcome content">
          <RenderBackgroundImg/> 
          <div className="overlay">
            <img className="logo" src={logo} alt="logo"/>
            <AnchorLink offset={() => 100} href='#content'>
              <img className="arrow" src={arrowD} alt="go down"/>
            </AnchorLink>
            
          </div>

        </div>
       
        <RenderDesktopContent/>
      </div>
        
    );
  }
}

export default Home;