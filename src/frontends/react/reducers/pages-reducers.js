// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { handleActions } from 'redux-actions';
import produce from 'immer';
import assign from 'lodash/assign';
import pull from 'lodash/pull';
import unset from 'lodash/unset';

import Actions from '../actions';
import * as Const from '../../../const';

const INITIAL_STATE = {
  selectedPageId: null,
  displayOrder: [],
  map: {},
};

const DEFAULT_PAGE = {
  url: null,
  transient: {
    loadState: Const.PAGE_LOAD_STATES.INITIAL,
    canGoBack: false,
    canGoForward: false,
    canReload: false,
    title: Const.PAGE_UNKNOWN_TITLE,
    favicon: Const.PAGE_UNKNOWN_FAVICON,
  },
};

export default handleActions({
  [Actions.model.reset]: produce((draft) => {
    assign(draft, INITIAL_STATE);
  }),

  [Actions.model.pages.add]: produce((draft, { payload: { pageId, url } }) => {
    draft.displayOrder.push(pageId);
    draft.map[pageId] = {
      ...DEFAULT_PAGE,
      url,
    };
    draft.selectedPageId = pageId;
  }),

  [Actions.model.pages.remove]: produce((draft, { payload: { pageId } }) => {
    const pageDisplayIndex = draft.displayOrder.findIndex(e => e === pageId);
    const pageCount = draft.displayOrder.length;

    if (pageDisplayIndex === pageCount - 1) {
      draft.selectedPageId = draft.displayOrder[pageDisplayIndex - 1];
    } else {
      draft.selectedPageId = draft.displayOrder[pageDisplayIndex + 1];
    }

    pull(draft.displayOrder, pageId);
    unset(draft.map, pageId);
  }),

  [Actions.model.pages.select]: produce((draft, { payload: { pageId } }) => {
    draft.selectedPageId = pageId;
  }),

  [Actions.model.pages.reset]: produce((draft, { payload: { pageId } }) => {
    draft.map[pageId].transient = { ...DEFAULT_PAGE.transient };
  }),

  [Actions.model.pages.setUrl]: produce((draft, { payload: { pageId, url } }) => {
    draft.map[pageId].url = url;
  }),

  [Actions.model.pages.setLoadState]: produce((draft, { payload: { pageId, loadState } }) => {
    draft.map[pageId].transient.loadState = loadState;
  }),

  [Actions.model.pages.setCanGoBack]: produce((draft, { payload: { pageId, canGoBack } }) => {
    draft.map[pageId].transient.canGoBack = canGoBack;
  }),

  [Actions.model.pages.setCanGoForward]: produce((draft, { payload: { pageId, canGoForward } }) => {
    draft.map[pageId].transient.canGoForward = canGoForward;
  }),

  [Actions.model.pages.setCanReload]: produce((draft, { payload: { pageId, canReload } }) => {
    draft.map[pageId].transient.canReload = canReload;
  }),

  [Actions.model.pages.setTitle]: produce((draft, { payload: { pageId, title } }) => {
    draft.map[pageId].transient.title = title;
  }),

  [Actions.model.pages.setFavicon]: produce((draft, { payload: { pageId, favicon } }) => {
    draft.map[pageId].transient.favicon = favicon;
  }),
}, INITIAL_STATE);
