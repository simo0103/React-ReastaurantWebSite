import React, { Component } from 'react';
import { isMobileOnly, isTablet } from 'react-device-detect';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';

// const App = () => (
//   <div>
//     <Header />
//     <Main />
//   </div>
// )
class App extends Component {
 
  render() {
    const viewportClass = isMobileOnly ? "mobileView" : isTablet ? "tabletView" : "desktopView";

    return (
      <div id="App" className={ viewportClass }>
        <NavBar/>
        <Main />
        <Footer />

      </div>
    );
  }
}

export default App;
;
