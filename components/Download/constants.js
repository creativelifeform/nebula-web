import os from 'platform-detect/os.mjs';
import platform from 'platform';

export const PLATFORMS = {
  Windows: 'win',
  MacOS: 'osx',
  Linux: 'linux',
};

export const PLATFORM = (() => {
  console.log('NEW', platform.os);
  console.log('OLD', os);

  if (os.linux) {
    console.log('it should be linux');
    return 'linux';
  }

  if (os.windows) {
    console.log('it should be windows');
    return 'win';
  }

  if (os.macos) {
    console.log('it should be macos');
    return 'osx';
  }
})();
