import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

/**
 * Presets width to fix font awesome issue with nextjs
 * @see https://github.com/FortAwesome/react-fontawesome/issues/234
 */
export default () => (
  <FontAwesomeIcon icon={faCheck} className="fa-check" width="16" />
);
