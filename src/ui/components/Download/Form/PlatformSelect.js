import React, { Component } from 'react';
import { func, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PLATFORMS } from '../constants';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export class PlatformSelect extends Component {
  state = {
    value: this.props.initialValue,
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ value }, () => this.props.onSelect(PLATFORMS[value]));

  render() {
    return (
      <div className="PlatformSelect">
        Please enter your email to download Nebula for
        <div className="SelectWrap">
          <select onChange={this.handleChange} value={this.state.value}>
            {Object.keys(PLATFORMS).map((platform, i) => (
              <option key={i} value={platform}>
                {PLATFORMS[platform]}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="fa-chevron-down fa-xs arrow"
          />
        </div>
      </div>
    );
  }
}

PlatformSelect.propTypes = {
  initialValue: string.isRequired,
  onSelect: func.isRequired,
};
