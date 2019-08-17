import React, { Component } from 'react';

export default class Canvas extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  async componentDidMount() {
    // guards against nextjs errors for window being undefined on the server
    if (!window) {
      return;
    }

    const { Visualisation } = require('./Visualisation');

    this.visualisation = await new Visualisation(this.canvas).start();

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
