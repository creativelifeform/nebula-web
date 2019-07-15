import { bool, oneOfType, string } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import isString from 'lodash/isString';

const Edition = ({ hasFeature }) =>
  isString(hasFeature) ? (
    <td>{hasFeature}</td>
  ) : (
    <td>
      {!hasFeature ? (
        ''
      ) : (
        <FontAwesomeIcon icon={faCheck} className="fa-check" />
      )}
    </td>
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
