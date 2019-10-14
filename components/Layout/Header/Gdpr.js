import { AnalyticsConsumer, GdprConsentConsumer } from '../../../context';

import React from 'react';

const Gdpr = () => (
  <GdprConsentConsumer>
    {({ hasGdprConsent, handleAccept }) =>
      !hasGdprConsent ? (
        <div className="Gdpr">
          This website collects some information anonymously using Google
          Analytics. Please see our <a href="/privacy">privacy policy</a> for
          details
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
