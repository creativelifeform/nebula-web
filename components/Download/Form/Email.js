import React, { Component } from 'react';
import { bool, func } from 'prop-types';

import { AnalyticsConsumer } from '../../../context';
import { Spinner } from './Spinner';

export class Email extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) =>
    this.setState({ value }, () => this.props.onEmail(value));

  render() {
    return (
      <div className="EmailWithButton">
        <input
          type="email"
          placeholder="name@example.com"
          onChange={this.handleChange}
          disabled={this.props.loading ? true : false}
        />
        <AnalyticsConsumer>
          {track => (
            <button
              type="submit"
              onClick={e => {
                track.event({
                  ec: 'DOWNLOAD',
                  ea: 'submit',
                });
                this.props.onSubmit(e);
              }}
            >
              {this.props.loading && <Spinner />}
              {!this.props.loading && 'Submit'}
            </button>
          )}
        </AnalyticsConsumer>
      </div>
    );
  }
}

Email.propTypes = {
  loading: bool.isRequired,
  onEmail: func.isRequired,
  onSubmit: func.isRequired,
};
