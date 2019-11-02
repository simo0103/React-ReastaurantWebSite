import React, { Component } from 'react';
import Api from '../api/api';
import { Link } from 'react-router-dom';
import '../style/css/menu.css';
//https://css-tricks.com/understanding-react-setstate/
class Menu extends Component {

  
//https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781

  render() {
 
    return (
      <div className="menu">
          <ul className="pizzaList">Pizze
            {
              Api.allPizza().map(p => (
                //mettergli il key senno da errore in console
                <li key={p.id}> 
                  <span className="name">{p.name}</span>
                  <span className="price">{p.price}€</span> 
                 
                </li>
              ))
            }
          </ul>
          <ul className="burgerList">Hamburger
            {
              Api.allHamburger().map(h => (
                <li key={h.id}> 
                  <span className="name">{h.name}</span>
                  <span className="price">{h.price}€</span> 
                 
                </li>
              ))
            }
          </ul>        
       

        <Link to='/home'>Back</Link>
       
      </div>
    );
  }
}

export default Menu;
