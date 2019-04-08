import ParticleSystem, { SpriteRenderer } from 'three-nebula';
import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

import DEFAULT_DATA from './data';

/**
 * Sets up three js and particle system environment so that they can be rendered
 * into the editor's Stage component.
 *
 */
export default class Visualization {
  constructor(canvas, data = DEFAULT_DATA) {
    this.canvas = canvas;
    this.data = data;
  }

  /**
   * Starts the visualization.
   *
   * @return {Promise<Visualization>}
   */
  start() {
    return this.makeScene()
      .makeCamera()
      .makeWebGlRenderer()
      .makeParticleSystem();
  }

  /**
   * Renders the visualization.
   *
   * @return {Visualization}
   */
  render() {
    const animate = () => {
      requestAnimationFrame(animate);

      this.particleSystem.update();
      this.webGlRenderer.render(this.scene, this.camera);
    };

    animate();

    return this;
  }

  resize() {
    const {
      camera,
      webGlRenderer,
      canvas: { clientWidth, clientHeight },
    } = this;

    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    webGlRenderer.setSize(clientWidth, clientHeight, false);
  }

  makeScene() {
    this.scene = new Scene();

    return this;
  }

  makeCamera() {
    const cameraState = {
      type: 'PerspectiveCamera',
      params: {
        fov: 75,
        nearPlane: 0.1,
        farPlane: 1000,
      },
      position: {
        x: 0,
        y: 0,
        z: 75,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      controller: {
        enabled: true,
      },
    };
    const {
      canvas: { clientWidth, clientHeight },
    } = this;
    const { params, position, rotation } = cameraState;
    const { fov, nearPlane, farPlane } = params;

    this.camera = new PerspectiveCamera(
      fov,
      clientWidth / clientHeight,
      nearPlane,
      farPlane
    );

    this.camera.position.copy(position);
    this.camera.rotation.set(rotation.x, rotation.y, rotation.z);

    return this;
  }

  makeWebGlRenderer(options = { alpha: true, antialias: true }) {
    const {
      canvas,
      canvas: { clientWidth, clientHeight },
    } = this;

    this.webGlRenderer = new WebGLRenderer({ canvas, ...options });
    this.webGlRenderer.setSize(clientWidth, clientHeight, false);

    return this;
  }

  makeParticleSystem() {
    return new Promise(resolve => {
      this.particleSystem = ParticleSystem.fromJSONAsync(this.data).then(
        particleSystem => {
          particleSystem.addRenderer(new SpriteRenderer(this.scene));

          resolve(this.render);
        }
      );
    });
  }
}
