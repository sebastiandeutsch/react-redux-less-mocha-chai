import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router';

import Sidebar from 'containers/Sidebar';
import Content from 'containers/Content';
import DevTools from 'containers/DevTools';

import * as Actions from 'actions/Actions';

import Styles from './Layout.less';

/**
 * Layout
 */
export class Layout extends React.Component {
  render() {
    const devTools = <DevTools />;

    return (
      <div className="DB">
        <Sidebar />
        <Content>
          {this.props.children}
        </Content>
        {__ENVIRONMENT__ != "production" && devTools}
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
