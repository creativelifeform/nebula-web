import { DOWNLOAD_PATH } from '../../../routes/constants';
import React from 'react';
import { withRouter } from 'react-router';

const component = ({
  text = 'Download',
  className = '',
  onClick = e => history.push(DOWNLOAD_PATH),
  history,
}) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);

export const Callout = withRouter(component);
