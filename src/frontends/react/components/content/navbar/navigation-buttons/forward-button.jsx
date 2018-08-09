// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/fa';

import Actions from '../../../../actions';
import Selectors from '../../../../selectors';

import './forward-button.css';

const mapStateToProps = (state, ownProps) => ({
  canGoForward: Selectors.getPageCanGoForward(state, ownProps.pageId),
});

const mapDispatchToProps = {
  goForward: Actions.commands.pages.goForward,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class ForwardButton extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    canGoForward: PropTypes.bool.isRequired,
    goForward: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.goForward(this.props.pageId);
  }

  render() {
    return (
      <button
        className="flex-row"
        styleName={`forward-button ${this.props.canGoForward ? 'enabled' : ''}`}
        disabled={!this.props.canGoForward}
        onClick={this.handleClick}
      >
        <Icons.FaArrowRight
          size="16"
        />
      </button>
    );
  }
}
