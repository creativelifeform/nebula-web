import React from 'react';
import { Video } from './Video';
import poster from '../../../../assets/hero-video-poster-720p.png';
import src from '../../../../assets/hero-video-720p-60fps.mp4';

/**
 * A video is displayed for medium-large viewports.
 */
const Large = () => <Video src={src} className="VideoLarge" poster={poster} />;

export default Large;
