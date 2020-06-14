import React from 'react';
import video from '../../../assets/nebula-website-video-720p-60fps.mp4';

/**
 * A video is displayed for medium-large viewports.
 */
const VideoLarge = () => (
  <video
    src={video}
    preload="auto"
    autoPlay={true}
    loop={true}
    className="VideoLarge"
    muted={true}
  />
);

export default VideoLarge;
