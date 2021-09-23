import React from 'react';
import logo from '../Images/logo2.png';
import Navigation from "../components/Navigation";
import Annuaires from '../components/Annuaires';


const Galerie = () => {
    return (
        <div className="App">
            
        <header className="App-header">  
            <h1>Les dossiers secrets du S.H.I.E.L.D</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Navigation />
            <Annuaires />
      </header>
    </div>
    );
};

export default Galerie;