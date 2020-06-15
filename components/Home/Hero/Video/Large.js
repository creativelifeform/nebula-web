import React from 'react';
import { Video } from './Video';
import src from '../../../../assets/nebula-website-video-720p-60fps.mp4';

/**
 * A video is displayed for medium-large viewports.
 */
const Large = () => <Video src={src} className="VideoLarge" />;

export default Large;
