import { bool, func } from 'prop-types';

import React from 'react';

export const SubscriberCheckbox = ({ checked = true, handleChange }) => (
  <div>
    <input type="checkbox" checked={checked} onChange={handleChange} />
    <span>Please send me product information updates</span>
  </div>
);

SubscriberCheckbox.propTypes = {
  checked: bool,
  handleChange: func.isRequired,
};
