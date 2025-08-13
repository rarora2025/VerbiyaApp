import React from 'react';
import { Target, BookOpen, ArrowRight, BarChart3, Clock, Check, Pencil } from 'lucide-react';
import logo from '../assets/logo.png';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const handleStartLearning = () => {
    alert('Coming Soon! This course will be available shortly.');
  };

  return (
    <div className="landing-page">
      <div className="container">
        {/* Header Section */}
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Verbiya Logo" className="logo-image" />
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional English Learning
            </h1>
            <div className="title-underline"></div>
            <p className="hero-subtitle">
              Create personalized courses tailored to your professional domain
            </p>
            <p className="hero-chinese">
              专业英语学习系统
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Target size={32} />
              </div>
              <h3 className="feature-title">Personalized Learning</h3>
              <p className="feature-description">
                Choose topics that match your professional needs
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3 className="feature-title">Flexible Schedule</h3>
              <p className="feature-description">
                Learn at your own pace with custom time estimates
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <div className="verbiya-logo-icon">
                  <Check size={20} />
                  <Pencil size={18} />
                  <span className="verbiya-text">Verbiya</span>
                </div>
              </div>
              <h3 className="feature-title">Expert Content</h3>
              <p className="feature-description">
                Industry-specific vocabulary and real-world applications
              </p>
            </div>
          </div>
        </section>

        {/* Domain Selection Section */}
        <section className="domain-selection-section">
          <div className="domain-intro">
            <h2 className="domain-title">Choose Your Professional Domain</h2>
            <p className="domain-subtitle">
              Select a field to begin your specialized English learning journey
            </p>
          </div>

          <div className="domains-grid">
            <div className="domain-card">
              <div className="domain-card-header">
                <div className="domain-icon">
                  <Target size={32} />
                </div>
                <div className="domain-title-section">
                  <h3 className="domain-card-title">Biotechnology</h3>
                  <p className="domain-card-chinese">生物技术</p>
                </div>
              </div>
              
              <p className="domain-description">
                Master genetic engineering, protein expression, and cutting-edge biotechnology terminology.
              </p>
              
              <div className="key-topics-section">
                <h4 className="key-topics-label">Key Topics:</h4>
                <div className="key-topics-tags">
                  <span className="topic-tag">Genetic Engineering</span>
                  <span className="topic-tag">Protein Expression</span>
                  <span className="topic-tag">Cell Culture</span>
                </div>
              </div>
              
              <button className="start-learning-btn" onClick={handleStartLearning}>
                Start Learning
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="domain-card">
              <div className="domain-card-header">
                <div className="domain-icon">
                  <BarChart3 size={32} />
                </div>
                <div className="domain-title-section">
                  <h3 className="domain-card-title">Business English</h3>
                  <p className="domain-card-chinese">商业英语</p>
                </div>
              </div>
              
              <p className="domain-description">
                Learn financial analysis, contract negotiation, and professional business communication.
              </p>
              
              <div className="key-topics-section">
                <h4 className="key-topics-label">Key Topics:</h4>
                <div className="key-topics-tags">
                  <span className="topic-tag">Financial Analysis</span>
                  <span className="topic-tag">Contract Negotiation</span>
                  <span className="topic-tag">Market Research</span>
                </div>
              </div>
              
              <button className="start-learning-btn" onClick={handleStartLearning}>
                Start Learning
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="domain-card">
              <div className="domain-card-header">
                <div className="domain-icon">
                  <BookOpen size={32} />
                </div>
                <div className="domain-title-section">
                  <h3 className="domain-card-title">Chemistry</h3>
                  <p className="domain-card-chinese">化学</p>
                </div>
              </div>
              
              <p className="domain-description">
                Understand laboratory procedures, analytical methods, and chemical terminology.
              </p>
              
              <div className="key-topics-section">
                <h4 className="key-topics-label">Key Topics:</h4>
                <div className="key-topics-tags">
                  <span className="topic-tag">Organic Chemistry</span>
                  <span className="topic-tag">Analytical Methods</span>
                  <span className="topic-tag">Lab Equipment</span>
                </div>
              </div>
              
              <button className="start-learning-btn" onClick={handleStartLearning}>
                Start Learning
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* Tailored Learning Experience Section */}
        <section className="tailored-learning-section">
          <div className="tailored-learning-content">
            <h2 className="tailored-learning-title">Tailored Learning Experience</h2>
            <p className="tailored-learning-text">
              Select specific professional topics to create your personalized curriculum. 
              Each course is carefully designed to help you master the English skills you need.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="Verbiya Logo" className="footer-logo-image" />
            </div>
            <p className="footer-text">Empowering professional English learning</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage; 