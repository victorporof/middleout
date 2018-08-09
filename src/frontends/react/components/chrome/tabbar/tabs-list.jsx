// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Selectors from '../../../selectors';

import './tabs-list.css';
import Tab from './tab';

const mapStateToProps = state => ({
  pageIds: Selectors.getPageIdsInDisplayOrder(state),
});

const mapDispatchToProps = {
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class TabsList extends PureComponent {
  static propTypes = {
    pageIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    return (
      <Fragment >
        {this.props.pageIds.map(pageId => (
          <Tab
            key={pageId}
            pageId={pageId}
          />
        ))}
      </Fragment>
    );
  }
}
