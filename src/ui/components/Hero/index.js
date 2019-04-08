import React, { Component } from 'react';

import hero from '../../../assets/hero.png';

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  async componentDidMount() {}

  render() {
    return (
      <section className="Hero">
        <div className="container">
          <canvas ref={this.canvasRef} className="canvas" />
          <img src={hero} alt="hero" className="image" />
        </div>
      </section>
    );
  }
}
