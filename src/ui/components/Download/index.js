import { Content, Page } from '../primitives';
import { linux, macos, windows } from 'platform-detect/os.mjs';

import { Email } from './Email';
import React from 'react';
import { withContent } from '../utils';

const Download = ({ content: { download } }) => (
  <Page className="Page Download">
    <Content {...download}>
      <Email />
    </Content>
  </Page>
);

export default withContent(Download);
