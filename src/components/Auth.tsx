import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Auth.css';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate authentication API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (isLogin) {
        // Login logic
        if (formData.email === 'demo@verbiya.com' && formData.password === 'demo123') {
          // Success - show beautiful notification
          setSuccessMessage('🎉 Welcome to Verbiya! Login successful.');
          setShowSuccess(true);
          
          // Redirect to course after 2 seconds
          setTimeout(() => {
            navigate('/course/online-marketing-asian-marketers');
          }, 2000);
        } else {
          setError('Invalid email or password. Try demo@verbiya.com / demo123');
        }
      } else {
        // Signup logic
        if (formData.name && formData.email && formData.password) {
          setSuccessMessage('✅ Account created successfully! You can now login.');
          setShowSuccess(true);
          
          // Switch to login mode after 2 seconds
          setTimeout(() => {
            setIsLogin(true);
            setFormData({ email: '', password: '', name: '' });
            setShowSuccess(false);
          }, 2000);
        } else {
          setError('Please fill in all fields.');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const switchMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '' });
    setError('');
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-shapes">
          <div className="auth-shape auth-shape-1"></div>
          <div className="auth-shape auth-shape-2"></div>
          <div className="auth-shape auth-shape-3"></div>
        </div>
      </div>

      <div className="auth-content">
        <div className="auth-header">
          <Link to="/" className="back-button">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="auth-logo">
            <div className="logo-container">
              <img src={logo} alt="Verbiya Logo" className="logo-image" />
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <span className="logo-title">Verbiya</span>
              <span className="logo-subtitle">Professional English Learning Platform</span>
            </div>
          </div>
        </div>

        <div className="auth-card">
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button 
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrapper">
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <Lock size={20} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            {showSuccess && (
              <div className="success-notification">
                <div className="success-icon">✓</div>
                <span>{successMessage}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="auth-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loading-spinner"></div>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                className="switch-mode-btn"
                onClick={switchMode}
              >
                {isLogin ? 'Sign up here' : 'Sign in here'}
              </button>
            </p>
          </div>

          {isLogin && (
            <div className="demo-credentials">
              <h4>Demo Credentials:</h4>
              <p><strong>Email:</strong> demo@verbiya.com</p>
              <p><strong>Password:</strong> demo123</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
