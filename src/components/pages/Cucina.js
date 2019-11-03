import React, { Component } from 'react';
import '../../style/css/main.css';
import '../../style/css/cucina.css';
import cucinaImg from '../../images/desktop/food.jpg';
import arrowDown from '../../images/svg/arrD.svg';
import data from "./menulist";

class Cucina extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  render() {
    const menuData = data.menuCucina;
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
          <ul>
            {
              menuData.map((menu, i)=> {
                return (               
                  <li key={i} className={menu.tipo}>{menu.tipo}      
                    { 
                      menu.lista.map((data,i) => { 
                        return (
                          <ul className="list" key={i}>
                          <span className="category"> {data.categoria} </span>                        
                            { data.piatti.map((piatti,i) => 
                              <li className="piatti" key={i}>
                                <div>
                                  <span className="name">{piatti.name}</span>
                                  <span>{piatti.price}</span>
                                </div>
                                <span className="ingredienti">{piatti.ingredienti}</span>
                              </li>                            
                            )}                         
                          </ul>                       
                        ) 
                      })
                    }     
                              
                  </li>
                )
              })
            }
          </ul>
               
        </div>

      </div>
    );
  }
}

export default Cucina;