import React from 'react'
import Pokecard from '../Pokecard/Pokecard'
import './Pokedex.css';
function Pokedex(props) {


  return (
    <div className="pokedex">
      <p className="pokedex-heading">Total Experience: {props.exp}</p>
      <h3 className="pokedex-heading">{props.isWinner ? "Winner!" : "Loser!"}
      </h3>
      <div className="pokedex-cards">
        {props.pokedexArray.map((index, key) => (
          <Pokecard
            id={index.id}
            key={key}
            name={index.name}
            type={index.type}
            base_experience={index.base_experience}
            img={index.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex