// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from '../../../actions';
import Selectors from '../../../selectors';
import * as UrlUtil from '../../../../../util/url-util';

import './location-inputbar.css';

const mapStateToProps = (state, ownProps) => ({
  urlInputValue: Selectors.getPageUrlInputValue(state, ownProps.pageId),
});

const mapDispatchToProps = {
  setUrlInputValue: Actions.model.ui.pages.setUrlInputValue,
  navigateTo: Actions.commands.pages.navigateTo,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class LocationInputbar extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    urlInputValue: PropTypes.string.isRequired,
    setUrlInputValue: PropTypes.func.isRequired,
    navigateTo: PropTypes.func.isRequired,
  }

  handleChange = (e) => {
    this.props.setUrlInputValue(this.props.pageId, e.target.value);
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const url = UrlUtil.fixURL(e.target.value);
      this.props.setUrlInputValue(this.props.pageId, url);
      this.props.navigateTo(this.props.pageId, url);
    }
  }

  render() {
    return (
      <input
        className="flex-row flex-1"
        styleName="location-inputbar"
        value={this.props.urlInputValue}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}
