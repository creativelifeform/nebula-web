import { Content, Page, Sidebar } from '../primitives';
import { node, object } from 'prop-types';

import React from 'react';
import { withContent } from '../../common/utils';

const Guide = ({ content: { guides }, children }) => (
  <Page className="Guides">
    <Content>
      <Sidebar content={guides.sidebar} basePath={'guide'} />
      {children}
    </Content>
  </Page>
);

Guide.propTypes = {
  content: object.isRequired,
  children: node,
};

export default withContent(Guide);
