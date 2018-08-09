// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import '../../css/global.css';
import '../../css/flex.css';
import '../../css/theme.css';
import Window from './components/window';

export default (
  <Provider store={store}>
    <Window />
  </Provider>
);
