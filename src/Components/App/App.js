import React, { Component } from 'react';
import Header from '../Header/Header';
import TextFlow from '../TextFlow/TextFlow';
import Deck from '../Deck/Deck';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faJedi } from '@fortawesome/free-solid-svg-icons';
library.add(faJedi)

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlText: '',
      movieTitle: '',
      releaseDate: '',
      people: [],
      planets: [],
      vehicles: [],
      currentFilter: ''
    }
  }

  retrievePeople = (people, currentFilter) => {
    this.setFilter(currentFilter);
    this.setState({people});
  }

  retrievePlanets = (planets, currentFilter) => {
    this.setFilter(currentFilter);
    this.setState({planets});
  }
  retrieveVehicles = (vehicles, currentFilter) => {
    this.setFilter(currentFilter);
    this.setState({vehicles});
  }

  setFilter = (currentFilter) => {
    this.setState({currentFilter});
  }

  componentDidMount() {
    const randomNum = Math.ceil((Math.random() * 7));
    fetch(`https://swapi.co/api/films/${randomNum}/`)
    .then(response => response.json())
    .then(movie => this.setState({crawlText: movie.opening_crawl, movieTitle: movie.title, releaseDate: movie.release_date}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <section className='app-container'>
        <Header retrievePeople={this.retrievePeople} retrievePlanets={this.retrievePlanets} retrieveVehicles={this.retrieveVehicles} setFilter={this.setFilter} state={this.state}/>
        <TextFlow movieInfo={this.state}/>
        <Deck cardInfo={this.state}/>
      </section>
    );
  }
}

export default App;
