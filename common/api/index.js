import { TEST_EMAIL, __PROD__ } from '../config';

import Fetch from 'rd-fetch';
import { SIGNUP } from './endpoints';

export default class Api {
  static sendSignupRequest(body) {
    const method = 'POST';
    const email = __PROD__ ? body.email : TEST_EMAIL;

    return Fetch.json(SIGNUP, { method, body: { ...body, email } });
  }
}
