// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';

import './tabbar.css';
import TabsList from './tabbar/tabs-list';
import TabsActionsList from './tabbar/tabs-actions-list';

export default class TabBar extends PureComponent {
  render() {
    return (
      <div
        className="flex-row"
        styleName="tabbar"
      >
        <TabsList />
        <TabsActionsList />
      </div>
    );
  }
}
