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
        <div className="container">
          <canvas ref={this.canvasRef} className="canvas" />
          <section className="content">
            <section>A WebGL Particle System Designer</section>
            <img src={hero} alt="hero" className="image" />
          </section>
        </div>
      </section>
    );
  }

  get canvas() {
    return this.canvasRef.current;
  }
}
