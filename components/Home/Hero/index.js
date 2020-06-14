import { Content, Grid } from '../../primitives';
import dynamic from 'next/dynamic';
import Blurb from './Blurb';
import Canvas from './Canvas';
import React from 'react';

const VideoLarge = dynamic(() => import('./VideoLarge'));
const VideoSmall = dynamic(() => import('./VideoSmall'));

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
