import { PLATFORM, PLATFORMS } from '../constants';
import React, { Component } from 'react';

import { Email } from './Email';
import { PlatformSelect } from './PlatformSelect';
import { mapValueToKey } from '../../../../common/utils';

const mockApiRequest = data =>
  new Promise(resolve => {
    setTimeout(() => resolve(data), 200000);
  });

export class Form extends Component {
  state = {
    platform: PLATFORM,
    email: '',
    data: null,
    error: null,
    loading: false,
  };

  handleOnSelect = platform => this.setState({ platform, data: null });

  handleOnEmail = email => this.setState({ email });

  handleOnSubmit = () => {
    const { platform, email } = this.state;

    this.setState({ loading: true }, async () => {
      try {
        const data = await mockApiRequest({
          version: '1.0.0',
          link: 'https://example.com',
        });

        console.log(data);

        this.setState({ data, loading: false });
      } catch (error) {
        this.setState({ loading: false, error });
      }
    });
  };

  render() {
    const { data, error, loading, platform } = this.state;

    return (
      <div className="Form">
        <form onSubmit={e => e.preventDefault()}>
          <PlatformSelect
            onSelect={this.handleOnSelect}
            initialValue={mapValueToKey(PLATFORMS, PLATFORM)}
          />
          {!data && (
            <Email
              platform={this.state.platform}
              loading={loading}
              onEmail={this.handleOnEmail}
              onSubmit={this.handleOnSubmit}
            />
          )}
        </form>
        {data && (
          <div>
            <a className="button" href={data.link} download={data.link}>
              Download Nebula v{data.version} for {platform}
            </a>
          </div>
        )}
      </div>
    );
  }
}
