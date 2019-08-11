import { API_URL } from '../common/config';

const endpoint = route => `${API_URL}${route}`;

export const SIGNUP = endpoint('/signup');
