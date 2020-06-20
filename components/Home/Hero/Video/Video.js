import React from 'react';
import { string } from 'prop-types';

/**
 * Autoplaying video component. Must use dangerouslySetInnerHTML because of react bug.
 * @see https://github.com/facebook/react/issues/6544
 */
export const Video = ({ src, poster, className }) => (
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
      poster="${poster}"
    />
  `,
    }}
  />
);

Video.propTypes = {
  src: string,
  poster: string,
  className: string,
};
