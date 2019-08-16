import { PLATFORM, PLATFORMS } from '../constants';
import React, { Component } from 'react';

import Api from '../../../common/api';
import { Email } from './Email';
import { Error } from './Error';
import { PlatformSelect } from './PlatformSelect';
import { mapValueToKey } from '../../../common/utils';

export class Form extends Component {
  state = {
    platform: PLATFORM,
    email: '',
    data: null,
    error: null,
    loading: false,
  };

  handleOnSelect = platform =>
    this.setState({ platform, data: null, error: null });

  handleOnEmail = email => this.setState({ email });

  handleOnSubmit = () => {
    const { platform, email } = this.state;

    this.setState({ loading: true, error: null }, async () => {
      try {
        const data = await Api.sendSignupRequest({ platform, email });

        this.setState({ data, loading: false });
      } catch (error) {
        this.setState({ loading: false, error: error.json });
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
              Download Nebula for {mapValueToKey(PLATFORMS, platform)}
            </a>
          </div>
        )}
        {error && <Error json={error} />}
        <div className="Disclaimer">
          We will only send you Nebula product updates, <br />
          we will <b>never</b> spam you. Unsubscribe at any time!
        </div>
      </div>
    );
  }
}
