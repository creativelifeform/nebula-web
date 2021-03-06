import { PLATFORM, PLATFORMS } from '../constants';
import React, { Component } from 'react';
import { func, string } from 'prop-types';

import { AnalyticsConsumer } from '../../../context';
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
          <AnalyticsConsumer>
            {track => (
              <select
                onChange={e => {
                  track.event({
                    ec: 'DOWNLOAD',
                    ea: 'select_platform',
                    el: this.state.value,
                  });
                  this.handleChange(e);
                }}
                value={this.state.value}
              >
                {PLATFORM_KEYS.map((platform, i) => (
                  <option key={i} value={PLATFORMS[platform]}>
                    {PLATFORM_KEYS[i]}
                  </option>
                ))}
              </select>
            )}
          </AnalyticsConsumer>
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
