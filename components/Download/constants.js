import os from 'platform-detect/os.mjs';

export const PLATFORMS = {
  Linux: 'linux',
  Windows: 'win',
  MacOS: 'osx',
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
