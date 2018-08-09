// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './tab.css';
import TabContent from './tab/tab-content';
import CloseTabButton from './tab/close-tab-button';

export default class Tab extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div
        className="flex-row"
        styleName="tab"
      >
        <TabContent pageId={this.props.pageId} />
        <CloseTabButton pageId={this.props.pageId} />
      </div>
    );
  }
}
