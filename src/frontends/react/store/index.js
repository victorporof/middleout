// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';

import Reducers from '../reducers';

export default createStore(Reducers, applyMiddleware(...[
  thunkMiddleware,
  promiseMiddleware,
  createLogger({ collapsed: true }),
].filter(Boolean)));
