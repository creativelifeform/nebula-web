import { func, object, string } from 'prop-types';

import { DOWNLOAD_PATH } from '../../common/constants';
import React from 'react';
import { withRouter } from 'next/router';

const Component = ({
  text = 'Download',
  className = '',
  router,
  onClick = e => router.push(DOWNLOAD_PATH),
}) => (
  <button onClick={onClick} className={className}>
    {text}
  </button>
);

Component.propTypes = {
  text: string,
  className: string,
  router: object,
  onClick: func,
};

export const Callout = withRouter(Component);
