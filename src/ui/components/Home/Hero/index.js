import Blurb from './Blurb';
import Canvas from './Canvas';
import React from 'react';
import Video from './Video';

export default () => (
  <section className="Hero">
    <Canvas />
    <section className="content">
      <Blurb />
      <Video />
    </section>
  </section>
);
