import React, { Component } from 'react';

export default class Controls extends Component{
  constructor(props) {
    super(props);
  }

  recievePeople = () => {
    if(this.props.people.length === 0) {
      fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(people => this.props.retrievePeople(people.results))
      .catch(err => console.log(err))
    }
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