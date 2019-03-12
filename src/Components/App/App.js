import React, { Component } from 'react';
import Header from '../Header/Header';
import TextFlow from '../TextFlow/TextFlow';
import Deck from '../Deck/Deck';

class App extends Component {
  render() {
    return (
      <section>
        <Header/>
        <TextFlow/>
        <Deck/>
      </section>
    );
  }
}

export default App;
