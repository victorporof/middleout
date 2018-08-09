// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import { createActions } from 'redux-actions';
import identity from 'lodash/identity';
import uuid from 'uuid/v4';

import { NEW_TAB_URL } from '../../../const';

export default createActions({
  model: {
    reset: identity,
    pages: {
      add: ({ url = NEW_TAB_URL } = {}) => ({ pageId: uuid(), url }),
      remove: pageId => ({ pageId }),
      select: pageId => ({ pageId }),
      reset: pageId => ({ pageId }),
      setUrl: (pageId, url) => ({ pageId, url }),
      setLoadState: (pageId, loadState) => ({ pageId, loadState }),
      setCanGoBack: (pageId, canGoBack) => ({ pageId, canGoBack }),
      setCanGoForward: (pageId, canGoForward) => ({ pageId, canGoForward }),
      setCanReload: (pageId, canReload) => ({ pageId, canReload }),
      setTitle: (pageId, title) => ({ pageId, title }),
      setFavicon: (pageId, favicon) => ({ pageId, favicon }),
    },
    ui: {
      pages: {
        setUrlInputValue: (pageId, value) => ({ pageId, value }),
      },
    },
  },
});
