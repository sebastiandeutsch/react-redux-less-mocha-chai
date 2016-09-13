import React from 'react';
import { shallow } from 'enzyme';
import { BooksIndex } from 'containers/routes/BooksIndex';

describe('', () => {
  it('', () => {
    const books = [
      {
        title: "eins",
        isbn: "1"
      },
      {
        title: "zwei",
        isbn: "2"
      }
    ]
    const loadBooks = () => {};

    const wrapper = shallow(<BooksIndex books={books} loadBooks={loadBooks} />);

    expect(wrapper.text()).toEqual('Alle Bücher<FlatButton />Load Bookseinszwei');
  });

});
