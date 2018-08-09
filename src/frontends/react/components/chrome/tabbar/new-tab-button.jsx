// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/fa';

import Actions from '../../../actions';

import './new-tab-button.css';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  addPage: Actions.model.pages.add,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class NewTabButton extends PureComponent {
  static propTypes = {
    addPage: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.addPage();
  }

  render() {
    return (
      <button
        className="flex-row"
        styleName="new-tab-button"
        onClick={this.handleClick}
      >
        <Icons.FaPlus
          size="20"
        />
      </button>
    );
  }
}
