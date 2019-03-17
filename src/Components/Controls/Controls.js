import React, { Component } from 'react';
import { promised } from 'q';

export default class Controls extends Component{
  constructor(props) {
    super(props);
  }

  recievePeople =  async () => {
    let peopleArray = [];
    if(this.props.state.people.length === 0) {
      const response = await fetch('https://swapi.co/api/people/?page=1')
      const people = await response.json();
      peopleArray.push(...people.results);
      const homeworld = await this.recieveHomeWorld(peopleArray);
      const peopleData = await this.recieveSpecies(homeworld);
      this.props.retrievePeople(peopleData);
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
      return ({
         name: person.name,
         homeworld: person.homeworld,
         population: person.population,
         species: species.name,
         language: species.language
        });
    });
    return Promise.all(unresolvedPromises);
  }

  recievePlanets = async () => {
    if(this.props.state.planets.length === 0) {
      const response = await fetch('https://swapi.co/api/planets?page=1')
      const planets = await response.json();
      const planetsInfo = await this.recieveResidents(planets.results);
      this.props.retrievePlanets(planetsInfo);
    }
  }

  recieveResidents = (planets) => {
    const unresolvedPromises = planets.map(async planet => {
      if(planet.residents.length > 0) {
        const residents = await this.recieveResident(planet.residents);
        return ({
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residents
        });
      } else {
        return ({
          name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: ['N/A']
        })
      }
    });
    return Promise.all(unresolvedPromises);
  }

  recieveResident = (residentsLink) => {
    const unresolvedPromises = residentsLink.map(async resident => {
      const response = await fetch(resident);
      const person = await response.json();
      return person.name
    });
    return Promise.all(unresolvedPromises);
  }
  
  render() {
    return (
      <section>
        <button onClick={this.recievePeople}>People</button>
        <button onClick={this.recievePlanets}>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
        <h3>0</h3>
      </section>
    )
  }
} 