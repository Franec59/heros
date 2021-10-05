import React from 'react';
import logo from '../Images/logo2.png';
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div className="App">
            
        <header className="App-header">  
            <h1>Les dossiers secrets du S.H.I.E.L.D</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Navigation />

        </header>

        <p className="react">
        Ce site a été réalisé avec <em>"React"</em>, une bibliothèque JavaScript et fait appel à une API public dédié aux super-heros :
        <a href="https://superheroapi.com/" className="api">
              superheroapi.com
            </a>
        
        </p>

    </div>
    );
};

export default About;