import React, { Component } from 'react';
import { func, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PLATFORMS } from '../constants';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PLATFORM_KEYS = Object.keys(PLATFORMS);

export class PlatformSelect extends Component {
  state = {
    value: this.props.initialValue,
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ value }, () => this.props.onSelect(value));

  render() {
    return (
      <div className="PlatformSelect">
        Please enter your email to download Nebula for
        <div className="SelectWrap">
          <select onChange={this.handleChange} value={this.state.value}>
            {PLATFORM_KEYS.map((platform, i) => (
              <option key={i} value={PLATFORMS[platform]}>
                {PLATFORM_KEYS[i]}
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
