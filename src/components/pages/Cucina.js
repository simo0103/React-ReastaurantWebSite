import React, { Component } from 'react';
import '../../style/css/main.css';
import '../../style/css/cucina.css';
import cucinaImg from '../../images/desktop/food.jpg';
import arrowD from '../../images/svg/arrD.svg';
//import arrowDown from '../../images/svg/arrD.svg';
import data from "./menulist";
import AnchorLink from 'react-anchor-link-smooth-scroll';


class Cucina extends Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);    
    this.state = {
      prevClicked: null,
      typeClicked: null,
      open: false
    };
   
  }
  handleClick(tipo) {
    this.setState({ typeClicked : tipo });
    const cliccato = this.state.typeClicked;
    this.setState({ prevClicked : cliccato})
    const currentState = this.state.open;
    this.setState({ open: !currentState });
  }
 
  render() {
    const menuData = data.menuCucina;
    // classOpen = 'open';
  
    return (
      <div id="sitePage" className="Cucina">
       
        <div className="imgContainer">
          <img src={cucinaImg} alt="herobanner" className="heroBanner"/>
          <AnchorLink className="arrowAnchorLink" offset={() => 100} href='#main'>
              <img className="arrow" src={arrowD} alt="go down" onClick={this.scrollPage}/>
          </AnchorLink>
        </div>
  
        <div id="main" className="mainContainer">
        {/* cliccato ora : {this.state.typeClicked};
        cliccato prima : {this.state.prevClicked} */}
          <ul className="menuDynamicList">
            {
              menuData.map((menu, i)=> {
                const tipo = menu.tipo;
               // const classOpenClose = this.state.typeClicked ? "open" : this.state.prevClicked ? "closed" : "closed";
                return ( 
                 
                  <li key={i}
                  onClick={() => this.handleClick(tipo)}>
                    <div className="title">
                      <span>{menu.tipo}</span>                
                      {/* <img src={arrowDown} alt="arrow down select from menu" className="arrowDown"/>         */}
                    </div> 
                    { 
                      menu.lista.map((data,i) => { 
                        return (
                          <ul className="list category" key={i}>
                          <span className="category"> {data.categoria} </span>                        
                            { data.piatti.map((piatti,i) => 
                              <li className="piatti" key={i}>
                                <div>
                                  <span className="name">{piatti.name}</span>
                                  <span>{piatti.price} €</span>
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