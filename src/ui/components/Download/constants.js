import os from 'platform-detect/os.mjs';

export const PLATFORMS = {
  linux: 'Linux',
  windows: 'Windows',
  macos: 'MacOS',
};

export const PLATFORM = (() => {
  if (os.linux) {
    return 'Linux';
  }

  if (os.windows) {
    return 'Windows';
  }

  if (os.macos) {
    return 'MacOS';
  }
})();
