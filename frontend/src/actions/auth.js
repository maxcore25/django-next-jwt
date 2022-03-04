import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const register =
  (first_name, last_name, username, password, re_password) =>
  async dispatch => {
    const body = JSON.stringify({
      first_name,
      last_name,
      username,
      password,
      re_password,
    });

    try {
      const res = await fetch('/api/account/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: body,
      });

      if (res.status === 201) {
        dispatch({
          type: REGISTER_SUCCESS,
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
