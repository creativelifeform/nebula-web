import { Content, Grid } from '../../primitives';

import Blurb from './Blurb';
import Canvas from './Canvas';
import React from 'react';
import Video from './Video';

export default () => (
  <Content className="Hero">
    <Canvas />
    <Grid>
      <Blurb />
      <Video />
    </Grid>
  </Content>
);
