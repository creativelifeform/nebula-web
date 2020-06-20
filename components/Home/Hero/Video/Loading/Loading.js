import React from 'react';
import { string } from 'prop-types';

export const Loading = ({ preview, size = 'large' }) => (
  <div className={`VideoLoading ${size}`}>
    <img src={preview} />
  </div>
);

Loading.propTypes = {
  preview: string,
  size: string,
};
