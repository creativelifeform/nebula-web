// NOTE .env is totally not working right now so this is just temporary until
// we can get that working

const { env: ENV = {} } = process || {};
const NODE_ENV = ENV.NODE_ENV || 'development';

export const __DEV__ = NODE_ENV === 'development';
export const __PROD__ = NODE_ENV === 'production';
export const __TEST__ = NODE_ENV === 'test';
export const API_URL = 'http://localhost:3001/api';
export const TEST_EMAIL = 'hello@example.com';
