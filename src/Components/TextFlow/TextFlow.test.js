import React from 'react';
import { shallow } from 'enzyme';
import TextFlow from './TextFlow';

describe('TextFlow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TextFlow/>
    )
  });

  it('should create snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});