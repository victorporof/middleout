// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { handleActions } from 'redux-actions';
import produce from 'immer';
import assign from 'lodash/assign';
import unset from 'lodash/unset';

import Actions from '../actions';

const INITIAL_STATE = {
  pages: {
    map: {},
  },
};

const DEFAULT_PAGE = {
  urlInputValue: '',
};

export default handleActions({
  [Actions.model.reset]: produce((draft) => {
    assign(draft, INITIAL_STATE);
  }),

  [Actions.model.pages.add]: produce((draft, { payload: { pageId, url } }) => {
    draft.pages.map[pageId] = {
      ...DEFAULT_PAGE,
      urlInputValue: url,
    };
  }),

  [Actions.model.pages.remove]: produce((draft, { payload: { pageId } }) => {
    unset(draft.pages.map, pageId);
  }),

  [Actions.model.ui.pages.setUrlInputValue]: produce((draft, { payload: { pageId, value } }) => {
    draft.pages.map[pageId].urlInputValue = value;
  }),
}, INITIAL_STATE);
