import { bool, oneOfType, string } from 'prop-types';

import IconCheck from './IconCheck';
import React from 'react';
import isString from 'lodash/isString';

const Edition = ({ hasFeature }) =>
  isString(hasFeature) ? (
    <td>{hasFeature}</td>
  ) : (
    <td>{!hasFeature ? '' : <IconCheck />}</td>
  );

export const Feature = ({ title, text, inAlpha, inCommunity, inPro }) => (
  <tr>
    <td>
      <h5>{title}</h5>
      <p>{text}</p>
    </td>
    {[inAlpha, inCommunity, inPro].map((hasFeature, i) => (
      <Edition key={i} hasFeature={hasFeature} />
    ))}
  </tr>
);

Edition.propTypes = {
  hasFeature: oneOfType([bool, string]),
};

const inEdition = oneOfType([string, bool]);

Feature.propTypes = {
  title: string,
  text: string,
  inAlpha: inEdition,
  inCommunity: inEdition,
  inPro: inEdition,
};
