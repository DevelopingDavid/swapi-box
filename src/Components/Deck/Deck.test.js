import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';
const mockState = {
  people: [{name: "Luke Skywalker", homeworld: "Tatooine", population: "200000", species: "Human", language: "Galactic Basic"}]
}

describe('Deck', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Deck cardInfo={mockState}/>
    )
  });

  it('should create snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});