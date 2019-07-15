import { Callout, Content, Page } from '../primitives/';

import { FEATURES } from './constants';
import { Feature } from './Feature';
import React from 'react';

const ComingSoon = () => (
  <Callout className="xs disabled" text="Coming Soon" onClick={() => {}} />
);

export default () => (
  <Page className="Editions">
    <Content
      title="Editions"
      text="All the different ways you can start designing 3D particle systems for the web with Nebula"
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
              <Callout className="xs" />
            </th>
            <th>
              <h4>Community*</h4>
              <p>
                <b>Free!</b> Great for getting started with Nebula.
              </p>
              <ComingSoon />
            </th>
            <th>
              <h4>Pro*</h4>
              <p>
                <b>$5 per account/month</b>The definitive edition with the
                latest features.
              </p>
              <ComingSoon />
            </th>
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((props, i) => (
            <Feature key={i} {...props} />
          ))}
        </tbody>
      </table>
      <p className="center disclaimer">
        * Pricing and features subject to change without notice
      </p>
    </Content>
  </Page>
);
