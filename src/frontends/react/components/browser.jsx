// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';

import * as XulUtil from '../../../util/xul-util';

export default class Browser extends PureComponent {
  componentDidMount = () => {
    this._container.appendChild(XulUtil.parseXULToFragment(`
      <browser
        type="content"
      />
    `));

    const browser = this._container.querySelector('browser');
    browser.setAttribute('style', `
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
    `);

    browser.loadURI('google.com');
  }

  _containerRef = (ref) => {
    this._container = ref;
  }

  render() {
    return (
      <div
        ref={this._containerRef}
        style={{
          flex: 1,
        }}
      />
    );
  }
}
