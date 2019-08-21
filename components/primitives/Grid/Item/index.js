import { node, string } from 'prop-types';

import React from 'react';

export const GridItem = ({ children }) => (
  <div className="Item">{children}</div>
);

export { GridItemMedia } from './Media';
export { GridItemDetails } from './Details';

GridItem.propTypes = {
  children: node,
};
