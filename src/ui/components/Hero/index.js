import React, { Component } from 'react';

import Visualisation from './Visualisation';
import hero from '../../../assets/hero.png';

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  async componentDidMount() {
    this.visualisation = await new Visualisation(this.canvas).start();

    window.addEventListener('resize', this.handleResize);
  }

  handleResize = e => {
    this.visualisation.resize();
  };

  render() {
    return (
      <section className="Hero">
        <canvas ref={this.canvasRef} className="canvas" />
        <section className="content">
          <div className="blurb">
            <h2>A particle system designer for the web.</h2>
            <p>
              Design rich, diverse particle systems for any JavaScript
              application.
            </p>
            <button>Try Nebula For Free</button>
          </div>
          <img className="image" src={hero} alt="hero" />
        </section>
      </section>
    );
  }

  get canvas() {
    return this.canvasRef.current;
  }
}
