import React from 'react'
import Pokedex from '../Pokedex/Pokedex';

function Pokegame() {

   const pokedexArray = [
     {
       id: 4,
       name: "Charmander",
       type: "fire",
       base_experience: 62,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
     },
     {
       id: 7,
       name: "Squirtle",
       type: "water",
       base_experience: 63,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
     },
     {
       id: 11,
       name: "Metapod",
       type: "bug",
       base_experience: 72,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
     },
     {
       id: 12,
       name: "Butterfree",
       type: "flying",
       base_experience: 178,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
     },
     {
       id: 25,
       name: "Pikachu",
       type: "electric",
       base_experience: 112,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
     },
     {
       id: 39,
       name: "Jigglypuff",
       type: "normal",
       base_experience: 95,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
     },
     {
       id: 94,
       name: "Gengar",
       type: "poison",
       base_experience: 225,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
     },
     {
       id: 133,
       name: "Eevee",
       type: "normal",
       base_experience: 65,
       img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
     },
   ];

   let hand1 = [];
   let hand2 = [...pokedexArray];
   while(hand1.length < hand2.length){
     let randIdx = Math.floor(Math.random() * hand2.length);
     let randPokemon = hand2.splice(randIdx,1)[0];
     hand1.push(randPokemon);
   }
   let exp1 = hand1.reduce((exp,pokedexArray) =>exp + pokedexArray.base_experience, 0);
   let exp2 = hand2.reduce((exp, pokedexArray) => exp + pokedexArray.base_experience,0);

  return (
    <div className="Pokegame">
      <Pokedex pokedexArray={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokedexArray={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

export default Pokegame