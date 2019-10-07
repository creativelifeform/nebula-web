import Gdpr from './Gdpr';
import { GdprConsentConsumer } from '../../../context';
import Logo from './Logo';
import Nav from './Nav';
import React from 'react';

const getHeaderStyle = hasGdprConsent => (hasGdprConsent ? { top: '0px' } : {});

export default ({ routes }) => (
  <>
    <Gdpr />
    <GdprConsentConsumer>
      {({ hasGdprConsent }) => (
        <header className="Header" style={getHeaderStyle(hasGdprConsent)}>
          <Logo />
          <Nav routes={routes} />
        </header>
      )}
    </GdprConsentConsumer>
  </>
);
