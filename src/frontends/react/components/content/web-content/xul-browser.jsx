// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

/* global Ci, ChromeUtils */
/* eslint no-bitwise: "off" */

import React, { Component } from 'react';

import BrowserComponentAPI from './browser-component-api';
import * as XulUtil from '../../../../../util/xul-util';

const PROGRESS_NOTIFICATIONS =
  Ci.nsIWebProgress.NOTIFY_STATE_WINDOW |
  Ci.nsIWebProgress.NOTIFY_STATUS |
  Ci.nsIWebProgress.NOTIFY_LOCATION;

@BrowserComponentAPI
export default class XulBrowser extends Component {
  constructor(props) {
    super(props);
    this._containerRef = React.createRef();
  }

  componentDidMount() {
    this._containerRef.current.appendChild(XulUtil.parseXULToFragment(`
      <browser
        class="flex-1"
        type="content"
        remote="true"
      />
    `));

    this._browser = this._containerRef.current.querySelector('browser');
    this._addListeners();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this._removeListeners();
  }

  onStateChange = (_aWebProgress, _aRequest, aStateFlags, _aStatus) => {
    if (aStateFlags & Ci.nsIWebProgressListener.STATE_START) {
      this.props.onDidStartLoading();
    } else if (aStateFlags & Ci.nsIWebProgressListener.STATE_STOP) {
      this.props.onDidStopLoading();
    }
  }

  onProgressChange = (_aWebProgress, _aRequest, _aCurSelf, _aMaxSelf, _aCurTotal, _aMaxTotal) => {
    // TODO
  }

  onLocationChange = (_aWebProgress, _aRequest, aLocation, _aFlags) => {
    this.props.onDidNavigate({ url: aLocation.spec });
  }

  onStatusChange = (_aWebProgress, _aRequest, _aStatus, _aMessage) => {
    // TODO
  }

  onSecurityChange = (_aWebProgress, _aRequest, _aState) => {
    // TODO
  }

  receiveMessage = (e) => {
    if (e.name === 'DOMTitleChanged') {
      this.props.onPageTitleSet({ title: e.data.title });
    }
  }

  QueryInterface = ChromeUtils.generateQI([
    Ci.nsIWebProgressListener,
    Ci.nsISupportsWeakReference,
  ])

  _addListeners = () => {
    this._browser.messageManager.addMessageListener('DOMTitleChanged', this);
    this._browser.webProgress.addProgressListener(this, PROGRESS_NOTIFICATIONS);
  }

  _removeListeners = () => {
    this._browser.messageManager.removeMessageListener('DOMTitleChanged', this);
    this._browser.webProgress.removeProgressListener(this, PROGRESS_NOTIFICATIONS);
  }

  navigateTo = (url) => {
    this._browser.loadURI(url);
  }

  canGoBack = () =>
    this._browser.canGoBack

  canGoForward = () =>
    this._browser.canGoForward

  canReload = () =>
    true

  goBack = () =>
    this._browser.goBack()

  goForward = () =>
    this._browser.goForward()

  reload = () =>
    this._browser.reload()

  render() {
    return (
      <div
        ref={this._containerRef}
        className="flex-row flex-1"
      />
    );
  }
}
