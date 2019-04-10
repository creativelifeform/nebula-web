export default {
  headerState: {
    projectName: 'production',
  },
  particleSystemState: {
    preParticles: 500,
    integrationType: 'EULER',
    emitters: [
      {
        id: 'fbf33a10-5bcf-11e9-89f4-6bf0bae5fd33',
        totalEmitTimes: Infinity,
        life: Infinity,
        cache: {
          totalEmitTimes: 0,
          life: 0,
        },
        rate: {
          particlesMin: 1,
          particlesMax: 5,
          perSecondMin: 0.01,
          perSecondMax: 0.02,
        },
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          x: 0,
          y: 0,
          z: 0,
        },
        initializers: [
          {
            id: 'fbf33a11-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Mass',
            properties: {
              min: 30,
              max: 10,
              isEnabled: true,
            },
          },
          {
            id: 'fbf33a12-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Life',
            properties: {
              min: 2,
              max: 4,
              isEnabled: true,
            },
          },
          {
            id: 'fbf33a13-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'BodySprite',
            properties: {
              texture:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=',
              isEnabled: true,
            },
          },
          {
            id: 'fbf33a14-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Radius',
            properties: {
              width: 12,
              height: 4,
              isEnabled: true,
            },
          },
          {
            id: 'fbf33a15-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'RadialVelocity',
            properties: {
              radius: 40,
              x: 0,
              y: 0,
              z: 1,
              theta: 30,
              isEnabled: true,
            },
          },
        ],
        behaviours: [
          {
            id: 'fbf33a16-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Alpha',
            properties: {
              alphaA: 1,
              alphaB: 0,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
          {
            id: 'fbf33a17-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Color',
            properties: {
              colorA: '#4F1500',
              colorB: '#0029FF',
              life: Infinity,
              easing: 'easeLinear',
            },
          },
          {
            id: 'fbf33a18-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Scale',
            properties: {
              scaleA: 1,
              scaleB: 0.5,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
          {
            id: 'fbf33a19-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Force',
            properties: {
              fx: 0,
              fy: 0,
              fz: -20,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
          {
            id: 'fbf33a1a-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Rotate',
            properties: {
              x: 1,
              y: 0,
              z: 0,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
          {
            id: 'fbf33a1b-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'RandomDrift',
            properties: {
              driftX: 1,
              driftY: 23,
              driftZ: 4,
              delay: 1,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
          {
            id: 'fbf33a1c-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Spring',
            properties: {
              x: 1,
              y: 5,
              z: 0,
              spring: 0.01,
              friction: 1,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
        ],
        emitterBehaviours: [
          {
            id: 'fbf33a1d-5bcf-11e9-89f4-6bf0bae5fd33',
            type: 'Rotate',
            properties: {
              x: 0,
              y: 0,
              z: 0,
              life: Infinity,
              easing: 'easeLinear',
            },
          },
        ],
      },
    ],
  },
};
