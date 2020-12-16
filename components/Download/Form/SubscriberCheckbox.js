import { bool, func } from 'prop-types';

import React from 'react';

export const SubscriberCheckbox = ({ checked = false, handleChange }) => (
  <div className="Subscribe">
    <input type="checkbox" checked={checked} onChange={handleChange} />
    <span>
      Keep me in the loop for the latest product releases and updates!
    </span>
  </div>
);

SubscriberCheckbox.propTypes = {
  checked: bool,
  handleChange: func.isRequired,
};
