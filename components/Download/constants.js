import os from 'platform-detect/os.mjs';

export const PLATFORMS = {
  Windows: 'win',
  MacOS: 'osx',
  Linux: 'linux',
};

export const PLATFORM = (() => {
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
