// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

export const getSearchURL = query =>
  `https://www.duckduckgo.com/?q=${encodeURIComponent(query)}`;

export const fixURL = (typed) => {
  if (typed.trim().startsWith('about:')) {
    return typed;
  }

  if (typed.includes('://') || typed.trim().startsWith('data:')) {
    return typed;
  }

  if (!typed.includes(' ') && typed.includes('.')) {
    return `http://${typed}`;
  }

  return getSearchURL(typed);
};
