// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import merge from 'lodash/merge';

import Actions from './actions';
import Thunks from './thunks';
import Effects from './effects';

export default merge(Actions, Thunks, Effects);
