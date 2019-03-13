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
    }
  }

  componentDidMount() {
    const randomNum = Math.floor((Math.random() * 7) + 1);
    fetch(`https://swapi.co/api/films/${randomNum}`)
    .then(response => response.json())
    .then(movie => this.setState({crawlText: movie.opening_crawl, movieTitle: movie.title, releaseDate: movie.release_date}))
  }

  render() {
    return (
      <section>
        <Header/>
        <TextFlow movieInfo={this.state}/>
        <Deck/>
      </section>
    );
  }
}

export default App;
