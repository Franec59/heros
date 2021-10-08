import React from 'react';
import logo from '../Images/logo2.png';
import Navigation from "../components/Navigation";
import { AiOutlineWarning } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
    return (
        <div className="App">
            
        <header className="App-header">  
            <h1>Les dossiers secrets du S.H.I.E.L.D</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Navigation />

        </header>

        <div className="about">
          <p className="react">
            Ce site a été réalisé avec <em>"React"</em>, une bibliothèque JavaScript et fait appel à une API publique dédiée aux super-heros :
            <a href="https://superheroapi.com/" className="api">
              superheroapi.com
            </a>
            </p>
            
            <p className="react">
                <span className="becarefull"><AiOutlineWarning /></span>
                L'API "superhero" contient parfois des données manquantes ou l'url de certaines images n'existent plus.
                Vous risquez donc, le cas échéant, de constater des vides ou des images manquantes dans les dossiers de recherche !
            </p>
            <p className="react">
                Pour me contacter :
                <br />
                <span className="linkedin"><AiFillLinkedin /></span>
                <a href="https://www.linkedin.com/in/francois-lion/" className="api">
                linkedin/francois-lion
                </a>
            </p>
        </div>
        
    </div>
    );
};

export default About;