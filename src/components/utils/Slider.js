import React, { Component } from "react";
import Slider from "react-slick";
import freccette from '../images/freccette.jpg';
import food from '../images/food.jpg';
import bar from '../images/bar.jpg';


class SliderSlick extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true 
    };
    return (
      <Slider {...settings}>
        <div>
        <img src={freccette} alt="freccette"/>
        </div>
        <div>
        <img src={food} alt="food"/>
        </div>
        <div>
        <img src={bar} alt="bar"/>
        </div>
       
      </Slider>
    );
  }
}
export default SliderSlick;