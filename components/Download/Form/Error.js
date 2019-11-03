import * as Sentry from '@sentry/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { object } from 'prop-types';

const handleInvalidError = json => {
  Sentry.captureMessage(JSON.stringify(json));

  return 'Sorry, our system is currently under heavy load, please try again later';
};

const Error = ({ json }) => {
  return (
    <div className="Error">
      <FontAwesomeIcon icon={faTimesCircle} />
      <span className="message">
        {json.error && typeof json.error === 'string'
          ? json.error
          : handleInvalidError(json)}
      </span>
    </div>
  );
};

Error.propTypes = {
  json: object,
};

export { Error };
