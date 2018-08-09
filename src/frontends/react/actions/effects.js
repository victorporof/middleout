// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import WebContent from '../components/content/web-content';

export default {
  effects: {
    app: {
      reload: () => () => {
        window.location.reload();
      },
    },
    pages: {
      navigateTo: (pageId, url) => () => {
        const browser = WebContent.getWebContentsWithId(pageId).impl;
        browser.navigateTo(url);
      },
      goBack: pageId => () => {
        const browser = WebContent.getWebContentsWithId(pageId).impl;
        browser.goBack();
      },
      goForward: pageId => () => {
        const browser = WebContent.getWebContentsWithId(pageId).impl;
        browser.goForward();
      },
      reload: pageId => () => {
        const browser = WebContent.getWebContentsWithId(pageId).impl;
        browser.reload();
      },
    },
  },
};
