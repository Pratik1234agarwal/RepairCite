import React, { useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

const AdminLogin = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const login = async (e) => {
    if (formData.email === '' || formData.password === ' ') {
      alert('Please Enter the username and password');
    }
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', formData);
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      axios.defaults.headers.common['x-auth-token'] = res.data.token;
      setLoading(false);
      props.history.push('/admin/panel');
    } catch (err) {
      console.log(err.response);
      alert(err.response.data.err);
      setLoading(false);
    }
    //setLoading(false);
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='container'>
      <h1 className='text-dark text-center'>Admin Login</h1>
      <div className='row'>
        <div className='col-sm-12'>
          <label for='email' className='my-3'>
            Enter your email
          </label>
          <input
            value={formData.email}
            onChange={onChange}
            className='form-control'
            name='email'
            type='email'
            required
          />
        </div>
        <div className='col-sm-12'>
          <label for='password' className='my-3'>
            Enter your password
          </label>
          <input
            value={formData.password}
            onChange={onChange}
            className='form-control'
            name='password'
            type='password'
            required
          />
        </div>
        <div className='col-12'>
          <button
            onClick={login}
            style={{ width: '100%' }}
            className='text-center btn btn-dark mx-auto mt-5 p-3'
          >
            Log In
          </button>
        </div>

        {loading && (
          <div className='spinner_wrapper'>
            <div className='spinner'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
