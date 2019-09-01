import { PLATFORM, PLATFORMS } from '../constants';
import React, { Component } from 'react';
import { func, string } from 'prop-types';

import IconArrowDown from './IconArrowDown';

const PLATFORM_KEYS = Object.keys(PLATFORMS);

export class PlatformSelect extends Component {
  state = {
    value: this.props.initialValue,
  };

  /**
   * Force fixes issues caused with the static site always rendering linux first
   *
   */
  componentDidMount() {
    this.setState({ value: PLATFORM });
  }

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
          <IconArrowDown />
        </div>
      </div>
    );
  }
}

PlatformSelect.propTypes = {
  initialValue: string.isRequired,
  onSelect: func.isRequired,
};
