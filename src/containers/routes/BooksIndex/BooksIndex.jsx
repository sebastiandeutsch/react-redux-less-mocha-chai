import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadBooks, redirectTo } from 'actions/Actions';
import { Link } from 'react-router';
import FlatButton from 'components/FlatButton';

export class BooksIndex extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loadBooks: PropTypes.func.isRequired
  }

  onClick() {
    this.props.loadBooks().then(
      () => {
        console.log("Tolle Sachen machen.")
      }
    );
  }

  onNewBookClicked() {
    this.props.redirectTo('/book/new');
  }

  render() {
    return (
      <div>
        <h1>Alle Bücher</h1>

        <FlatButton onClick={this.onNewBookClicked.bind(this)}>Neues Buch</FlatButton>

        <div onClick={this.onClick.bind(this)}>Load Books</div>
        <ul>
          {this.props.books.map( (book, index) => {
            return(
              <li key={index}>
                {book.title}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.collection
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: bindActionCreators(loadBooks, dispatch),
    redirectTo: bindActionCreators(redirectTo, dispatch)
  }
}

let connectFunctionWithMappedStateAndMappedDispatch = connect(
  mapStateToProps,
  mapDispatchToProps
);

let connectedComponent = connectFunctionWithMappedStateAndMappedDispatch(BooksIndex);

export default connectedComponent;
