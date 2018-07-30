// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import * as Namespaces from '../const/namespaces';

const gXULDOMParser = new DOMParser();
gXULDOMParser.forceEnableXULXBL();

export const parseXULToFragment = (str, entities = '') => {
  const doc = gXULDOMParser.parseFromString(`
    ${entities}
    <box xmlns="${Namespaces.XUL_NS}">
      ${str}
    </box>
  `, 'application/xml');

  // The XUL/XBL parser is set to ignore all-whitespace nodes, whereas (X)HTML
  // does not do this. Most XUL code assumes that the whitespace has been
  // stripped out, so we simply remove all text nodes after using the parser.
  const nodeIterator = doc.createNodeIterator(doc, NodeFilter.SHOW_TEXT);
  let currentNode = nodeIterator.nextNode();
  while (currentNode) {
    currentNode.remove();
    currentNode = nodeIterator.nextNode();
  }

  // We use a range here so that we don't access the inner DOM elements from
  // JavaScript before they are imported and inserted into a document.
  const range = doc.createRange();
  range.selectNodeContents(doc.querySelector('box'));
  return range.extractContents();
};
