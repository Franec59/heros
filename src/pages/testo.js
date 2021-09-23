import React from 'react';

const testo = () => {

    // function Alignment () {
    //     if(`${hero[0].biography.alignment}` == "good"){
    //         return (
    //             <h4 className="heroic">Suspect should be considered Heroic and Famous !</h4>
    //         )
    //     } else if (`${hero[0].biography.alignment}` == "bad"){
    //         return (
    //             <h4 className="armed">Suspect should be considered Armed and Dangerous ...</h4>
    //         )
    //     }
    // }





    // <div className="card-action">
    //                     <a href="#" onClick={() => 
    //                    this.props.viewMovieInfo(movie.idFromTmdb)}>Movie Details</a>
    //                 </div>

// useEffect(() => {
    //         if (playOnce) {

    //     axios.get('https://www.superheroapi.com/api.php/4414670528612372/search/batman')
    //         .then((res) => {
    //                 setHero(res.data.results);
    //                 setPlayOnce(false); 
    //             })
    //     }
    // },[hero]);

    // const id = 12;
    // axios.get('https://www.superheroapi.com/api.php/4414670528612372/' + `${id}`)
    // .then((res) => {
    //     console.log(res.data.name)  
    // });

    // function getHero () {
        
    //     axios.get('https://www.superheroapi.com/api.php/4414670528612372/search/' + `${heroName}`)
    //         .then((res) => {
    //                 setHero(res.data.results);
    //         }).catch((err) => {
    //             console.log(err);
    //         })
    // }

    // function DossierParents (){
    //     if (hero != null || undefined){
    //         const keys = Object.keys(hero)
    //         console.log(keys.length);
    //         for(let item in keys){
    //         console.log(hero[item]);

    //         // return (
    //         //     <div>
    //         //         <h2>{hero[item].name}</h2>
    //         //     </div>
    //         // )

    //         }
    //     } else if (hero == null || undefined) {
    //         return (
    //             <div className="missed">
    //                 <h1 className="missed-title">Dossier vide ...</h1>
    //             </div>
    //         )
    //     } 
    // }
    

    return (
        <div>
            <h4>{hero[0].name}</h4>
        </div>
    );
};

export default testo;