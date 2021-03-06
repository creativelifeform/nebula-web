import { AnalyticsConsumer, GdprConsentConsumer } from '../../../context';

import NextLink from 'next/link';
import React from 'react';

const Gdpr = () => (
  <GdprConsentConsumer>
    {({ hasGdprConsent, handleAccept }) =>
      !hasGdprConsent ? (
        <div className="Gdpr">
          <div className="message">
            This website collects some information anonymously using Google
            Analytics. Please see our{' '}
            <NextLink href="/privacy">
              <a href="/privacy">privacy policy</a>
            </NextLink>{' '}
            for details
          </div>
          <AnalyticsConsumer>
            {track => (
              <button
                onClick={e => {
                  handleAccept(e);
                  track.event({
                    ec: 'GDPR',
                    ea: 'accept',
                  });
                }}
              >
                OK
              </button>
            )}
          </AnalyticsConsumer>
        </div>
      ) : null
    }
  </GdprConsentConsumer>
);

export default Gdpr;
