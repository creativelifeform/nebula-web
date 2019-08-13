const ENV = process.env;
const NODE_ENV = ENV.NODE_ENV;

const {
  REACT_APP_API_URL = 'http://localhost:3001/api',
  REACT_APP_TEST_EMAIL = 'hello@example.com',
} = ENV;

export const API_URL = REACT_APP_API_URL;
export const TEST_EMAIL = REACT_APP_TEST_EMAIL;
export const __DEV__ = NODE_ENV === 'development';
export const __PROD__ = NODE_ENV === 'production';
export const __TEST__ = NODE_ENV === 'test';
export const __SNAP__ = NODE_ENV === 'snap';
