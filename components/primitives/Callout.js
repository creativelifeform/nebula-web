import { func, object, string } from 'prop-types';

import { Analytics } from './Analytics';
import { DOWNLOAD_PATH } from '../../common/constants';
import React from 'react';
import { withRouter } from 'next/router';

const Component = ({
  text = 'Download',
  className = '',
  router,
  onClick = e => router.push(DOWNLOAD_PATH),
}) => (
  <Analytics>
    {({ event }) => (
      <button
        onClick={e => {
          event({
            category: 'CALLOUT',
            action: `${router.pathname} click`,
          });
          onClick(e);
        }}
        className={className}
      >
        {text}
      </button>
    )}
  </Analytics>
);

Component.propTypes = {
  text: string,
  className: string,
  router: object,
  onClick: func,
};

export const Callout = withRouter(Component);
