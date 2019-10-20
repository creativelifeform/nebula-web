import Fetch from 'rd-fetch';
import { SIGNUP } from './endpoints';

export default class Api {
  static sendSignupRequest(body) {
    const method = 'POST';

    return Fetch.json(SIGNUP, { method, body });
  }
}
