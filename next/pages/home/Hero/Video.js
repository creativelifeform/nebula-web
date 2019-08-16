import React from 'react';

export default () => (
  <video
    src={require('../../../assets/hero-video.mp4')}
    preload="auto"
    autoPlay={true}
    loop={true}
    className="Video"
    muted={true}
  />
);
