import React from 'react'; 
import Card from '../Card/Card';

const Deck = (props) => {
  let cards;
  if(props.cardInfo.currentFilter === 'people') {
    cards = props.cardInfo.people.map(person => (
      <Card key={person.name} personInfo={person} state={props.cardInfo} />
    ));
  } else if (props.cardInfo.currentFilter === 'planets') {
    cards = props.cardInfo.planets.map(planet => (
      <Card key={planet.name} planetInfo={planet} state={props.cardInfo} />
    ));
  } else if (props.cardInfo.currentFilter === 'vehicles') {
    cards = props.cardInfo.vehicles.map(vehicle => (
      <Card key={vehicle.name} vehicleInfo={vehicle} state={props.cardInfo} />
    ));
  }

  return (
    <div>
      {cards}
    </div>
  )
}

export default Deck;