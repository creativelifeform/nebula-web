import { Content, Page } from '../primitives';

import { Form } from './Form/';
import React from 'react';
import { withContent } from '../utils';

const Download = ({ content: { download } }) => (
  <Page className="Download">
    <Content {...download}>
      <Form />
    </Content>
  </Page>
);

export default withContent(Download);
