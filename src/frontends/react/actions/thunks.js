// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import WebContent from '../components/content/web-content';
import Actions from '../actions';
import Selectors from '../selectors';
import * as Const from '../../../const';

export default {
  commands: {
    pages: {
      navigateTo: (pageId, url) => (dispatch) => {
        dispatch(Actions.model.pages.reset(pageId));
        dispatch(Actions.model.pages.setLoadState(pageId, Const.PAGE_LOAD_STATES.CONNECTING));
        dispatch(Actions.effects.pages.navigateTo(pageId, url));
      },

      goBack: pageId => (dispatch) => {
        dispatch(Actions.model.pages.reset(pageId));
        dispatch(Actions.model.pages.setLoadState(pageId, Const.PAGE_LOAD_STATES.CONNECTING));
        dispatch(Actions.effects.pages.goBack(pageId));
      },

      goForward: pageId => (dispatch) => {
        dispatch(Actions.model.pages.reset(pageId));
        dispatch(Actions.model.pages.setLoadState(pageId, Const.PAGE_LOAD_STATES.CONNECTING));
        dispatch(Actions.effects.pages.goForward(pageId));
      },

      reload: pageId => (dispatch) => {
        dispatch(Actions.model.pages.reset(pageId));
        dispatch(Actions.model.pages.setLoadState(pageId, Const.PAGE_LOAD_STATES.CONNECTING));
        dispatch(Actions.effects.pages.reload(pageId));
      },

      reloadCurrentPage: () => (dispatch, getState) => {
        const state = getState();
        const pageId = Selectors.getSelectedPageId(state);
        dispatch(Actions.commands.pages.reload(pageId));
      },

      removeCurrentPage: () => (dispatch, getState) => {
        const state = getState();
        const pageId = Selectors.getSelectedPageId(state);
        dispatch(Actions.model.pages.remove(pageId));
      },
    },
  },
  events: {
    pages: {
      didMount: pageId => (dispatch, getState) => {
        const state = getState();
        const url = Selectors.getPageUrl(state, pageId);
        dispatch(Actions.commands.pages.navigateTo(pageId, url));
      },
    },

    browser: {
      pageDidStartLoading: pageId => (dispatch) => {
        dispatch(Actions.model.pages.setLoadState(pageId, Const.PAGE_LOAD_STATES.LOADING));
      },

      pageDidStopLoading: pageId => (dispatch) => {
        dispatch(Actions.model.pages.setLoadState(pageId, Const.PAGE_LOAD_STATES.LOADED));
      },

      pageDidSucceedLoad: _pageId => () => {
        // TODO
      },

      pageDidFailLoad: _pageId => () => {
        // TODO
      },

      pageDomReady: _pageId => () => {
        // TODO
      },

      pageTitleSet: (pageId, { title }) => (dispatch) => {
        dispatch(Actions.model.pages.setTitle(pageId, title));
      },

      pageFaviconsSet: _pageId => () => {
        // TODO
      },

      pageDidNavigate: (pageId, { url }) => async (dispatch) => {
        const browser = WebContent.getWebContentsWithId(pageId).impl;
        dispatch(Actions.model.pages.setUrl(pageId, url));
        dispatch(Actions.model.pages.setCanGoBack(pageId, await browser.canGoBack()));
        dispatch(Actions.model.pages.setCanGoForward(pageId, await browser.canGoForward()));
        dispatch(Actions.model.pages.setCanReload(pageId, await browser.canReload()));
        dispatch(Actions.model.ui.pages.setUrlInputValue(pageId, url));
      },

      pageDidNavigateInternal: (pageId, { url }) => (dispatch) => {
        dispatch(Actions.events.browser.pageDidNavigate(pageId, { url }));
      },

      pageDidNavigateToNewWindow: _pageId => () => {
        // TODO
      },
    },
  },
};
