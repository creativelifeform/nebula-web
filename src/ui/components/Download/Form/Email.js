import React, { Component } from 'react';

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
          placeholder="alex@example.com"
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.props.onSubmit}>
          {this.props.loading && <Spinner />}
          {!this.props.loading && 'Submit'}
        </button>
      </div>
    );
  }
}
