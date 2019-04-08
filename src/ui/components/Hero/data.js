export default {
  preParticles: 500,
  integrationType: 'EULER',
  emitters: [
    {
      id: '35ca6300-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ca6301-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Mass',
          properties: {
            min: 30,
            max: 10,
            isEnabled: true,
          },
        },
        {
          id: '35ca6302-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Life',
          properties: {
            min: 2,
            max: 4,
            isEnabled: true,
          },
        },
        {
          id: '35ca6303-5007-11e9-97ee-a1cd9de6aa19',
          type: 'BodySprite',
          properties: {
            texture:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJkSURBVHjaxJeJbusgEEW94S1L//83X18M2MSuLd2pbqc4wZGqRLrKBsyZhQHny7Jk73xVL8xpVhWrcmiB5lX+6GJ5YgQ2owbAm8oIwH1VgKZUmGcRqKGGPgtEQQAzGR8hQ59fAmhJHSAagigJ4E7GPWRXOYC6owAd1JM6wDQPADyMWUqZRMqmAojHp1Vn6EQQEgUNMJLnUjMyJsM49wygBkAPw9dVFwXRkncCIIW3GRgoTQUZn6HxCMAFEFd8TwEQ78X4rHbILoAUmeT+RFG4UhQ6MiIAE4W/UsYFjuVjAIa2nIY4q1R0GFtQWG3E84lqw2GO2QOoCKBVu0BAPgDSU0eUDjjQenNkV/AW/pWChhpMTelo1a64AOKM30vk18GzTHXCNtI/Knz3DFBgsUqBGIjTInXRY1yA9xkVoqW5tVq3pDR9A0hfF5BSARmVnh7RMDCaIdcNgbPBkgzn1Bu+SfIEFSpSBmkxyrMicb0fAEuCZrWnN89veA/4XcakrPcjBWzkTuLjlbfTQPOlBhz+HwkqqPXmPQDdrQItxE1moGof1S74j/8txk8EHhTQrAE8qlwfqS5yukm1x/rAJ9Jiaa6nyATqD78aUVBhFo8b1V4DdTXdCW+IxA1zB4JhiOhZMEWO1HqnvdoHZ4FAMIhV9REF8FiUm0jsYPEJx/Fm/N8OhH90HI9YRHesWbXXZwAShU8qThe7H8YAuJmw5yOd989uRINKRTJAhoF8jbqrHKfeCYdIISZfSq26bk/K+yO3YvfKrVgiwQBHnwt8ynPB25+M8hceTt/ybPhnryJ78+tLgAEAuCFyiQgQB30AAAAASUVORK5CYII=',
            isEnabled: true,
          },
        },
        {
          id: '35ca6304-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Radius',
          properties: {
            width: 12,
            height: 4,
            isEnabled: true,
          },
        },
        {
          id: '35ca6305-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ca6306-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Alpha',
          properties: {
            alphaA: 1,
            alphaB: 0,
            life: Infinity,
            easing: 'easeLinear',
          },
        },
        {
          id: '35ca6307-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Color',
          properties: {
            colorA: '#4F1500',
            colorB: '#0029FF',
            life: Infinity,
            easing: 'easeLinear',
          },
        },
        {
          id: '35ca6308-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Scale',
          properties: {
            scaleA: 1,
            scaleB: 0.5,
            life: Infinity,
            easing: 'easeLinear',
          },
        },
        {
          id: '35ca6309-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ca630a-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ca630b-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ca630c-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ca630d-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Rotate',
          properties: {
            x: 1,
            y: 0,
            z: 0,
            life: Infinity,
            easing: 'easeLinear',
          },
        },
      ],
    },
    {
      id: '35ee65c0-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ee65c1-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Mass',
          properties: {
            min: 30,
            max: 10,
            isEnabled: true,
          },
        },
        {
          id: '35ee65c2-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Life',
          properties: {
            min: 2,
            max: 4,
            isEnabled: true,
          },
        },
        {
          id: '35ee65c3-5007-11e9-97ee-a1cd9de6aa19',
          type: 'BodySprite',
          properties: {
            texture: '/static/media/circle_02.6944333e.png',
            isEnabled: true,
          },
        },
        {
          id: '35ee65c4-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Radius',
          properties: {
            width: 12,
            height: 4,
            isEnabled: true,
          },
        },
        {
          id: '35ee65c5-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ee65c6-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Alpha',
          properties: {
            alphaA: 1,
            alphaB: 0,
            life: Infinity,
            easing: 'easeLinear',
          },
        },
        {
          id: '35ee65c7-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Color',
          properties: {
            colorA: '#4F1500',
            colorB: '#0029FF',
            life: Infinity,
            easing: 'easeLinear',
          },
        },
        {
          id: '35ee65c8-5007-11e9-97ee-a1cd9de6aa19',
          type: 'Scale',
          properties: {
            scaleA: 1,
            scaleB: 0.5,
            life: Infinity,
            easing: 'easeLinear',
          },
        },
        {
          id: '35ee65c9-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ee65ca-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ee65cb-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ee65cc-5007-11e9-97ee-a1cd9de6aa19',
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
          id: '35ee65cd-5007-11e9-97ee-a1cd9de6aa19',
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
};
