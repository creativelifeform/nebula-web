import React, { Component } from 'react';

import { PLATFORMS } from '../constants';

export class PlatformSelect extends Component {
  state = {
    value: this.props.initialValue,
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ value }, () => this.props.onSelect(value));

  render() {
    return (
      <div>
        Please enter your email to download Nebula for
        <select
          className="PlatformSelect"
          onChange={this.handleChange}
          value={this.state.value}
        >
          {Object.keys(PLATFORMS).map((platform, i) => (
            <option key={i} value={platform}>
              {PLATFORMS[platform]}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
