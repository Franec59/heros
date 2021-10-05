import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';


const Typing = () => {

    const words = ["autorisation en cours", "Agent du S.H.I.E.L.D", "confirmé !" ];
    

    return (
        <div className="typing">
            <h2 className="habi">HABILITATION : </h2>
            <h2 className="typewriter"><Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('autorisation en cours ...')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString('agent du SHIELD confirmé !')
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString("<span class='acces'>Accés autorisé !</span>")
                    .pauseFor(2500)
                    
                    .start();
                    
                }}
                />
            </h2>
            
        </div>
    );
};

export default Typing;