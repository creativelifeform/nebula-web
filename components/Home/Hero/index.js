import { Content, Grid } from '../../primitives';

import Blurb from './Blurb';
import Canvas from './Canvas';
import Gif from './Gif';
import React from 'react';
import Video from './Video';

export default () => (
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
