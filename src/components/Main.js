import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bar from './pages/Bar';
import Cucina from './pages/Cucina';
import Contattaci from './pages/Contattaci';
import Galleria from './pages/Galleria';
import Sport from './pages/Sport';
import Eventi from './pages/Eventi';

class Main extends Component {
  render() {
    return (
     <main>
       <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cucina' component={Cucina} />
        <Route exact path='/bar' component={Bar} />
        <Route exact path='/contattaci' component={Contattaci} />
        <Route exact path='/sport' component={Sport} />
        <Route exact path='/eventi' component={Eventi} />
        <Route exact path='/galleria' component={Galleria} />
       </Switch>
     </main>
    );
  }
}

export default Main;
