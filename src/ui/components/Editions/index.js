import { Callout, Content, Page } from '../primitives/';

import { Feature } from './Feature';
import React from 'react';
import { withContent } from '../utils';

const ComingSoon = () => (
  <Callout className="xs disabled" text="Coming Soon" onClick={() => {}} />
);

const Editions = ({
  content: {
    editions: { title, text, features },
  },
}) => (
  <Page className="Editions">
    <Content title={title} text={text}>
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
          {features.map((props, i) => (
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

export default withContent(Editions);
