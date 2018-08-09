// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Actions from '../../actions';

import WebContent from './web-content';
// import Browser from './web-content/iframe-dummy-browser';
// import Browser from './web-content/iframe-mozbrowser';
import Browser from './web-content/xul-browser';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  onDidMount: Actions.events.pages.didMount,
  onPageDidStartLoading: Actions.events.browser.pageDidStartLoading,
  onPageDidStopLoading: Actions.events.browser.pageDidStopLoading,
  onPageDidSucceedLoad: Actions.events.browser.pageDidSucceedLoad,
  onPageDidFailLoad: Actions.events.browser.pageDidFailLoad,
  onPageDomReady: Actions.events.browser.pageDomReady,
  onPageTitleSet: Actions.events.browser.pageTitleSet,
  onPageFaviconsSet: Actions.events.browser.pageFaviconsSet,
  onPageDidNavigate: Actions.events.browser.pageDidNavigate,
  onPageDidNavigateInternal: Actions.events.browser.pageDidNavigateInternal,
  onPageDidNavigateToNewWindow: Actions.events.browser.pageDidNavigateToNewWindow,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class Page extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    onDidMount: PropTypes.func.isRequired,
    onPageDidStartLoading: PropTypes.func.isRequired,
    onPageDidStopLoading: PropTypes.func.isRequired,
    onPageDidSucceedLoad: PropTypes.func.isRequired,
    onPageDidFailLoad: PropTypes.func.isRequired,
    onPageDomReady: PropTypes.func.isRequired,
    onPageTitleSet: PropTypes.func.isRequired,
    onPageFaviconsSet: PropTypes.func.isRequired,
    onPageDidNavigate: PropTypes.func.isRequired,
    onPageDidNavigateInternal: PropTypes.func.isRequired,
    onPageDidNavigateToNewWindow: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.onDidMount(this.props.pageId);
  }

  handleDidStartLoading = (args) => {
    this.props.onPageDidStartLoading(this.props.pageId, args);
  }

  handleDidStopLoading = (args) => {
    this.props.onPageDidStopLoading(this.props.pageId, args);
  }

  handleDidSucceedLoad = (args) => {
    this.props.onPageDidSucceedLoad(this.props.pageId, args);
  }

  handleDidFailLoad = (args) => {
    this.props.onPageDidFailLoad(this.props.pageId, args);
  }

  handlePageDomReady = (args) => {
    this.props.onPageDomReady(this.props.pageId, args);
  }

  handlePageTitleSet = (args) => {
    this.props.onPageTitleSet(this.props.pageId, args);
  }

  handlePageFaviconsSet = (args) => {
    this.props.onPageFaviconsSet(this.props.pageId, args);
  }

  handleDidNavigate = (args) => {
    this.props.onPageDidNavigate(this.props.pageId, args);
  }

  handleDidNavigateInternal = (args) => {
    this.props.onPageDidNavigateInternal(this.props.pageId, args);
  }

  handleDidNavigateToNewWindow = (args) => {
    this.props.onPageDidNavigateToNewWindow({ parentId: this.props.pageId, args });
  }

  render() {
    return (
      <WebContent
        impl={Browser}
        className="flex-row flex-1"
        pageId={this.props.pageId}
        onDidStartLoading={this.handleDidStartLoading}
        onDidStopLoading={this.handleDidStopLoading}
        onDidSucceedLoad={this.handleDidSucceedLoad}
        onDidFailLoad={this.handleDidFailLoad}
        onPageDomReady={this.handlePageDomReady}
        onPageTitleSet={this.handlePageTitleSet}
        onPageFaviconsSet={this.handlePageFaviconsSet}
        onDidNavigate={this.handleDidNavigate}
        onDidNavigateInternal={this.handleDidNavigateInternal}
        onDidNavigateToNewWindow={this.handleDidNavigateToNewWindow}
      />
    );
  }
}
