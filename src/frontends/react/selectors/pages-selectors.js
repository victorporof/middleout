// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

/* Pages model */

export const getSelectedPageId = s => s.pages.selectedPageId;

export const getPageIdsInDisplayOrder = s => s.pages.displayOrder;

/* Page props */

export const getPage = (s, pageId) => s.pages.map[pageId];

export const getPageTransient = (s, pageId) => s.pages.map[pageId].transient;

export const getPageUrl = (s, pageId) => getPage(s, pageId).url;

export const getPageLoadState = (s, pageId) => getPageTransient(s, pageId).loadState;

export const getPageCanGoBack = (s, pageId) => getPageTransient(s, pageId).canGoBack;

export const getPageCanGoForward = (s, pageId) => getPageTransient(s, pageId).canGoForward;

export const getPageCanReload = (s, pageId) => getPageTransient(s, pageId).canReload;

export const getPageTitle = (s, pageId) => getPageTransient(s, pageId).title;

export const getPageFavicon = (s, pageId) => getPageTransient(s, pageId).favicon;
