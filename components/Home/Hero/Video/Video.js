import React from 'react';
import { string } from 'prop-types';

/**
 * Autoplaying video component. Must use dangerouslySetInnerHTML because of react bug.
 * @see https://github.com/facebook/react/issues/6544
 */
export const Video = ({ src, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{
      __html: `
    <video
      muted
      autoplay
      loop
      playsinline
      src="${src}"
    />
  `,
    }}
  />
);

Video.propTypes = {
  src: string,
  className: string,
};
