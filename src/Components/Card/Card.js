import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeworld: '',
      species: '',
      language: '',
      population: ''
    }
  }
  componentDidMount() {
    fetch(this.props.personInfo.homeworld)
    .then(response => response.json())
    .then(planet => this.setState({homeworld: planet.name}))
    .catch(err => console.log(err))
    fetch(this.props.personInfo.species[0])
    .then(response => response.json())
    .then(species => this.setState({species: species.name, language: species.language}))
    .then(err => console.log(err))
    fetch(this.props.personInfo.homeworld)
    .then(response => response.json())
    .then(population => this.setState({population: population.population}))
    .then(err => console.log(err))
  }
  
  render() {
    return(
      <article>
        <h1>{this.props.personInfo.name}</h1>
        <h2>Homeworld: {this.state.homeworld}</h2>
        <h2>Species: {this.state.species}</h2>
        <h2>Language: {this.state.language}</h2> 
        <h2>Population: {this.state.population}</h2>            
      </article>
    )
  }
}
