import { Content, Grid } from '../../primitives';

import Blurb from './Blurb';
import React from 'react';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('./Canvas'));
const Video = dynamic(() => import('./Video'));

export default () => (
  <Content className="Hero">
    <Canvas />
    <Grid>
      <Blurb />
      <Video />
    </Grid>
  </Content>
);
