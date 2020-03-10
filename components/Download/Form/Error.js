import * as Sentry from '@sentry/browser';

import { object, oneOfType, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const handleInvalidError = error => {
  Sentry.captureMessage(JSON.stringify(error));

  return 'Sorry, our system is currently under heavy load, please try again later';
};

const Error = ({ error }) => {
  return (
    <div className="Error">
      <FontAwesomeIcon icon={faTimesCircle} />
      <span className="message">
        {error.json && typeof error.json.error === 'string'
          ? error.json.error
          : handleInvalidError(error)}
      </span>
    </div>
  );
};

Error.propTypes = {
  error: oneOfType[(object, string)],
};

export { Error };
