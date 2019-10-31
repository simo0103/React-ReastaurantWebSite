import React, { Component } from 'react';
import freccette from '../../images/desktop/salafreccette.jpg';
import '../../style/css/home.css';


class Home extends Component {
  render() {

    return (
      <div className="Home">
     
        <img src={freccette} alt="herobanner" width="500"/>
       
      </div>
        
    );
  }
}

export default Home;