import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook, redirectTo } from 'actions/Actions';

export class BookCreate extends Component {
  handleSubmitClick = (event) => {
    const book = {
      isbn: this.refs.isbn.value,
      title: this.refs.title.value,
      abstract: this.refs.abstract.value
    }

    this.props.createBook(book);
    this.props.redirectTo("/");
  }

  render() {

    return(
      <div>
        <h2>Neues Buch erstellen</h2>
        <div>
          <ul>
            <li>
              <input ref="isbn" type="text" placeholder="isbn" />
            </li>
            <li>
              <input ref="title" type="text" placeholder="title" />
            </li>
            <li>
              <textarea ref="abstract" placeholder="abstract"></textarea>
            </li>
            <li>
              <input onClick={this.handleSubmitClick} type="submit" value="Buch speichern" />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    createBook: bindActionCreators(createBook, dispatch),
    redirectTo: bindActionCreators(redirectTo, dispatch),
  })
)(BookCreate)
