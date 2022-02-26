import React from 'react'
import "./Pokecard.css";

function Pokecard(props) {
  return (
    <div className="Pokecard">
     
      <div className="card">
        <h1 className="card-h1"> {props.name}</h1>
        <img className="card-img" src={props.img} />
        <p className="card-p">Type:{props.type}</p>
        <p className="card-p">Exp:{props.base_experience}</p>
      </div>
    </div>
  );
}

export default Pokecard