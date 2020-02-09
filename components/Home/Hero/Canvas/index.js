import React, { Component } from 'react';

export default class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  async componentDidMount() {
    const THREE = await import('three');
    const { Visualisation } = await import('./Visualisation');

    this.visualisation = await new Visualisation(this.canvas, THREE).start();

    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    const { visualisation } = this;

    visualisation && visualisation.stop();
  }

  handleResize = e => {
    const { visualisation } = this;

    visualisation && visualisation.resize();
  };

  render() {
    return <canvas ref={this.canvasRef} className="canvas" />;
  }

  get canvas() {
    return this.canvasRef.current;
  }
}
