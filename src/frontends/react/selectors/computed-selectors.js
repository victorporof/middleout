// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import Url from 'url';

import * as Const from '../../../const';
import * as PagesSelectors from './pages-selectors';

/* Page computed props */

export const getComputedPageDisplayTitle = (s, pageId) => {
  const loadState = PagesSelectors.getPageLoadState(s, pageId);
  if (loadState === Const.PAGE_LOAD_STATES.INITIAL ||
    loadState === Const.PAGE_LOAD_STATES.CONNECTING) {
    return 'Connecting…';
  }

  const url = PagesSelectors.getPageUrl(s, pageId);
  if (url === Const.BLANK_PAGE) {
    return 'New Tab';
  }

  const title = PagesSelectors.getPageTitle(s, pageId);
  if (loadState === Const.PAGE_LOAD_STATES.LOADING &&
    title === Const.PAGE_UNKNOWN_TITLE) {
    return 'Loading…';
  }

  if (loadState === Const.PAGE_LOAD_STATES.LOADED &&
    title === Const.PAGE_UNKNOWN_TITLE) {
    return Url.parse(url).hostname;
  }

  return title;
};
