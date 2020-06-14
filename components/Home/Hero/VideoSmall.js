import React from 'react';
import video from '../../../assets/nebula-website-video-360p-60fps.mp4';

/**
 * A smaller video is displayed for smaller viewports
 */
const VideoSmall = () => (
  <video
    src={video}
    preload="auto"
    autoPlay={true}
    loop={true}
    className="VideoSmall"
    muted={true}
  />
);

export default VideoSmall;
