import { Guides } from '../../../../components';
import NextLink from 'next/link';
import React from 'react';

export default () => (
  <Guides>
    <div className="Guide">
      <h2>Windows Installation Guide</h2>
      <h3>Requirements</h3>
      <ul>
        <li>
          <strong>OS</strong>: Windows 10 (64-bit only)
        </li>
        <li>
          <strong>Processor</strong>: 2.2GHZ Dual Core Processor Or Higher
        </li>
        <li>
          <strong>Memory</strong>: 2 GB RAM
        </li>
        <li>
          <strong>Graphics</strong>: 512MB VRAM Or Greater
        </li>
      </ul>
      <h3>Instructions</h3>
      <ul>
        <li>
          Head over to the{' '}
          <NextLink href="/download">
            <a>download page</a>
          </NextLink>{' '}
          and select Windows as your operating system to get the correct version
          of Nebula.
        </li>
        <li>
          Unzip the downloaded zip file contents and look inside the folder for
          the Nebula app icon.
        </li>
        <li>Double click or right click and select open to run Nebula.</li>
        <li>
          <strong>The alpha version of the app is not signed.</strong> When
          asked whether to trust the application, select{' '}
          <strong>Run anyway</strong>.
        </li>
      </ul>
    </div>
  </Guides>
);
