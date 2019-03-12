import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe('Controls', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls/>
    )
  });

  it('should create snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});