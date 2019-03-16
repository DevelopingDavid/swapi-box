import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;
  beforeEach(() =>{
    wrapper = shallow(
      <App/>
    )
  })

  it('should create snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have default states', () => {
    expect(wrapper.state()).toEqual({
      crawlText: '',
      movieTitle: '',
      releaseDate: '',
      people: []
    });
  });

});
