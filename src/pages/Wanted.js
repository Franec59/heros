import React, { useState, useEffect } from 'react';
import logo from '../Images/logo2.png';
import Navigation from "../components/Navigation";
import axios from 'axios';
import { useForm } from "react-hook-form";
import "../style/wanted.css";
import { AiFillFolderOpen } from "react-icons/ai";
import { Clock } from '../components/Clock';

const Wanted = () => {

    const [hero, setHero] = useState();
    const [heroName, setHeroName] = useState();
    const {register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        console.log("data : ", data.nom)
        setHeroName(data.nom)
        //getHero()
    }

    console.log("heroName : ",heroName);

    useEffect (() => {
        function getHero () {
            axios.get('https://www.superheroapi.com/api.php/4414670528612372/search/' + `${heroName}`)
                .then((res) => { setHero(res.data.results)})
                .catch((err) => {console.log(err)})
        }
        getHero()
    },[heroName])

    function Alignment(props) {
      if (`${props.dossier}` == "good") {
        return (
          <h4 className="heroic">
            Suspect should be considered Heroic and Famous !
          </h4>
        );
      } else if (`${props.dossier}` == "bad") {
        return (
          <h4 className="armed">
            Suspect should be considered Armed and Dangerous ...
          </h4>
        );
      } else if (`${props.dossier}` == "neutral") {
        return (
          <h4 className="neutral">
            Suspect should be neutral for the time being ...
          </h4>
        );
        } else {
          return (
            <h4 className="unknown">
              Alignment unknown, We need more informations about this suspect !
            </h4>
          );
          }
    }

    console.log("retour API : ", hero);
    
    function Affiche() {
      if (hero != null) {
        return(
        <div className="dossier-aff">
          <ul className="dossier-ul">           
              {hero.map((dossier) => (
                <li className="dossier-li" key={dossier.id}>
                <div className="affiche">
                  <div className="aff-header">
                    <div className="police-logo"></div>
                    <div className="police-dept">
                      <h2 className="police-dept-title">Police Departement</h2>
                      <h2 className="police-dept-case">
                        File N° {dossier.id}{" "}
                      </h2>
                    </div>
                    <div className="police-case"></div>
                  </div>
                  <div className="black-header">Wanted</div>
                  <div className="hero-name">
                    <h1>--- {dossier.name} ---</h1>
                  </div>
                  <div className="first-block">
                    <div className="hero-img">
                      <img src={dossier.image.url} alt={dossier.name} className="dossier-img" />
                    </div>
                    <div className="hero-skill">
                      <div className="skills-infos">
                        <div className="alias">
                          <h2 className="full">Full-Name_:</h2>
                          <h2 className="full-res">
                            {dossier.biography["full-name"]}
                          </h2>
                        </div>
                        <div className="alias">
                          <h2 className="full">Alias_:</h2>
                          <h2 className="full-res">
                            {dossier.biography.aliases.join(", ")}
                          </h2>
                        </div>
                      </div>
                      <div className="skills-array">
                        <div className="FolderOpen">
                          <p className="aiFill">
                            <AiFillFolderOpen />
                          </p>
                          <h2>Informations</h2>
                        </div>
                        <table>
                        <tbody>
                        <tr>
                            <td className="td-title">Alter-egos</td>
                            <td className="td-res">
                              {dossier.biography["alter-egos"]}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">Race</td>
                            <td className="td-res">
                              {dossier.appearance.race}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">Occupation</td>
                            <td className="td-res">
                              {dossier.work.occupation}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">Place of birth</td>
                            <td className="td-res">
                              {dossier.biography["place-of-birth"]}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">Group affiliation</td>
                            <td className="td-res">
                              {dossier.connections["group-affiliation"]}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">Relatives</td>
                            <td className="td-res">
                              {dossier.connections.relatives}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">Base</td>
                            <td className="td-res">{dossier.work.base}</td>
                          </tr>
                          <tr>
                            <td className="td-title">Publisher</td>
                            <td className="td-res-pu">
                              {dossier.biography.publisher}
                            </td>
                          </tr>
                          <tr>
                            <td className="td-title">First-appearance</td>
                            <td className="td-res">
                              {dossier.biography["first-appearance"]}
                            </td>
                          </tr>
                        </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="black-footer">
                    <Alignment dossier={dossier.biography.alignment} />
                  </div>
                  </div>
                </li>
              ))}
          </ul>
          </div>
        );
      } else if (hero == null || undefined) {
        return(
          <div className="missed">
            {/* <h1 className="missed-title">Dossier vide ...</h1> */}
          </div>
        );
      }
    }//fin de affiche

    function Files () {
        if(hero != null && hero.length > 1 ){
            return (
                <div className="file-aff">
                    <h2 className="yes-file">--- {hero.length} dossiers archivés ---</h2>
                    <ul className="file-ul">
                        {hero.map((el) =>(
                            <li className="file-li" key={el.id}><div className="file"><img src={el.image.url} className="file-img"/></div>{el.name}</li>
                        ))}
                    </ul>
                </div>
            
            )} else if (hero != null && hero.length === 1 ) { 
                return (
                    <div className="file-aff">
                        <h2 className="yes-file">--- {hero.length} dossier archivé ---</h2>
                        <ul className="file-ul">
                            {hero.map((el) =>(
                                <li className="file-li" key={el.id}><div className="file"><img src={el.image.url} className="file-img"/></div>{el.name}</li>
                            ))}
                        </ul>
                    </div>
                )} else if (hero == null || undefined) {
                return (
                    <div className="no-file">
                        <h2 className="no-file-title">--- 0 file found ---</h2>
                    </div>
                )
            } 
    }//fin de files

    return (
        <div className="App">
            
        <header className="App-header">  
            <h1>Les dossiers secrets du S.H.I.E.L.D</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Navigation />

            <div className="clock-title">
              <h2>Dossier consulté le </h2><Clock />
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <label htmlFor="rechercher">Entrez le nom du personnage recherché</label>
                        <input type="text" id="rechercher" name="rechercher" placeholder="nom ..." {...register("nom", { required: true })}/>
                    </div>
                    <div>
                        <button type="submit" className="submit">Rechercher</button>
                    </div>
                </form>
            </div>

      </header>
            <div id="affichage">
                <Files />
                <Affiche />     
            </div>
    </div>
    );
  
};

export default Wanted;