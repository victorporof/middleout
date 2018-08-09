// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './navbar.css';
import NavigationButtons from './navbar/navigation-buttons';
import LocationInputbar from './navbar/location-inputbar';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class NavBar extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div
        className="flex-row"
        styleName="navbar"
      >
        <NavigationButtons pageId={this.props.pageId} />
        <LocationInputbar pageId={this.props.pageId} />
      </div>
    );
  }
}
