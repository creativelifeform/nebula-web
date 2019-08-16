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
} from '../../common/components';

import React from 'react';
import { object } from 'prop-types';
import { withContent } from '../../common/utils';

const About = ({ content: { about, callout } }) => (
  <Page className="About">
    <Content {...about}>
      <Grid className="About">
        <GridItem>
          <GridItemMedia />
          <GridItemDetails title="Design">
            <p>
              Download the Nebula desktop app for your platform (Windows, Mac or
              Linux) and design some awesome 3D particle systems!
            </p>
          </GridItemDetails>
        </GridItem>
        <GridItem>
          <GridItemMedia />
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
              in your JavaScript application
            </p>
          </GridItemDetails>
        </GridItem>
        <GridItem>
          <GridItemMedia />
          <GridItemDetails title="Deliver">
            <p>
              Use{' '}
              <Code>
                <ThreeNebulaLink />
              </Code>{' '}
              to render your particle system anywhere in your app
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
