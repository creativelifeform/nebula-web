import { Content, Grid } from '../../primitives';

import Blurb from './Blurb';
import React from 'react';
import Video from './Video';
import dynamic from 'next/dynamic';

const Canvas = dynamic(import('./Canvas'), { ssr: true });

export default () => (
  <Content className="Hero">
    <Canvas />
    <Grid>
      <Blurb />
      <Video />
    </Grid>
  </Content>
);
