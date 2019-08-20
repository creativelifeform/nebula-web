import * as THREE from 'three';

import { test as DEFAULT_DATA } from './data.js';

const { PerspectiveCamera, Scene, WebGLRenderer } = THREE;

/**
 * Sets up three js and particle system environment so that they can be rendered
 * into the editor's Stage component.
 *
 */
export class Visualisation {
  constructor(canvas, data = DEFAULT_DATA) {
    this.canvas = canvas;
    this.data = data;
    this.shouldAnimate = true;
  }

  /**
   * Starts the visualization.
   *
   * @return {Promise<Visualization>}
   */
  start() {
    this.shouldAnimate = true;

    return this.makeScene()
      .makeCamera()
      .makeWebGlRenderer()
      .makeParticleSystem();
  }

  /**
   * Stops the visualisation.
   *
   * @return void
   */
  stop() {
    this.shouldAnimate = false;
    this.particleSystem.destroy();
  }

  /**
   * Renders the visualization.
   *
   * @return {Visualization}
   */
  render() {
    const animate = () => {
      if (!this.shouldAnimate) {
        return;
      }

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
        x: -10,
        y: 0,
        z: 50,
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

    this.webGlRenderer =
      this.webGlRenderer || new WebGLRenderer({ canvas, ...options });
    this.webGlRenderer.setSize(clientWidth, clientHeight, false);

    return this;
  }

  async makeParticleSystem() {
    const {
      default: ParticleSystem,
      SpriteRenderer,
    } = await import('three-nebula');

    return new Promise(resolve => {
      ParticleSystem.fromJSONAsync(this.data.particleSystemState, THREE)
        .then(particleSystem => {
          this.particleSystem = particleSystem;
          particleSystem.addRenderer(new SpriteRenderer(this.scene, THREE));

          return resolve(this.render());
        })
        .catch(console.error);
    });
  }
}
