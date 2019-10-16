import { node, string } from 'prop-types';

import { GdprConsentConsumer } from '../../../context';
import React from 'react';

export const Page = ({ children, className = '' }) => (
  <GdprConsentConsumer>
    {({ hasGdprConsent }) => {
      const baseClass = `Page ${className}`;
      const gdprClass = hasGdprConsent
        ? 'with-gdpr-consent'
        : 'without-gdpr-consent';

      return (
        <section className={`${baseClass} ${gdprClass}`}>{children}</section>
      );
    }}
  </GdprConsentConsumer>
);

export { Content } from './Content';

Page.propTypes = {
  children: node,
  className: string,
};
