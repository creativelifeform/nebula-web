import { PLATFORM, PLATFORMS } from '../constants';
import React, { Component } from 'react';

import { AnalyticsConsumer } from '../../../context';
import Api from '../../../common/api';
import { Email } from './Email';
import { Error } from './Error';
import Link from 'next/link';
import { PlatformSelect } from './PlatformSelect';
import { SubscriberCheckbox } from './SubscriberCheckbox';
import { mapValueToKey } from '../../../common/utils';

const isSelectedPlatformLinux = platform => platform === 'linux';

export class Form extends Component {
  state = {
    platform: PLATFORM,
    email: '',
    data: null,
    error: null,
    loading: false,
    isLinuxUser: false,
    isSubscriber: true,
  };

  handleOnSelect = platform =>
    this.setState({
      platform,
      data: null,
      error: null,
      isLinuxUser: false,
      loading: false,
    });

  handleOnEmail = email => this.setState({ email, error: null });

  handleOnSubmit = () => {
    const { platform, email } = this.state;

    if (isSelectedPlatformLinux(platform)) {
      return this.setState({ isLinuxUser: true });
    }

    this.setState({ loading: true, error: null }, async () => {
      try {
        const response = await Api.sendSignupRequest({ platform, email });

        this.setState({ data: response.json, loading: false });
      } catch (error) {
        this.setState({ loading: false, error });
      }
    });
  };

  setIsSubscriber = e => this.setState({ isSubscriber: e.target.checked });

  render() {
    const {
      data,
      error,
      loading,
      platform,
      isLinuxUser,
      isSubscriber,
    } = this.state;

    return (
      <div className="Form">
        <form onSubmit={e => e.preventDefault()}>
          <PlatformSelect
            onSelect={this.handleOnSelect}
            initialValue={PLATFORM}
          />
          {!data && !isLinuxUser && (
            <Email
              platform={this.state.platform}
              loading={loading}
              onEmail={this.handleOnEmail}
              onSubmit={this.handleOnSubmit}
            />
          )}
        </form>
        {isLinuxUser && (
          <div className="button" style={{ cursor: 'auto' }}>
            Linux support is coming soon, please follow us on{' '}
            <a href="https://twitter.com/getnebula">twitter</a> for the latest
            updates!
          </div>
        )}
        {data && (
          <div>
            <a className="button" href={data.link} download={data.link}>
              Download Nebula for {mapValueToKey(PLATFORMS, platform)}
            </a>
          </div>
        )}
        {error && (
          <>
            <AnalyticsConsumer>
              {track => {
                track.event({
                  ec: 'DOWNLOAD',
                  ea: 'submit_error',
                  el: JSON.stringify(error),
                });
              }}
            </AnalyticsConsumer>
            <Error error={error} />
          </>
        )}
        <SubscriberCheckbox
          checked={isSubscriber}
          handleChange={this.setIsSubscriber}
        />
        <div className="Disclaimer">
          <Link href="/privacy">
            <a href="/privacy">Privacy Policy</a>
          </Link>
        </div>
      </div>
    );
  }
}
