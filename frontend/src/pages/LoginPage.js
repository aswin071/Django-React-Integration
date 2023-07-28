import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser, updateAuthToken } from '../redux/AuthContext';
import jwt_decode from 'jwt-decode';
import { getLocal } from '../helpers/auth';
import { Toaster, useToaster } from 'react-hot-toast';
import login from '../helpers/auth';
import './LoginPage.css';

function LoginPage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { success, error } = useToaster();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await login(e);
    setLoading(false);

    if (response) {
      const decoded = jwt_decode(response.access);
      dispatch(updateUser(decoded));
      dispatch(updateAuthToken(response));
      history('/');
    } else {
      error('Invalid credentials. Please try again.');
    }
  };

  const handleLoadingSubmit = (e) => {
    setLoading(true);
    handleSubmit(e);
  };

  const handleFormSubmit = loading ? handleLoadingSubmit : handleSubmit;

  return (
    <div className="main">
      <Toaster position="top-center" reverseOrder={false} />
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="title">
          Welcome,
          <br />
          <span>Login to continue</span>
        </div>
        <input type="email" placeholder="Email" name="username" className="input" />
        <input type="password" placeholder="Password" name="password" className="input" />
        <input type="submit" value={loading ? 'Logging in...' : 'LOGIN'} className="button-confirm" />

        <p>Not yet registered..?</p>

        <p>
          <Link className="button-confirm" to="/signup">
            SignUp →
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
