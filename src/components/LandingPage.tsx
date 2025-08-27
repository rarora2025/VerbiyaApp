import React, { useState, useEffect } from 'react';
import { Target, BookOpen, ArrowRight, BarChart3, Clock, Check, Sparkles, Zap, Play, Brain, Languages } from 'lucide-react';
import logo from '../assets/logo.png';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTranslated, setIsTranslated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  const handleAgentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Always prevent default to handle submission manually
    
    const form = e.currentTarget;
    if (!form) return;
    
    const formData = new FormData(form);
    const courseRequest = formData.get('course_request') as string;
    
    if (!courseRequest || !courseRequest.trim()) {
      alert('Please describe your professional domain and learning objectives before submitting.');
      return;
    }
    
    // Show loading state
    setIsSubmitting(true);
    
    // Submit to Formspree manually
    fetch('https://formspree.io/f/xvgbolaz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      console.log('Formspree response:', response);
      if (response.ok || response.status === 200 || response.status === 302) {
        // Success - show animation
        setIsSubmitting(false);
        setShowSuccess(true);
        
        // Reset form safely
        if (form) {
          form.reset();
          const charCountElement = document.querySelector('.char-count');
          if (charCountElement) {
            charCountElement.textContent = '0/1000';
          }
        }
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your request. Please try again.');
    });
  };

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


        {/* Fixed Menu Bar - Always Visible */}
        <nav className="scrollable-menu">
          <div className="menu-container">
            <div className="menu-logo">
              <img src={logo} alt="Verbiya Logo" className="menu-logo-image" />
              <span className="menu-logo-text">Verbiya</span>
            </div>
            
            <div className="menu-links">
              <button onClick={() => scrollToSection('features')} className="menu-link">Features</button>
              <button onClick={() => scrollToSection('courses')} className="menu-link">Course</button>
              <button onClick={() => scrollToSection('custom')} className="menu-link">Agent</button>
            </div>
            
            <div className="menu-actions">
              <button 
                onClick={toggleTranslation} 
                className="menu-btn menu-btn-translate"
                title={isTranslated ? "Switch to English" : "Switch to Traditional Chinese"}
              >
                <Languages size={16} />
                <span>{isTranslated ? "English" : "中文"}</span>
              </button>
              <Link to="/auth" className="menu-btn menu-btn-secondary">Login</Link>
              <Link to="/auth" className="menu-btn menu-btn-primary">Get Started</Link>
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
              {isTranslated ? "掌握專業英語" : "Master Professional English"}
              <span className="gradient-text"> {isTranslated ? "您的方式" : "Your Way"}</span>
            </h1>
            
            <p className="hero-subtitle">
              {isTranslated 
                ? "使用尖端AI技術創建專為您的專業領域量身定制的個性化課程"
                : "Create personalized courses tailored to your professional domain with cutting-edge AI technology"
              }
            </p>
            
            <p className="hero-chinese">
              {isTranslated 
                ? "專業英語學習系統 - 為您的職業發展量身定制"
                : "专业英语学习系统 - 为您的职业发展量身定制"
              }
            </p>
            
            <div className="hero-actions">
              <Link to="/auth" className="btn btn-primary">
                <Play size={20} />
                <span>Try Our First Course</span>
              </Link>
              <button className="btn btn-secondary" onClick={() => document.getElementById('custom')?.scrollIntoView({ behavior: 'smooth' })}>
                <Brain size={20} />
                <span>Request Custom Course</span>
              </button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="floating-card floating-card-1">
              <Target size={24} />
              <span>Biotech</span>
              <span className="coming-soon-label">{isTranslated ? "即將推出" : "Coming Soon"}</span>
            </div>
            <div className="floating-card floating-card-2">
              <BarChart3 size={24} />
              <span>Business</span>
              <span className="coming-soon-label">{isTranslated ? "即將推出" : "Coming Soon"}</span>
            </div>
            <div className="floating-card floating-card-3">
              <BookOpen size={24} />
              <span>Chemistry</span>
              <span className="coming-soon-label">{isTranslated ? "即將推出" : "Coming Soon"}</span>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className={`features-section ${isVisible ? 'fade-in-delay' : ''}`}>
          <div className="section-header">
            <h2 className="section-title">{isTranslated ? "為什麼選擇 Verbiya？" : "Why Choose Verbiya?"}</h2>
            <p className="section-subtitle">
              {isTranslated ? "體驗專業英語學習的未來" : "Experience the future of professional English learning"}
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
            <h2 className="section-title">{isTranslated ? "我們的第一個可用課程" : "Our First Available Course"}</h2>
            <p className="section-subtitle">
              {isTranslated ? "與我們一起開始您的領域熟練度之旅，更多專業課程即將推出" : "Start your domain proficiency journey with us, more specialized courses coming soon"}
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
                
                <Link to="/auth" className="start-learning-btn">
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
            <h2 className="section-title">{isTranslated ? "需要自定義課程？" : "Need a Custom Course?"}</h2>
            <p className="section-subtitle">
              {isTranslated ? "與智能代理系統對話，描述您的具體需求，48小時內獲得個性化課程" : "与智能代理系统对话,描述您的具体需求,48小时内获得个性化课程"}
            </p>
            <p className="section-subtitle-english">
              {isTranslated ? "與我們的代理學習系統溝通，描述您的領域特定需求，並在48小時內獲得自定義課程" : "Communicate with our agentic learning system to describe your domain-specific needs and receive a custom course within 48 hours"}
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
            
            <form 
              action="https://formspree.io/f/xvgbolaz" 
              method="POST" 
              className="input-section"
              onSubmit={handleAgentSubmit}
            >
              <div className="input-container">
                <textarea 
                  name="course_request"
                  className="course-description-input"
                  placeholder="Describe your professional domain and specific learning objectives: your industry, role, target proficiency level, specific challenges you face in professional English communication..."
                  rows={4}
                  required
                  onChange={(e) => {
                    const charCount = e.target.value.length;
                    const charCountElement = document.querySelector('.char-count');
                    if (charCountElement) {
                      charCountElement.textContent = `${charCount}/1000`;
                    }
                  }}
                />
                <button 
                  type="submit"
                  className={`send-button ${isSubmitting ? 'submitting' : ''}`} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </button>
              </div>
              <div className="input-help">
                <span>Press Enter to send • Shift + Enter for new line</span>
                <span className="char-count">0/1000</span>
              </div>
              
              {/* Success Message */}
              {showSuccess && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <div className="success-content">
                    <h4>Request Submitted Successfully! 🎉</h4>
                    <p>Our AI agent is analyzing your requirements and will create a personalized course within 48 hours.</p>
                  </div>
                </div>
              )}
            </form>
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