import React from 'react';

const Card = (props) => {
  if(props.state.currentFilter === 'people') {
    return(
      <article>
        <h1>{props.personInfo.name}</h1>
        <h2>Homeworld: {props.personInfo.homeworld}</h2>
        <h2>Species: {props.personInfo.species}</h2>
        <h2>Language: {props.personInfo.language}</h2> 
        <h2>Population: {props.personInfo.population}</h2>            
      </article>
    )
  } else if (props.state.currentFilter === 'planets') {
    return (
      <article>
        <h1>Name: {props.planetInfo.name}</h1>
        <h2>Terrain: {props.planetInfo.terrain}</h2>
        <h2>Population: {props.planetInfo.population}</h2>
        <h2>Climate: {props.planetInfo.climate}</h2> 
        <h2>Residents: {props.planetInfo.residents}</h2> 
      </article>
    )
  } else if (props.state.currentFilter === 'vehicles') {
    return (
      <article>
        <h1>Name: {props.vehicleInfo.name}</h1>
        <h2>Model: {props.vehicleInfo.model}</h2>
        <h2>Class: {props.vehicleInfo.vehicle_class}</h2>
        <h2>Passengers: {props.vehicleInfo.passengers}</h2> 
      </article>
    )
  }
}

export default Card;
