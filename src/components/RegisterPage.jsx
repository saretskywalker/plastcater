import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/[0-9]/.test(pwd)) strength++;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength++;
    return strength;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      setPasswordStrength(validatePassword(value));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Accept terms to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        isLoggedIn: true
      }));
      window.dispatchEvent(new Event('userLoggedIn'));
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };

  const getPasswordStrengthText = () => {
    const texts = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];
    return texts[passwordStrength] || 'Enter password';
  };

  const getPasswordStrengthColor = () => {
    const colors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'];
    return colors[passwordStrength] || 'var(--gray-text)';
  };

  return (
    <div className="register-page">
      <div className="register-wrapper">
        <div className="register-box">
          <div className="register-header">
            <div className="logo-register">♫</div>
            <h1>Create Account</h1>
            <p>Join our music community</p>
          </div>

          <form onSubmit={handleRegister} className="register-form">
            <div className="form-field">
              <label htmlFor="fullName">Full Name</label>
              <div className="input-group">
                <User size={20} className="icon" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? 'error' : ''}
                />
              </div>
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <div className="input-group">
                <Mail size={20} className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <Lock size={20} className="icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Create strong password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {formData.password && (
                <div className="password-strength">
                  <div className="strength-bar">
                    <div
                      className="strength-fill"
                      style={{
                        width: `${(passwordStrength / 4) * 100}%`,
                        backgroundColor: getPasswordStrengthColor()
                      }}
                    />
                  </div>
                  <span style={{ color: getPasswordStrengthColor() }}>
                    {getPasswordStrengthText()}
                  </span>
                </div>
              )}
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-group">
                <Lock size={20} className="icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={errors.confirmPassword ? 'error' : ''}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            <div className="form-field terms-field">
              <label className="terms-label">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleInputChange}
                />
                <span>
                  I agree to the <Link to="#" className="terms-link">Terms and Conditions</Link>
                </span>
              </label>
              {errors.acceptTerms && <span className="error-text">{errors.acceptTerms}</span>}
            </div>

            <button type="submit" className="btn-create-account" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="signin-link">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
