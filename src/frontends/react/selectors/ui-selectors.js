// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

/* Page UI props */

export const getPageUI = (s, pageId) => s.ui.pages.map[pageId];

export const getPageUrlInputValue = (s, pageId) => getPageUI(s, pageId).urlInputValue;
