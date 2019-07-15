import { Content, Page } from '../primitives/';

import { FEATURES } from './constants';
import { Feature } from './Feature';
import React from 'react';

export default () => (
  <Page className="Editions">
    <Content
      title="Editions"
      description="All the different ways you can start designing 3D particle systems for the web with Nebula"
    >
      <table className="Table">
        <thead>
          <tr>
            <th>
              <h4>Features</h4>
              <p>What comes in the box.</p>
            </th>
            <th>
              <h4>Alpha</h4>
              <p>
                <b>Free & stable</b> But comes with limited features.
              </p>
              <button className="xs">Download</button>
            </th>
            <th>
              <h4>Community*</h4>
              <p>
                <b>Free!</b> Great for getting started with Nebula.
              </p>
              <button className="xs disabled">Coming Soon</button>
            </th>
            <th>
              <h4>Pro*</h4>
              <p>
                <b>$5 per account/month</b>The definitive edition with the
                latest features.
              </p>
              <button className="xs disabled">Coming Soon</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {FEATURES.map(props => (
            <Feature {...props} />
          ))}
        </tbody>
      </table>
      <p className="center disclaimer">
        * Pricing and features subject to change without notice
      </p>
    </Content>
  </Page>
);
