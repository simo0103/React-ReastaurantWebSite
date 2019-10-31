import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { isMobile } from 'react-device-detect';
//sass
import '../style/css/navbar.css';
//images
import logo from '../images/logo.png';
import close from '../images/svg/close.svg';
import hamburger from '../images/svg/hamb.svg';

class NavBar extends Component {
  render() {
   // var isActive = this.context.router.route.location.pathname === this.props.to;
    var classActive =  'active';
    //const [open, setOpen] = useState(false);

    const MobileNav = (props) =>
        <nav>
          <div className="navLogo">
            <NavLink activeClassName='' to='/'>
              <img className="logo" src={logo} alt="logo"/>
            </NavLink>
          <div>
              <img className="hamburger" src={hamburger} alt="open menu"/>
              <img className="close" src={close} alt="close menu"/>
            </div>
          </div>
          <ul>                
              <li><NavLink activeClassName={classActive} exact={true} to='/'>Home</NavLink></li>
              <li><NavLink activeClassName={classActive} to='/cucina'>La cucina</NavLink></li>
              <li><NavLink activeClassName={classActive} to='/bar'>il bar</NavLink></li>
              <li><NavLink activeClassName={classActive} to='/contattaci'>contattaci</NavLink></li>
              <li><NavLink activeClassName={classActive} to='/galleria'>galleria</NavLink></li>
              <li><NavLink activeClassName={classActive} to='/sport'>sport</NavLink></li>

          </ul>
        </nav>
    
    const DesktopNav = (props) =>
      <nav>
      <ul>                
          <li><NavLink activeClassName={classActive} exact={true} to='/'>Home</NavLink></li>
          <li><NavLink activeClassName={classActive} to='/cucina'>La cucina</NavLink></li>
          <li><NavLink activeClassName='' to='/'><img className="logo" src={logo} alt="logo"/></NavLink></li>
          <li><NavLink activeClassName={classActive} to='/bar'>il bar</NavLink></li>
          <li><NavLink activeClassName={classActive} to='/contattaci'>contattaci</NavLink></li>
      </ul>
    </nav>
    
    let RenderNavBar = (props) => isMobile ? <MobileNav/> : <DesktopNav/>
   
    return (
      <header>
        <RenderNavBar/>
      </header>

    )   
  }
}

export default NavBar;
