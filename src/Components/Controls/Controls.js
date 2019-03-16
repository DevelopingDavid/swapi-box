import React, { Component } from 'react';

export default class Controls extends Component{
  constructor(props) {
    super(props);
  }

  recievePeople =  async () => {
    let peopleArray = [];
    if(this.props.people.length === 0) {
      const response = await fetch('https://swapi.co/api/people/?page=1')
      const people = await response.json();
      peopleArray.push(...people.results);
      const homeworld = await this.recieveHomeWorld(peopleArray);
      const finalData = await this.recieveSpecies(homeworld);
      this.props.retrievePeople(finalData);
    }
  }

  recieveHomeWorld = (people) => {
    const unresolvedPromises = people.map(async person => {
      const response = await fetch(person.homeworld);
      const home = await response.json();
      return ({...person, homeworld: home.name, population: home.population});
    });
    return Promise.all(unresolvedPromises);
  }

  recieveSpecies = (people) => {
    const unresolvedPromises = people.map(async person => {
      const response = await fetch(person.species[0]);
      const species = await response.json();
      return ({name: person.name, homeworld: person.homeworld, population: person.population, species: species.name, language: species.language});
    });
    return Promise.all(unresolvedPromises);
  }
  
  render() {
    return (
      <section>
        <button onClick={this.recievePeople}>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
        <h3>0</h3>
      </section>
    )
  }
} 