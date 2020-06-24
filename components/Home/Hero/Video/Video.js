import React, { memo } from 'react';

import { string } from 'prop-types';

const videosAreEqual = (prevProps, nextProps) =>
  prevProps.src === nextProps.src;

/**
 * Autoplaying video component. Must use dangerouslySetInnerHTML because of react bug.
 * @see https://github.com/facebook/react/issues/6544
 */
const VideoComponent = ({ src, poster, className }) => (
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

VideoComponent.propTypes = {
  src: string,
  poster: string,
  className: string,
};

export const Video = memo(VideoComponent, videosAreEqual);
