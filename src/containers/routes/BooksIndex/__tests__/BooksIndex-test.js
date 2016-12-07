import React from 'react';
import { mount } from 'enzyme';
import { BooksIndex } from '../BooksIndex';

describe('FlatButton', () => {
  it('should render', () => {
    const books = [{
      isbn: 666,
      title: "Necronomicon"
    },
    {
      isbn: 0,
      title: "The Bible"
    },
    {
      isbn: 1,
      title: "Budhism"
    },
    ]

    const wrapper = mount(<BooksIndex books={books} />);
    expect(wrapper.find('li')).to.have.length(3);
  });
});
