// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/fa';

import Actions from '../../../../actions';
import * as Const from '../../../../../../const';

import './home-button.css';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  navigateTo: Actions.commands.pages.navigateTo,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class HomeButton extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    navigateTo: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.navigateTo(this.props.pageId, Const.NEW_TAB_URL);
  }

  render() {
    return (
      <button
        className="flex-row"
        styleName="home-button enabled"
        onClick={this.handleClick}
      >
        <Icons.FaHome
          size="16"
        />
      </button>
    );
  }
}
