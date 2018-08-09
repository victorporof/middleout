// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';

import BrowserComponentAPI from './browser-component-api';

// Implement a mozbrowser, see following docs and examples:
// https://developer.mozilla.org/en-US/docs/Web/API/Using_the_Browser_API
// https://github.com/mdn/browser-api-demo/blob/master/main.js
// https://github.com/mozilla/positron-electron/blob/3345aa05f8d55e0c91abbf52489b6c7e40a336d5/lib/renderer/web-view/web-view.js#L300-L360
@BrowserComponentAPI
export default class IframeMozBrowser extends PureComponent {
  constructor(...args) {
    super(...args);
    this._iframeRef = React.createRef();
  }

  componentDidMount() {
    this._iframeRef.current.addEventListener('mozbrowsertitlechange', (e) => {
      this.props.onPageTitleSet({ title: e.detail });
    });
    this._iframeRef.current.addEventListener('mozbrowserlocationchange', (e) => {
      this.props.onDidNavigate({ url: e.detail.url });
    });
    this._iframeRef.current.addEventListener('mozbrowserloadstart', () => {
      this.props.onDidStartLoading();
    });
    this._iframeRef.current.addEventListener('mozbrowserloadend', () => {
      this.props.onDidStopLoading();
    });
    this._iframeRef.current.addEventListener('mozbrowsererror', () => {
      this.props.onDidFailLoad();
    });
  }

  navigateTo = url =>
    this._iframeRef.current.setAttribute('src', url)

  canGoBack = () =>
    this._iframeRef.current.getCanGoBack();

  canGoForward = () =>
    this._iframeRef.current.getCanGoForward();

  canReload = () =>
    true

  goBack = () =>
    this._iframeRef.current.goBack()

  goForward = () =>
    this._iframeRef.current.goForward()

  reload = () =>
    this._iframeRef.current.reload()

  render() {
    return (
      <iframe
        is="iframe"
        ref={this._iframeRef}
        class={this.props.className}
        frameborder="0"
        mozbrowser="mozbrowser"
        remote="remote"
      />
    );
  }
}
