import React from 'react';
import { Video } from './Video';
import poster from '../../../../assets/hero-video-poster-360p.png';
import src from '../../../../assets/hero-video-360p-60fps.mp4';

/**
 * A smaller video is displayed for smaller viewports
 */
const Small = () => <Video src={src} poster={poster} className="VideoSmall" />;

export default Small;
