import React from 'react';

const Card = (props) => {
  return(
    <article>
      <h1>{props.personInfo.name}</h1>
      <h2>Homeworld: {props.personInfo.homeworld}</h2>
      <h2>Species: {props.personInfo.species}</h2>
      <h2>Language: {props.personInfo.language}</h2> 
      <h2>Population: {props.personInfo.population}</h2>            
    </article>
  )
}

export default Card;
