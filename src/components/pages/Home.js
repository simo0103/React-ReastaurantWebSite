import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import CountDown  from '../utils/CountDown';
import desktopBackground from '../../images/desktop/salafreccette.png';
import mobileBackground from '../../images/mobile/banner-mobile.png';
import Galleria from "./Galleria";
import DiconodiNoi from "./DiconoDiNoi";
import Contattaci from "./Contattaci";
import Slider from "react-slick";

//import linkBackground from '../../images/desktop/bulldog.jpg';
import img1 from '../../images/gallery/img1.jpg';
import img2 from '../../images/gallery/img2.jpg';
import img3 from '../../images/gallery/img3.jpg';
import logo from '../../images/logo1bolder.png';
import arrowD from '../../images/svg/arrD.svg';
import beer1 from '../../images/png/ichnusa.png';
import beer2 from '../../images/png/heineke.png';
import beer3 from '../../images/png/erdinger.png';
import beer4 from '../../images/png/guinness.png';
import beer5 from '../../images/png/affligem.png';


//import { NavLink } from "react-router-dom";

import '../../style/css/home.css';
import '../../style/css/home_mobile.css';



class Home extends Component {
 
  render() {

    const MobileImg = () => <img src={mobileBackground} alt="herobanner" className="heroBanner"/>;
    const DesktopImg = () => <img src={desktopBackground} alt="herobanner" className="heroBanner"/>;
    let RenderBackgroundImg = () => isMobileOnly ? <MobileImg/> : <DesktopImg/>;
    var settings = {
          dots: false,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,

      };
    const SliderMobile = () => 
    <div id="section" className="gallery">
      <Slider {...settings}>
        <img className="photo" src={img1} alt="dragoni"/> 
        <img className="photo" src={img2} alt="dragoni"/> 
        <img className="photo" src={img3} alt="dragoni"/> 

      </Slider>

    </div>
    
    const DesktopGallery = () => 
    <div id="section" className="gallery">
      <img className="photo" src={img1} alt="dragoni"/> 
      <img className="photo" src={img2} alt="dragoni"/> 
      <img className="photo" src={img3} alt="dragoni"/> 
   </div>
    

    let RenderThreeImages = () => !isMobileOnly ? <DesktopGallery/> : <SliderMobile></SliderMobile>;
    return (
      <div id="sitePage" className="Home">
        <div className = "imgContainer content">
          <RenderBackgroundImg/> 
          
            <img className="logo" src={logo} alt="logo"/>
            <AnchorLink className="arrowAnchorLink" offset={() => 100} href='#content'>
              <img className="arrow" src={arrowD} alt="go down"/>
            </AnchorLink>
        </div>
       
        <div id="content" className = "content">
      <div id="section" className="aboutUs">
        <p>Chi Siamo..<br></br>
        <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
     <RenderThreeImages/>
      <div id="section" className="beerSelection">
        <p>
            Le nostre birre alla spina
        </p>
        <div>       
            <img className="beer" src={beer1} alt="beer"/> 
            <img className="beer" src={beer2} alt="beer"/> 
            <img className="beer" src={beer3} alt="beer"/> 
            <img className="beer" src={beer4} alt="beer"/> 
            <img className="beer" src={beer5} alt="beer"/>      
        </div>
        <button>VEDI IL MENU DELLE BIRRE</button>
      </div>
      <DiconodiNoi></DiconodiNoi>

      <CountDown></CountDown>
      <Galleria></Galleria>
      <Contattaci></Contattaci>
    </div>

      </div>
        
    );
  }
}

export default Home;