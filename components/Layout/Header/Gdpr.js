import { GdprConsentConsumer } from '../../../context';
import React from 'react';

const Gdpr = () => (
  <GdprConsentConsumer>
    {({ hasGdprConsent, handleAccept }) =>
      !hasGdprConsent ? (
        <div className="Gdpr">
          This website collects some information anonymously using Google
          Analytics. Please see our <a href="/privacy">privacy policy</a> for
          details
          <button onClick={handleAccept}>OK</button>
        </div>
      ) : null
    }
  </GdprConsentConsumer>
);

export default Gdpr;
