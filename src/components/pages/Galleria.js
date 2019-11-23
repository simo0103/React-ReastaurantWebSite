import React, { Component } from 'react';
import '../../style/css/galleria.css';

import img4 from '../../images/gallery/img4.jpg';
import img5 from '../../images/gallery/img5.jpg';
import img6 from '../../images/gallery/img6.jpg';
import img7 from '../../images/gallery/img7.jpg';
import img8 from '../../images/gallery/img8.jpg';
import img9 from '../../images/gallery/img9.jpg';
import img10 from '../../images/gallery/img10.jpg';
import img11 from '../../images/gallery/img11.jpg';
import img12 from '../../images/gallery/img12.jpg';
import img13 from '../../images/gallery/img13.jpg';
import img14 from '../../images/gallery/img14.jpg';
import img15 from '../../images/gallery/img15.jpg';


class Galleria extends Component {
  render() {
    return (
      <div id="section">
        <h3>Ricordando gli altri anni...</h3>
        <div className="galleria">
          
          <img src={img4} alt="dragon octoberfest"></img>
          <img src={img5} alt="dragon octoberfest"></img>
          <img src={img6} alt="dragon octoberfest"></img>
          <img src={img7} alt="dragon octoberfest"></img>
          <img src={img8} alt="dragon octoberfest"></img>
          <img src={img9} alt="dragon octoberfest"></img>
          <img src={img10} alt="dragon octoberfest"></img>
          <img src={img11} alt="dragon octoberfest"></img>
          <img src={img12} alt="dragon octoberfest"></img>          
          <img src={img13} alt="dragon octoberfest"></img>
          <img src={img14} alt="dragon octoberfest"></img>
          <img src={img15} alt="dragon octoberfest"></img>


        </div>

      </div>
    );
  }
}

export default Galleria;