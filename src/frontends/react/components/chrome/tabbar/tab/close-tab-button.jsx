// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/fa';

import Actions from '../../../../actions';

import './close-tab-button.css';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  removePage: Actions.model.pages.remove,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class CloseTabButton extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    removePage: PropTypes.func.isRequired,
  }

  handleClick = (e) => {
    e.stopPropagation();
    this.props.removePage(this.props.pageId);
  }

  render() {
    return (
      <button
        className="flex-row"
        styleName="close-tab-button"
        onClick={this.handleClick}
      >
        <Icons.FaTimesCircle
          size="14"
        />
      </button>
    );
  }
}
