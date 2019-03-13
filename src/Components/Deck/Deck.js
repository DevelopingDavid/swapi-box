import React from 'react'; 
import Card from '../Card/Card';

const Deck = (props) => {
  const Cards = props.cardInfo.people.map(person => (
    <Card key={person.name} personInfo={person} />
  ));

  return (
    <div>
      {Cards}
    </div>
  )
}

export default Deck;