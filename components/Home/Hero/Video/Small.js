import React from 'react';
import { Video } from './Video';
import src from '../../../../assets/nebula-website-video-360p-60fps.mp4';

/**
 * A smaller video is displayed for smaller viewports
 */
const Small = () => <Video src={src} className="VideoSmall" />;

export default Small;
