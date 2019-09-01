import os from 'platform-detect/os.mjs';
import platform from 'platform';

export const PLATFORMS = {
  Linux: 'linux',
  Windows: 'win',
  MacOS: 'osx',
};

export const PLATFORM = (() => {
  console.log('NEW', platform.os);
  console.log('OLD', os);

  if (os.linux) {
    return 'linux';
  }

  if (os.windows) {
    return 'win';
  }

  if (os.macos) {
    return 'osx';
  }
})();
