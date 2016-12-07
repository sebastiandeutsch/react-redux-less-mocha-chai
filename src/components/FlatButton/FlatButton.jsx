import React, { Component, PropTypes } from 'react';

import Styles from './FlatButton.less';

/**
 * FlatButton
 */
export default class FlatButton extends Component {
  handleOnClick = ::this.handleOnClick;

  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  handleOnClick(event) {
    this.props.onClick(event);
  }

  render() {
    return (
      <div className={Styles.FlatButton} onClick={this.handleOnClick}>
        {this.props.children}
      </div>
    )
  }
}
