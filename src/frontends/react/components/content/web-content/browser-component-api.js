// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import PropTypes from 'prop-types';
import identity from 'lodash/identity';

export default (target) => {
  target.propTypes = {
    className: PropTypes.string,
    onDidStartLoading: PropTypes.func,
    onDidStopLoading: PropTypes.func,
    onDidSucceedLoad: PropTypes.func,
    onDidFailLoad: PropTypes.func,
    onPageDomReady: PropTypes.func,
    onPageTitleSet: PropTypes.func,
    onPageFaviconsSet: PropTypes.func,
    onDidNavigate: PropTypes.func,
    onDidNavigateInternal: PropTypes.func,
    onDidNavigateToNewWindow: PropTypes.func,
  };

  target.defaultProps = {
    className: '',
    onDidStartLoading: identity,
    onDidStopLoading: identity,
    onDidSucceedLoad: identity,
    onDidFailLoad: identity,
    onPageDomReady: identity,
    onPageTitleSet: identity,
    onPageFaviconsSet: identity,
    onDidNavigate: identity,
    onDidNavigateInternal: identity,
    onDidNavigateToNewWindow: identity,
  };

  target.prototype.navigateTo = identity;
  target.prototype.canGoBack = () => false;
  target.prototype.canGoForward = () => false;
  target.prototype.canReload = () => false;
  target.prototype.goBack = identity;
  target.prototype.goForward = identity;
  target.prototype.reload = identity;
};
