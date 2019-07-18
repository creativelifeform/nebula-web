import { Content, Page } from '../primitives';
import { PLATFORM, PLATFORMS } from './constants';

import { Email } from './Email';
import { PlatformSelect } from './PlatformSelect';
import React from 'react';
import { mapValueToKey } from '../../../common/utils';
import os from 'platform-detect/os.mjs';
import { withContent } from '../utils';

const Download = ({ content: { download } }) => (
  <Page className="Download">
    <Content {...download}>
      <form>
        <PlatformSelect initialValue={mapValueToKey(PLATFORMS, PLATFORM)} />
        <Email />
      </form>
    </Content>
  </Page>
);

export default withContent(Download);
