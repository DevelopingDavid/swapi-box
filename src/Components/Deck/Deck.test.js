import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';

describe('Deck', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Deck/>
    )
  });

  it('should create snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});