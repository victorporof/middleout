// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './navigation-buttons.css';
import BackButton from './navigation-buttons/back-button';
import ForwardButton from './navigation-buttons/forward-button';
import ReloadButton from './navigation-buttons/reload-button';
import HomeButton from './navigation-buttons/home-button';

export default class NavigationButtons extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div
        className="flex-row"
        styleName="navigation-buttons"
      >
        <BackButton pageId={this.props.pageId} />
        <ForwardButton pageId={this.props.pageId} />
        <ReloadButton pageId={this.props.pageId} />
        <HomeButton pageId={this.props.pageId} />
      </div>
    );
  }
}
