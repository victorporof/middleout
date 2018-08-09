// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Selectors from '../selectors';

import './content.css';
import Page from './content/page';
import NavBar from './content/navbar';

const mapStateToProps = state => ({
  selectedPageId: Selectors.getSelectedPageId(state),
  pageIds: Selectors.getPageIdsInDisplayOrder(state),
});

const mapDispatchToProps = {
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class Content extends PureComponent {
  static propTypes = {
    selectedPageId: PropTypes.string,
    pageIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    selectedPageId: null,
  }

  render() {
    return (
      <div
        className="flex-row flex-1"
        styleName="content"
      >
        {this.props.pageIds.map(pageId => (
          <div
            className="flex-column"
            styleName={`instance ${this.props.selectedPageId === pageId ? 'selected' : ''}`}
            key={pageId}
          >
            <NavBar pageId={pageId} />
            <Page pageId={pageId} />
          </div>
        ))}
      </div>
    );
  }
}
