// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from '../../../../actions';
import Selectors from '../../../../selectors';

import './tab-content.css';
import TabTitle from './tab-title';

const mapStateToProps = (state, ownProps) => ({
  selected: Selectors.getSelectedPageId(state) === ownProps.pageId,
});

const mapDispatchToProps = {
  selectPage: Actions.model.pages.select,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class Tab extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    selectPage: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.selectPage(this.props.pageId);
  }

  render() {
    return (
      <button
        className="flex-row flex-1"
        styleName={`tab-content ${this.props.selected ? 'selected' : ''}`}
        onClick={this.handleClick}
      >
        <TabTitle pageId={this.props.pageId} />
      </button>
    );
  }
}
