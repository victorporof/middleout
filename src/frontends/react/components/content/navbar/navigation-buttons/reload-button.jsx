// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Icons from 'react-icons/fa';

import Actions from '../../../../actions';
import Selectors from '../../../../selectors';

import './reload-button.css';

const mapStateToProps = (state, ownProps) => ({
  canReload: Selectors.getPageCanReload(state, ownProps.pageId),
});

const mapDispatchToProps = {
  reload: Actions.commands.pages.reload,
};

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
export default class ReloadButton extends PureComponent {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    canReload: PropTypes.bool.isRequired,
    reload: PropTypes.func.isRequired,
  }

  handleClick = () => {
    this.props.reload(this.props.pageId);
  }

  render() {
    return (
      <button
        className="flex-row"
        styleName={`reload-button ${this.props.canReload ? 'enabled' : ''}`}
        disabled={!this.props.canReload}
        onClick={this.handleClick}
      >
        <Icons.FaSync
          size="16"
        />
      </button>
    );
  }
}
