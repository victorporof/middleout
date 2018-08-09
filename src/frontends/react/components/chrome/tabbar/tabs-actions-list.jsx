// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';

import './tabs-actions-list.css';
import NewTabButton from './new-tab-button';

export default class TabsActionsList extends PureComponent {
  render() {
    return (
      <div
        className="flex-row flex-1"
        styleName="tabs-actions-list"
      >
        <NewTabButton />
      </div>
    );
  }
}
