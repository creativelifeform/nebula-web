import React, { Component } from 'react';

import Canvas from './Canvas';
import heroImage from '../../../../assets/hero.png';
import heroVideo from '../../../../assets/hero-video.mp4';

export default () => (
  <section className="Hero">
    <Canvas />
    <section className="content">
      <div className="blurb">
        <h2>A particle system designer for the web.</h2>
        <p>
          Design rich, diverse particle systems for any JavaScript application.
        </p>
        <button>Try Nebula For Free</button>
      </div>
      {/* <img src={heroImage} alt="hero" /> */}
      <video src={heroVideo} preload="auto" autoPlay={true} loop={true} />
    </section>
  </section>
);
