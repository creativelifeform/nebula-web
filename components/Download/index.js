import { Content, Page } from '../primitives';

import { Form } from './Form/';
import React from 'react';
import { object } from 'prop-types';
import { withContent } from '../../common/utils';

const Download = ({ content: { download } }) => (
  <Page className="Download">
    <Content {...download}>
      <Form />
    </Content>
  </Page>
);

Download.propTypes = {
  content: object.isRequired,
};

export default withContent(Download);
