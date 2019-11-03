import React, { Component } from 'react';
import Api from '../../api/api';
import '../../style/css/main.css';
import '../../style/css/cucina.css';
import cucinaImg from '../../images/desktop/food.jpg';
import arrowDown from '../../images/svg/arrD.svg';


class Cucina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    
    return (
      <div id="sitePage" className="Cucina">
        <div className="imgContainer">
          <img src={cucinaImg} alt="herobanner" className="heroBanner"/>
        </div>
        <p> Lipsum dolor sit amet 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore  et dolore magna aliqua. 
        </p>
        <div className="mainContainer">
          <div className="title">
            <span>primi piatti</span>
            <button>
              <span>cambia menu</span>
              <span><img src={arrowDown} alt="arrow down select from menu" className="arrowDown"/></span>
            </button>
            
          </div>  
          <div>
              <ul>
                <li>primi
                  <ul className="list">          
                  {
                    Api.allPrimiPiatti().map(pp => (
                      //mettergli il key senno da errore in console
                      
                      <li key={pp.id}>
                      
                      <span className={pp.classname}>{pp.categoria}</span>
                        <div>
                          <span className="name">{pp.name}</span>
                          <span className="price">{pp.price}€</span> 
                        </div>                
                        <span className="ingredienti">{pp.ingredienti}</span> 
                      
                      </li>
                    ))
                  }
                  </ul>
                </li>
                <li>hamburger
                  <ul className="list hamburger">
                  {
                    Api.allPanini().map(pn => (
                      //mettergli il key senno da errore in console
                      
                      <li key={pn.id}>
                      
                      <span className={pn.classname}>{pn.categoria}</span>
                        <div>
                          <span className="name">{pn.name}</span>
                          <span className="price">{pn.price}€</span> 
                        </div>                
                        <span className="ingredienti">{pn.ingredienti}</span> 
                        
                      </li>
                    ))
                  }
                </ul>
              </li>
              <li>pizze</li>
              </ul>

            </div>   
        </div>

      </div>
    );
  }
}

export default Cucina;