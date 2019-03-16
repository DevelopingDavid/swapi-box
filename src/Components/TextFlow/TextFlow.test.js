import React from 'react';
import { shallow } from 'enzyme';
import TextFlow from './TextFlow';

const mockState = {crawlText: 'It is a period of civil war.\r\nRebel spaceships', movieTitle: 'A New Hope', releaseDate: '1977-05-25'}

describe('TextFlow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <TextFlow movieInfo={mockState}/>
    )
  });

  it('should create snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
});