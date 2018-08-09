// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/fa';

import Actions from '../../../../actions';
import Selectors from '../../../../selectors';

import './back-button.css';

const mapStateToProps = (state, ownProps) => ({
  canGoBack: Selectors.getPageCanGoBack(state, ownProps.pageId),
});

const mapDispatchToProps = {
  goBack: Actions.commands.pages.goBack,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class BackButton extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    canGoBack: PropTypes.bool.isRequired,
    goBack: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.goBack(this.props.pageId);
  }

  render() {
    return (
      <button
        className="flex-row"
        styleName={`back-button ${this.props.canGoBack ? 'enabled' : ''}`}
        disabled={!this.props.canGoBack}
        onClick={this.handleClick}
      >
        <Icons.FaArrowLeft
          size="16"
        />
      </button>
    );
  }
}
