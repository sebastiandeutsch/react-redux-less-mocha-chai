import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBook, redirectTo } from 'actions/Actions';

class BookNew extends Component {
  onSubmit(event) {
    event.preventDefault();

    let book = {
      isbn: this.refs.isbn.value,
      title: this.refs.title.value
    }

    this.props.createBook(book);
    this.props.redirectTo('/');
  }

  render() {
    return(
      <div>
        <h1>Neues Buch</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <ul>
            <li>
              <label>ISBN:</label>
              <input ref="isbn" type="text" />
            </li>
            <li>
              <label>Titel:</label>
              <input ref="title" type="text" />
            </li>
            <li>
              <input type="submit" value="New Book" />
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: bindActionCreators(createBook, dispatch),
    redirectTo: bindActionCreators(redirectTo, dispatch)
  }
}

let connectFunctionWithMappedStateAndMappedDispatch = connect(
  mapStateToProps,
  mapDispatchToProps
);

let connectedComponent = connectFunctionWithMappedStateAndMappedDispatch(BookNew);

export default connectedComponent;
