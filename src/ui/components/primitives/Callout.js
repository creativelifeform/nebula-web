import { func, object, string } from 'prop-types';

import { DOWNLOAD_PATH } from '../../../routes/constants';
import React from 'react';
import { withRouter } from 'react-router';

const Component = ({
  text = 'Download',
  className = '',
  history,
  onClick = e => history.push(DOWNLOAD_PATH),
}) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);

Component.propTypes = {
  text: string,
  className: string,
  history: object,
  onClick: func,
};

export const Callout = withRouter(Component);
