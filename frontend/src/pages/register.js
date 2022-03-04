import { useState } from 'react';
import Layout from '../hocs/Layout';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    re_password: '',
  });

  const { first_name, last_name, username, password, re_password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <Layout title='httpOnly Auth | Register' content='Nice description'>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <h3>Create an Account</h3>
        <div>
          <div>
            <label htmlFor='first_name'>First name*</label>
          </div>
          <input
            type='text'
            name='first_name'
            id='first_name'
            onChange={onChange}
            value={first_name}
            required
          />
        </div>
      </form>
    </Layout>
  );
};

export default Register;
