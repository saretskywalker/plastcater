import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({
          email,
          isLoggedIn: true
        }));
        window.dispatchEvent(new Event('userLoggedIn'));
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="login-header">
            <div className="logo-login">♫</div>
            <h1>Sign In</h1>
            <p>Welcome back to plastcater</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <div className="input-group">
                <Mail size={20} className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <Lock size={20} className="icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && <div className="error-box">{error}</div>}

            <button type="submit" className="btn-sign-in" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <Link to="#" className="forgot-password-link">
            Forgot your password?
          </Link>

          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Create one</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
