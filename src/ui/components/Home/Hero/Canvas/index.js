import React, { Component } from 'react';

import Visualisation from './Visualisation';

export default class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  async componentDidMount() {
    this.visualisation = await new Visualisation(this.canvas).start();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.visualisation.stop();
  }

  handleResize = e => {
    this.visualisation.resize();
  };

  render() {
    return <canvas ref={this.canvasRef} className="canvas" />;
  }

  get canvas() {
    return this.canvasRef.current;
  }
}
