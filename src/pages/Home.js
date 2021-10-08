import React from 'react';
import logo from '../Images/logo2.png';
import Navigation from "../components/Navigation";

const Home = () => {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Les dossiers secrets du S.H.I.E.L.D</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <Navigation />
        </header>

        <div className="shield">
          <h2>Le S.H.I.E.L.D *</h2>
          <p className="shield-def">
            (typographié S.H.I.E.L.D. en VO),
            acronyme de{" "}
            <strong>
              « Strategic Homeland Intervention Enforcement Logistics Division »
            </strong>{" "}
            est une agence de renseignement, d'intervention et de
            contre-terrorisme de fiction appartenant à l'univers <em>Marvel</em>.
            <br />
            Créée par le scénariste Stan Lee et le dessinateur Jack Kirby, elle
            apparaît pour la première fois dans le comic book Strange Tales #135
            en août 1965.
            <br />
            Dirigée par Nick Fury (personnage créé en 1963), un vétéran de la
            Seconde Guerre mondiale et super-espion borgne, celui-ci en est le
            directeur historique ... 
          </p>
          <p className="shield-def">
            <a href="https://fr.wikipedia.org/wiki/SHIELD" className="source">
              *source Wikipédia
            </a>
          </p>
          <h2>Fonctionnement du site</h2>
          <p className="shield-def">
            Ce site utilise le SHIELD comme prétexte pour faire appel à une
            API de super-héros et autres personnages de fiction.
            <br />
            L'idée étant de faire comme si le Shield avait des dossiers
            sur tous ces héros, bons ou méchants, venant de chez Marvel, DC
            comics ou d'ailleurs !
          </p>

          <p className="shield-def">
            Vous pouvez donc consulter leur dossier nominatif sur la page 
             <em>"Accès aux dossiers"</em>.
          </p>

          <p className="shield-def">
            Cette API publique est uniquement en anglais et il vous faudra entrer
            les noms des personnages que vous recherchez en VO.
            <br />
            Exemples : <em>Captain America</em> et non "Capitaine America",{" "}
            <em>Spider-man</em> et non "Spiderman", <em>Darth Vader</em> et non
            "Dark Vador" !
            <br />
            <br />
            Outre les "super-heros", vous y trouverez d'autres "héros" tel que "James
            Bond", "Indiana Jones" ou même "Chuck Norris" !!
            <br />
            <br />
            Sur la page <em>Accès aux dossiers</em>, vous pouvez juste saisir "captain" ou
            "green" par exemple ou simplement une lettre et voir le résultat !
          </p>
          <p className="shield-def">
            Cette API recense 731 personnages, vous pouvez en consulter la liste complete ici :
            <br />
            <br />
            <a href="https://superheroapi.com/ids.html" className="source">
              Voir la liste compléte des personnages
            </a>
          </p>
        </div>
      </div>
    );
};

export default Home;