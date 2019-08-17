import { Callout } from '../../../common/components';
import React from 'react';
import { withContent } from '../../../common/utils';

const Blurb = ({
  content: {
    home: { title, text },
    callout: { large },
  },
}) => (
  <div className="Blurb">
    <h2>{title}</h2>
    <p>{text}</p>
    <Callout text={large} />
  </div>
);

export default withContent(Blurb);