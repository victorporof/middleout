// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import * as XulUtil from '../../util/xul-util';

const container = document.querySelector('#container');
container.appendChild(XulUtil.parseXULToFragment(`
  <browser
    type="content"
  />
`));

const browser = document.querySelector('browser');
browser.setAttribute('style', `
  flex: 1;
`);

browser.loadURI('google.com');
