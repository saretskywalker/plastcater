import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { getAllReleases } from '../data/releases';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const releases = getAllReleases().slice(0, 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % releases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [releases.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email, isLoggedIn: true }));
        window.dispatchEvent(new Event('userLoggedIn'));
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        

        <div className="auth-form-wrapper">
          <div className="auth-hero-text">WELCOME BACK</div>
          <h1 className="auth-title">Sign In</h1>
          <p className="auth-subtitle">Your records are waiting</p>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="toggle-pw" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <div className="auth-error">{error}</div>}

            <button type="submit" className="auth-submit" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <Link to="#" className="auth-forgot">Forgot password?</Link>

          <div className="auth-switch">
            Don't have an account?
            <Link to="/register"> Create one</Link>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="vinyl-stage">
          <div className="vinyl-carousel">
            {releases.map((release, index) => {
              const offset = index - currentSlide;
              const len = releases.length;
              const norm = ((offset % len) + len) % len;
              const pos = norm <= len / 2 ? norm : norm - len;
              return (
                <div
                  key={release.id}
                  className="vinyl-card"
                  style={{
                    transform: `translateX(${pos * 60}px) translateY(${Math.abs(pos) * 20}px) scale(${pos === 0 ? 1 : 0.84 - Math.abs(pos) * 0.05})`,
                    zIndex: len - Math.abs(pos),
                    opacity: Math.abs(pos) > 2 ? 0 : 1 - Math.abs(pos) * 0.28,
                    transition: 'all 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <img src={release.image} alt={release.title} />
                  {pos === 0 && (
                    <div className="vinyl-info">
                      <span className="vinyl-title">{release.title}</span>
                      <span className="vinyl-artist">{release.artist}</span>
                      <span className="vinyl-price">€{release.price.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="carousel-dots">
            {releases.map((_, i) => (
              <button key={i} className={`dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
