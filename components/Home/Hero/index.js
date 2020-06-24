import { Content, Grid } from '../../primitives';
import { VideoLarge, VideoSmall } from './Video/async';
import { useMedia, useNetwork } from 'react-use';

import Blurb from './Blurb';
import { Canvas } from './Canvas/async';
import React from 'react';

const Video = () => {
  const isWide = useMedia('(min-width: 45em)');
  const { effectiveType: connection } = useNetwork();
  const shouldRenderSmallVideo = !isWide || connection !== '4g';

  return shouldRenderSmallVideo ? <VideoSmall /> : <VideoLarge />;
};

const Hero = () => {
  return (
    <Content className="Hero">
      <Canvas />
      <Grid>
        <Blurb />
        <Video />
      </Grid>
    </Content>
  );
};

export default Hero;
