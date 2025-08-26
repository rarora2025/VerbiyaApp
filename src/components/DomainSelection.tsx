import React, { useState, useEffect } from 'react';
import { ArrowRight, Dna, BarChart3, FlaskConical, Sparkles, Users, Globe, Award } from 'lucide-react';
import logo from '../assets/logo.png';
import './DomainSelection.css';

interface DomainCard {
  id: string;
  title: string;
  titleChinese: string;
  description: string;
  icon: React.ReactNode;
  keyTopics: string[];
  badge: string;
  color: string;
}

const DomainSelection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const domains: DomainCard[] = [
    {
      id: 'biotechnology',
      title: 'Biotechnology',
      titleChinese: '生物技术',
      description: 'Master genetic engineering, protein expression, and cutting-edge biotechnology terminology with industry experts.',
      icon: <Dna size={36} />,
      keyTopics: ['Genetic Engineering', 'Protein Expression', 'Cell Culture', 'CRISPR Technology'],
      badge: 'Popular',
      color: 'var(--accent-blue)'
    },
    {
      id: 'business',
      title: 'Business English',
      titleChinese: '商业英语',
      description: 'Learn financial analysis, contract negotiation, and professional business communication for global success.',
      icon: <BarChart3 size={36} />,
      keyTopics: ['Financial Analysis', 'Contract Negotiation', 'Market Research', 'Strategic Planning'],
      badge: 'Trending',
      color: 'var(--accent-purple)'
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      titleChinese: '化学',
      description: 'Understand laboratory procedures, analytical methods, and chemical terminology for research and industry.',
      icon: <FlaskConical size={36} />,
      keyTopics: ['Organic Chemistry', 'Analytical Methods', 'Lab Equipment', 'Chemical Safety'],
      badge: 'New',
      color: 'var(--primary-green)'
    }
  ];

  const handleStartLearning = (domainId: string) => {
    // In a real app, this would navigate to the specific learning path
    console.log(`Starting learning for ${domainId}`);
    // For now, just show an alert
    alert(`Starting ${domains.find(d => d.id === domainId)?.title} learning path!`);
  };

  return (
    <div className="domain-selection">
      {/* Animated Background Elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container">
        {/* Header */}
        <header className={`domain-header ${isVisible ? 'fade-in' : ''}`}>
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

        {/* Main Content */}
        <main className={`domain-main ${isVisible ? 'slide-up' : ''}`}>
          <div className="domain-intro">
            <div className="intro-badge">
              <Sparkles size={20} />
              <span>Choose Your Path</span>
            </div>
            
            <h1 className="domain-title">Choose Your Professional Domain</h1>
            <p className="domain-subtitle">
              Select a field to begin your specialized English learning journey
            </p>
            
            <div className="domain-stats">
              <div className="stat-item">
                <Users size={24} />
                <span>10,000+ Learners</span>
              </div>
              <div className="stat-item">
                <Globe size={24} />
                <span>50+ Countries</span>
              </div>
              <div className="stat-item">
                <Award size={24} />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>

          <div className="domains-grid">
            {domains.map((domain, index) => (
              <div 
                key={domain.id} 
                className={`domain-card domain-card-${domain.id} ${isVisible ? `fade-in-delay-${index + 1}` : ''}`}
                style={{ '--accent-color': domain.color } as React.CSSProperties}
              >
                <div className="domain-card-header">
                  <div className="domain-icon" style={{ background: domain.color }}>
                    {domain.icon}
                  </div>
                  <div className="domain-title-section">
                    <h2 className="domain-card-title">{domain.title}</h2>
                    <p className="domain-card-chinese">{domain.titleChinese}</p>
                  </div>
                  <div className="domain-badge" style={{ background: domain.color }}>
                    {domain.badge}
                  </div>
                </div>
                
                <p className="domain-description">{domain.description}</p>
                
                <div className="key-topics-section">
                  <h3 className="key-topics-label">Key Topics:</h3>
                  <div className="key-topics-tags">
                    {domain.keyTopics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="start-learning-btn"
                  onClick={() => handleStartLearning(domain.id)}
                  style={{ background: domain.color }}
                >
                  <span>Start Learning</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DomainSelection; 