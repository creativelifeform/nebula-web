import React, { Component } from 'react';

import Api from '../../../../api';
import { Email } from './Email';
import { PLATFORM } from '../constants';
import { PlatformSelect } from './PlatformSelect';

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

    console.log(this.state);

    this.setState({ loading: true }, async () => {
      try {
        const data = await Api.sendSignupRequest({ platform, email });

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
            initialValue={PLATFORM}
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
        <div className="Disclaimer">
          We will only send you Nebula product updates, <br />
          we will <b>never</b> spam you. Unsubscribe at any time!
        </div>
      </div>
    );
  }
}
