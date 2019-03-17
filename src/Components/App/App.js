import React, { Component } from 'react';
import Header from '../Header/Header';
import TextFlow from '../TextFlow/TextFlow';
import Deck from '../Deck/Deck';

class App extends Component {
  constructor() {
    super();
    this.state = {
      crawlText: '',
      movieTitle: '',
      releaseDate: '',
      people: [],
      planets: []
    }
  }

  retrievePeople = (people) => {
    this.setState({people})
  }

  retrievePlanets = (planets) => {
    this.setState({planets})
  }

  componentDidMount() {
    const randomNum = Math.ceil((Math.random() * 7));
    fetch(`https://swapi.co/api/films/${randomNum}`)
    .then(response => response.json())
    .then(movie => this.setState({crawlText: movie.opening_crawl, movieTitle: movie.title, releaseDate: movie.release_date}))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        <Header retrievePeople={this.retrievePeople} retrievePlanets={this.retrievePlanets} state={this.state}/>
        <TextFlow movieInfo={this.state}/>
        <Deck cardInfo={this.state}/>
      </section>
    );
  }
}

export default App;
