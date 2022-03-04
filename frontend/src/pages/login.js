import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/auth';
import Layout from '../hocs/Layout';
import Loader from 'react-loader-spinner';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    // if (dispatch && dispatch !== null && dispatch !== undefined) {
    //   dispatch(
    //     register(first_name, last_name, username, password, re_password)
    //   );
    // }
  };

  if (typeof window !== 'undefined' && isAuthenticated) {
    router.push('/dashboard');
  }

  return (
    <Layout title='httpOnly Auth | Register' content='Nice description'>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <h3>Log into Account</h3>

        <div>
          <div>
            <label htmlFor='username'>Username*</label>
          </div>
          <input
            type='text'
            name='username'
            id='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor='password'>Password*</label>
          </div>
          <input
            type='password'
            name='password'
            id='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>

        <button type='submit'>Sign In</button>
      </form>
    </Layout>
  );
};

export default Login;
