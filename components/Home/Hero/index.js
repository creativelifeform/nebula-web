import { Content, Grid } from '../../primitives';
import dynamic from 'next/dynamic';
import Blurb from './Blurb';
import Canvas from './Canvas';
import Gif from './Gif';
import React from 'react';

const Video = dynamic(() => import('./Video'));

const Hero = () => (
  <Content className="Hero">
    <Canvas />
    <Grid>
      {/* for mobile */}
      <Gif />
      <Blurb />
      {/* for tablet and desktop */}
      <Video />
    </Grid>
  </Content>
);

export default Hero;
