import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import '../style/css/navbar.css';
import logo from '../images/logo.png';

//token d4itqdmz67bhsnpymefac5jaalrygikz4fhhsmkp2p4hm7vj3b7q
class NavBar extends Component {
  render() {
   // var isActive = this.context.router.route.location.pathname === this.props.to;
    var classActive =  'active' ;
  
    return (
      <header>
          <nav>
              <ul>                
                  <li><NavLink activeClassName={classActive} exact={true} to='/'>Home</NavLink></li>
                  <li><NavLink activeClassName={classActive} to='/cucina'>La cucina</NavLink></li>
                  <li className="logo"><img src={logo} alt="logo"/></li>
                  <li><NavLink activeClassName={classActive} to='/bar'>il bar</NavLink></li>
                  <li><NavLink activeClassName={classActive} to='/contattaci'>contattaci</NavLink></li>
              </ul>
          </nav>
      </header>
    );
  }
}

export default NavBar;
