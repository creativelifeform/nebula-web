import React from 'react';
import video from '../../../assets/hero-video.mp4';

/**
 * A video is displayed for medium-large viewports.
 */
export default () => (
  <video
    src={video}
    preload="auto"
    autoPlay={true}
    loop={true}
    className="Video"
    muted={true}
  />
);
