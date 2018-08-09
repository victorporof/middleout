// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import mouseTrap from 'react-mousetrap';

import Actions from '../actions';

import Chrome from './chrome';
import Content from './content';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  reloadApp: Actions.effects.app.reload,
  addPage: Actions.model.pages.add,
  removeCurrentPage: Actions.commands.pages.removeCurrentPage,
  reloadCurrentPage: Actions.commands.pages.reloadCurrentPage,
};

@mouseTrap
@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class Window extends PureComponent {
  static propTypes = {
    bindShortcut: PropTypes.func.isRequired,
    reloadApp: PropTypes.func.isRequired,
    addPage: PropTypes.func.isRequired,
    removeCurrentPage: PropTypes.func.isRequired,
    reloadCurrentPage: PropTypes.func.isRequired,
  }

  constructor(props, ...args) {
    super(props, ...args);
    props.addPage();
  }

  componentWillMount() {
    this.props.bindShortcut('mod+shift+r', this.handleAppReload);
    this.props.bindShortcut('mod+t', this.handleNewTab);
    this.props.bindShortcut('mod+w', this.handleCloseTab);
    this.props.bindShortcut('mod+r', this.handleReloadTab);
  }

  handleAppReload = () => {
    this.props.reloadApp();
  }

  handleNewTab = () => {
    this.props.addPage();
  }

  handleCloseTab = () => {
    this.props.removeCurrentPage();
  }

  handleReloadTab = () => {
    this.props.reloadCurrentPage();
  }

  render() {
    return (
      <Fragment>
        <Chrome />
        <Content />
      </Fragment>
    );
  }
}
