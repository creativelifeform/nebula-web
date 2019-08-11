import { shape, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Error = ({ json }) => (
  <div className="Error">
    <FontAwesomeIcon icon={faTimesCircle} />
    <span className="message">{json.error}</span>
  </div>
);

Error.propTypes = {
  json: shape({
    error: string,
  }),
};

export { Error };
