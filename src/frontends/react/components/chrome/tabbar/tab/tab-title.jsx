// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Selectors from '../../../../selectors';

import './tab-title.css';

const mapStateToProps = (state, ownProps) => ({
  title: Selectors.getComputedPageDisplayTitle(state, ownProps.pageId),
});

const mapDispatchToProps = {
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class TabTitle extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired, // eslint-disable-line
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div
        className="flex-1"
        styleName="tab-title"
      >
        {this.props.title}
      </div>
    );
  }
}
