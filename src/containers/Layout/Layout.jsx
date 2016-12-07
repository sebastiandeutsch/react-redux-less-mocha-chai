import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import Sidebar from 'containers/Sidebar';
import Content from 'containers/Content';

import * as Actions from 'actions/Actions';

import Styles from './Layout.less';

/**
 * Layout
 */
export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    app: state.app
  }),
  (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(Layout);
