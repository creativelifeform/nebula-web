import React from 'react';

export const Grid = ({ children, className = '' }) => (
  <div className={`Grid ${className}`}>{children}</div>
);

export { GridItem, GridItemMedia, GridItemDetails } from './Item';
