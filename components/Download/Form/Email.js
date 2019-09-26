import React, { Component } from 'react';
import { bool, func } from 'prop-types';

import { Analytics } from '../../primitives/Analytics';
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
        <Analytics>
          {({ event }) => (
            <button
              type="submit"
              onClick={e => {
                event({
                  category: 'DOWNLOAD',
                  action: 'submit',
                });
                this.props.onSubmit(e);
              }}
            >
              {this.props.loading && <Spinner />}
              {!this.props.loading && 'Submit'}
            </button>
          )}
        </Analytics>
      </div>
    );
  }
}

Email.propTypes = {
  loading: bool.isRequired,
  onEmail: func.isRequired,
  onSubmit: func.isRequired,
};
