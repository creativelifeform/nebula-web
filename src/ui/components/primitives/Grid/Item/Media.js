import React from 'react';

export const GridItemMedia = ({ type = 'image', alt = '', src = '' }) => {
  switch (type) {
    case 'image':
      return <img src={src} alt={alt} className={'Media'} />;
    default:
      return <div className={'Media'} />;
  }
};
