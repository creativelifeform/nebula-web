import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Presets width to fix font awesome issue with nextjs
 * @see https://github.com/FortAwesome/react-fontawesome/issues/234
 */
export default () => (
  <FontAwesomeIcon
    icon={faChevronDown}
    className="fa-chevron-down fa-xs arrow"
    width="11"
  />
);
