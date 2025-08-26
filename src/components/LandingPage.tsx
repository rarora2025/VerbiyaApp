import React, { useState, useEffect } from 'react';
import { Target, BookOpen, ArrowRight, BarChart3, Clock, Check, Sparkles, Zap, Play, Brain } from 'lucide-react';
import logo from '../assets/logo.png';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: <Target size={40} />,
      title: "Personalized Learning",
      chinese: "个性化学习",
      description: "AI-powered curriculum tailored to your professional needs and learning pace",
      color: "var(--accent-blue)"
    },
    {
      icon: <Clock size={40} />,
      title: "Flexible Schedule",
      chinese: "灵活时间安排",
      description: "Learn anytime, anywhere with adaptive time management and progress tracking",
      color: "var(--accent-purple)"
    },
    {
      icon: <Zap size={40} />,
      title: "Expert Content",
      chinese: "专业内容",
      description: "Industry-specific vocabulary and real-world applications from domain experts",
      color: "var(--primary-green)"
    }
  ];

  return (
    <div className="landing-page">
      {/* Animated Background Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <header className={`header ${isVisible ? 'fade-in' : ''}`}>
          <div className="logo">
            <div className="logo-container">
              <img src={logo} alt="Verbiya Logo" className="logo-image" />
              <div className="logo-glow"></div>
            </div>
            <div className="logo-text">
              <span className="logo-title">Verbiya</span>
              <span className="logo-subtitle">Professional English Learning</span>
            </div>
          </div>
        </header>

        {/* Scrollable Menu Bar */}
        <nav className={`scrollable-menu ${isScrolled ? 'visible' : ''}`}>
          <div className="menu-container">
            <div className="menu-logo">
              <img src={logo} alt="Verbiya Logo" className="menu-logo-image" />
              <span className="menu-logo-text">Verbiya</span>
            </div>
            
            <div className="menu-links">
              <a href="#features" className="menu-link">Features</a>
              <a href="#courses" className="menu-link">Courses</a>
              <a href="#custom" className="menu-link">Custom Course</a>
            </div>
            
            <div className="menu-actions">
              <button className="menu-btn menu-btn-secondary">Login</button>
              <button className="menu-btn menu-btn-primary">Get Started</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={`hero-section ${isVisible ? 'slide-up' : ''}`}>
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={20} />
              <span>智能代理学习平台 • Agentic Learning Platform</span>
            </div>
            
            <h1 className="hero-title">
              Master Professional English
              <span className="gradient-text"> Your Way</span>
            </h1>
            
            <p className="hero-subtitle">
              Create personalized courses tailored to your professional domain with cutting-edge AI technology
            </p>
            
            <p className="hero-chinese">
              专业英语学习系统 - 为您的职业发展量身定制
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary">
                <Play size={20} />
                <span>Try Our First Course</span>
              </button>
              <button className="btn btn-secondary">
                <Brain size={20} />
                <span>Request Custom Course</span>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-card floating-card-1">
              <Target size={24} />
              <span>Biotech</span>
            </div>
            <div className="floating-card floating-card-2">
              <BarChart3 size={24} />
              <span>Business</span>
            </div>
            <div className="floating-card floating-card-3">
              <BookOpen size={24} />
              <span>Chemistry</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`features-section ${isVisible ? 'fade-in-delay' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Why Choose Verbiya?</h2>
            <p className="section-subtitle">
              Experience the future of professional English learning
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${activeFeature === index ? 'active' : ''}`}
                style={{ '--accent-color': feature.color } as React.CSSProperties}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-chinese">{feature.chinese}</p>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-decoration"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Our First Available Course Section */}
        <section id="courses" className={`domain-selection-section ${isVisible ? 'fade-in-delay-2' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">Our First Available Course</h2>
            <p className="section-subtitle">
              Start your domain proficiency journey with us, more specialized courses coming soon
            </p>
          </div>

          <div className="course-showcase">
            <div className="main-course-card">
                          <div className="course-image">
              <div className="course-badge">营销专业 · Marketing Domain</div>
              <div className="course-image-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Marketing professionals working together" 
                  className="course-photo"
                />
              </div>
            </div>
              
              <div className="course-content">
                <div className="course-header">
                  <h3 className="course-title">亚洲营销人员的线上营销课程</h3>
                  <p className="course-subtitle">Online Marketing for Asian Marketers</p>
                </div>
                
                <div className="course-details">
                  <div className="course-meta">
                    <span className="meta-item">2h Duration</span>
                    <span className="meta-item">4 Sections</span>
                    <span className="meta-item">15+ Exercises</span>
                  </div>
                </div>
                
                <div className="course-focus">
                  <h4>Course Focus</h4>
                  <p>Designed specifically for Mandarin-speaking marketers to master translating Asian marketing concepts into compelling Western campaigns.</p>
                </div>
                
                <div className="course-features">
                  <div className="feature-item">
                    <Check size={20} />
                    <span>US Market Understanding</span>
                  </div>
                  <div className="feature-item">
                    <Check size={20} />
                    <span>Cultural Bridge Building</span>
                  </div>
                  <div className="feature-item">
                    <Check size={20} />
                    <span>Translation Mastery</span>
                  </div>
                  <div className="feature-item">
                    <Check size={20} />
                    <span>Practical Applications</span>
                  </div>
                </div>
                
                <Link to="/course/asian-marketing" className="start-learning-btn">
                  <span>开始学习 Start Learning</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="coming-soon-section">
              <h3 className="coming-soon-title">即将推出更多专业领域课程 · More professional domain courses coming soon</h3>
              <div className="coming-soon-grid">
                <div className="coming-soon-card">
                  <h4>金融</h4>
                  <p>Finance</p>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
                <div className="coming-soon-card">
                  <h4>科技</h4>
                  <p>Technology</p>
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
                <div className="coming-soon-card">
                  <h4>医疗</h4>
                  <p>Healthcare</p>
                  <span className="coming-soon-badge">Coming Soon</span>
                  </div>

              </div>
            </div>
          </div>
        </section>

        {/* Custom Course Request Section */}
        <section id="custom" className={`custom-course-section ${isVisible ? 'fade-in-delay-3' : ''}`}>
          <div className="section-header">
            <div className="brain-icon">
              <Brain size={32} />
            </div>
            <h2 className="section-title">Need a Custom Course?</h2>
            <p className="section-subtitle">
              与智能代理系统对话,描述您的具体需求,48小时内获得个性化课程
            </p>
            <p className="section-subtitle-english">
              Communicate with our agentic learning system to describe your domain-specific needs and receive a custom course within 48 hours
            </p>
          </div>
          
          <div className="custom-course-card">
            <div className="card-header">
              <div className="brain-icon-small">
                <Brain size={24} />
              </div>
              <h3>Agentic Learning System Ready</h3>
            </div>
            
            <p className="card-description">
              Describe your professional domain and learning objectives, and our system will design a specialized course for your needs.
            </p>
            
            <div className="input-section">
              <div className="input-container">
                <textarea 
                  className="course-description-input"
                  placeholder="Describe your professional domain and specific learning objectives: your industry, role, target proficiency level, specific challenges you face in professional English communication..."
                  rows={4}
                />
                <button className="send-button">
                  <ArrowRight size={20} />
                </button>
              </div>
              <div className="input-help">
                <span>Press Enter to send • Shift + Enter for new line</span>
                <span className="char-count">0/1000</span>
              </div>
            </div>
          </div>
        </section>



        {/* Footer */}
        <footer className={`footer ${isVisible ? 'fade-in-delay-4' : ''}`}>
          <div className="footer-content">
            <div className="footer-main">
              <div className="footer-logo">
                <img src={logo} alt="Verbiya Logo" className="footer-logo-image" />
                <div className="footer-logo-text">
                  <h3>Verbiya</h3>
                  <p>Agentic Domain Proficiency Platform for Global Success</p>
                  <p className="footer-chinese">为不同行业专业人士设计的英语学习平台。每个课程都经过精心设计，确保您能够高效掌握所需的专业技能。</p>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>&copy; 2024 Verbiya. Domain-specific professional courses powered by agentic learning systems.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage; 