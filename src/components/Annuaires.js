import React, { useState, useEffect } from 'react';
import axios from "axios";

const Annuaires = () => {
    // const [heroData, setHeroData] = useState();
    
    // const arrayHero = [];

    // useEffect(() => {
    
    // function allHero () {
    //     for(let i = 1; i < 10; i++){
    //         axios.get('https://www.superheroapi.com/api.php/4414670528612372/' + `${i}`)
    //         .then((res) => {
    //             //console.log(res.data.name);
    //             arrayHero.push(res.data.name)
    //             //setHeroData(res.data.name)
    //         }); 
    //     }
    // }
    // allHero();
    // }, []);

    
    // console.log(arrayHero);
    

    const listing = ["Terminator", "Robocop", "Cobra", "Total Recall" ]

    return (
        <div id="bob">
            <h4>listing des super heros</h4>
            <p>https://superheroapi.com/api/4414670528612372/character-id</p>

            <ol>
                {listing.map((item, k) => (
                <li key={k}>{item}</li>
                ))}
            </ol>

            <h3>bill</h3>
            
            
        </div>
    );
};

export default Annuaires;