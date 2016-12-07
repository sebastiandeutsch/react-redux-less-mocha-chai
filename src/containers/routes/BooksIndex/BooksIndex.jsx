import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BooksIndex extends Component {
  render() {
    return(
      <div>
        <h2>Alle Bücher</h2>
        <ul>
          {this.props.books.map((book, index) => {
            return(
              <li key={book.isbn}>
                {book.title}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    books: state.books.collection
  }),
  dispatch => ({

  })
)(BooksIndex)
