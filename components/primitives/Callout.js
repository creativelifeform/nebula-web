import { func, object, string } from 'prop-types';

import { Analytics } from './Analytics';
import { DOWNLOAD_PATH } from '../../common/constants';
import React from 'react';
import { withRouter } from 'next/router';

const Component = ({
  text = 'Download',
  className = '',
  router,
  onClick = (e, track) => {
    router.push(DOWNLOAD_PATH);
    track.pageview(DOWNLOAD_PATH);
  },
}) => (
  <Analytics>
    {track => (
      <button
        onClick={e => {
          track
            .event({
              ec: 'CALLOUT',
              ea: 'click',
              dp: router.pathname,
            })
            .send();

          onClick(e, track);
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
