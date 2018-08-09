// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class WebContents extends PureComponent {
  static _instances = new Set()

  static propTypes = {
    impl: PropTypes.func.isRequired,
    pageId: PropTypes.string.isRequired,
  }

  constructor(...args) {
    super(...args);
    this._implRef = React.createRef();
  }

  componentDidMount() {
    WebContents._instances.add(this);
  }

  componentWillUnmount() {
    WebContents._instances.delete(this);
  }

  get impl() {
    return this._implRef.current;
  }

  static getWebContentsWithId(pageId) {
    return Array
      .from(WebContents._instances)
      .find(e => e.props.pageId === pageId);
  }

  render() {
    const Impl = this.props.impl;
    return (
      <Impl
        ref={this._implRef}
        {...this.props}
      />
    );
  }
}
