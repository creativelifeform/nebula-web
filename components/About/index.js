import {
  Callout,
  Code,
  Content,
  Grid,
  GridItem,
  GridItemDetails,
  GridItemMedia,
  Page,
  ThreeLink,
  ThreeNebulaLink,
} from '../primitives';

import React from 'react';
import deliver from '../../assets/about/deliver.jpg';
import design from '../../assets/about/design.png';
import develop from '../../assets/about/develop.png';
import { object } from 'prop-types';
import { withContent } from '../../common/utils';

const About = ({ content: { about, callout } }) => (
  <Page className="About">
    <Content {...about}>
      <Grid className="About">
        <GridItem>
          <GridItemMedia src={design} />
          <GridItemDetails title="Design">
            <p>
              Download the Nebula desktop app for your platform (Windows, Mac or
              Linux) and design some awesome 3D particle systems!
            </p>
          </GridItemDetails>
        </GridItem>
        <GridItem>
          <GridItemMedia src={develop} />
          <GridItemDetails title="Develop">
            <p>
              Include{' '}
              <Code>
                <ThreeLink />
              </Code>
              and{' '}
              <Code>
                <ThreeNebulaLink />
              </Code>{' '}
              in your JavaScript application and follow our tiny{' '}
              <Code>
                <a href="https://codesandbox.io/s/three-nebula-quickstart-kz6uv">
                  quickstart
                </a>
              </Code>{' '}
              example.
            </p>
          </GridItemDetails>
        </GridItem>
        <GridItem>
          <GridItemMedia src={deliver} />
          <GridItemDetails title="Deliver">
            <p>
              Render your particle system anywhere in your app and dazzle your
              users with eye-catching effects!
            </p>
          </GridItemDetails>
        </GridItem>
      </Grid>
      <footer>
        <Callout text={callout.large} />
      </footer>
    </Content>
  </Page>
);

About.propTypes = {
  content: object.isRequired,
};

export default withContent(About);
