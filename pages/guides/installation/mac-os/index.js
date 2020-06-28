import { Guides } from '../../../../components';
import NextLink from 'next/link';
import React from 'react';

export default () => (
  <Guides>
    <div className="Guide">
      <h2>MacOS Installation Guide</h2>
      <h3>Download</h3>
      <p>
        Head over to the{' '}
        <NextLink href="/download">
          <a>download page</a>
        </NextLink>{' '}
        and select MacOS as your operating system to get the correct version of
        Nebula.
      </p>
      <h3>Unzip</h3>
      <p>
        Unzip the downloaded zip file contents and look inside the folder for
        the Nebula app icon.
      </p>
      <h3>Run</h3>
      <p>
        <strong>Hold control, open the app</strong> and give permission to your
        system to run Nebula.
      </p>
    </div>
  </Guides>
);
