// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Galerie from './pages/Galerie';
import Wanted from './pages/Wanted';
import Notfound from './pages/Notfound';


function App() {
  return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/galerie" exact component={Galerie} />
            <Route path="/wanted" exact component={Wanted} />
            <Route path="/a-propos" exact component={About} />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
  );
}

export default App;
