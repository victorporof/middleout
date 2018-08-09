// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';

import BrowserComponentAPI from './browser-component-api';

@BrowserComponentAPI
export default class IframeDummyBrowser extends PureComponent {
  constructor(...args) {
    super(...args);
    this._iframeRef = React.createRef();
  }

  componentDidMount() {
    this._iframeRef.current.addEventListener('load', () => {
      this.props.onDidStartLoading();
      this.props.onDidNavigate({ url: this._iframeRef.current.src });
      this.props.onPageDomReady();
      this.props.onPageTitleSet({ title: this._iframeRef.current.src });
      this.props.onDidSucceedLoad();
      this.props.onDidStopLoading();
    });
  }

  navigateTo = url =>
    this._iframeRef.current.setAttribute('src', url)

  canReload = () =>
    true

  reload = () =>
    this.navigateTo(this._iframeRef.current.src)

  render() {
    return (
      <iframe
        is="iframe"
        ref={this._iframeRef}
        className={this.props.className}
        frameborder="0"
      />
    );
  }
}
