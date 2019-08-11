import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Error = ({ json }) => (
  <div className="Error">
    <FontAwesomeIcon icon={faTimesCircle} />
    <span className="message">{json.error}</span>
  </div>
);

export { Error };
