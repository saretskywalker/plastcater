import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { getAllReleases } from '../data/releases';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '', acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();
  const releases = getAllReleases().slice(6, 12);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % releases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [releases.length]);

  const validatePassword = (pwd) => {
    let s = 0;
    if (pwd.length >= 8) s++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) s++;
    if (/[0-9]/.test(pwd)) s++;
    if (/[^a-zA-Z0-9]/.test(pwd)) s++;
    return s;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (name === 'password') setPasswordStrength(validatePassword(value));
  };

  const validateForm = () => {
    const e = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.password) e.password = 'Password is required';
    else if (formData.password.length < 8) e.password = 'Min 8 characters';
    if (formData.password !== formData.confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!formData.acceptTerms) e.acceptTerms = 'Accept terms to continue';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ fullName: formData.fullName, email: formData.email, isLoggedIn: true }));
      window.dispatchEvent(new Event('userLoggedIn'));
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['', '#ef4444', '#f97316', '#84cc16', '#22c55e'];

  return (
    <div className="auth-page">
      <div className="auth-left">
        

        <div className="auth-form-wrapper">
          <div className="auth-hero-text">JOIN US</div>
          <h1 className="auth-title">Create<br />Account</h1>
          <p className="auth-subtitle">Join our music community</p>

          <form onSubmit={handleRegister} className="auth-form">
            <div className="field">
              <label>Full Name</label>
              <input type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleInputChange} />
              {errors.fullName && <span className="field-error">{errors.fullName}</span>}
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="field">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Min 8 characters"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button type="button" className="toggle-pw" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formData.password && (
                <div className="strength-row">
                  <div className="strength-bar">
                    <div className="strength-fill" style={{ width: `${(passwordStrength / 4) * 100}%`, background: strengthColors[passwordStrength] }} />
                  </div>
                  <span style={{ color: strengthColors[passwordStrength], fontSize: 11 }}>{strengthLabels[passwordStrength]}</span>
                </div>
              )}
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>

            <div className="field">
              <label>Confirm Password</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Repeat password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                <button type="button" className="toggle-pw" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
            </div>

            <div className="field terms-field">
              <label className="terms-label">
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleInputChange} />
                <span>I agree to the <Link to="#">Terms and Conditions</Link></span>
              </label>
              {errors.acceptTerms && <span className="field-error">{errors.acceptTerms}</span>}
            </div>

            <button type="submit" className="auth-submit" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-switch">
            Already have an account?
            <Link to="/login"> Sign in</Link>
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

export default RegisterPage;
