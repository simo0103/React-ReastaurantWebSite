import React, { Component } from 'react';
import freccette from '../../images/test.jpg';
import '../../style/css/home.css';


class Home extends Component {
  render() {

    return (
      <div className="Home">
        <div className="heroBanner">
        <img src={freccette} alt="herobanner"/>
        </div>
      </div>
        
    );
  }
}

export default Home;