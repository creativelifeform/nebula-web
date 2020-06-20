import { Content, Grid } from '../../primitives';
import { VideoLarge, VideoSmall } from './Video/async';

import Blurb from './Blurb';
import { Canvas } from './Canvas/async';
import React from 'react';

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
