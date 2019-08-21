import { API_URL } from '../config';

const endpoint = route => `${API_URL}${route}`;

export const SIGNUP = endpoint('/signup');
