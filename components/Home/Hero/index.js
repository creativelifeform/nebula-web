import { Content, Grid } from '../../primitives';

import Blurb from './Blurb';
import Canvas from './Canvas';
import React from 'react';
import dynamic from 'next/dynamic';

const VideoLarge = dynamic(() => import('./Video/Large'));
const VideoSmall = dynamic(() => import('./Video/Small'));

const Hero = () => (
  <Content className="Hero">
    <Canvas />
    <Grid>
      {/* for mobile */}
      <VideoSmall />
      <Blurb />
      {/* for tablet and desktop */}
      <VideoLarge />
    </Grid>
  </Content>
);

export default Hero;
