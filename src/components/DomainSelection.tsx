import React from 'react';
import { ArrowRight, Dna, BarChart3, FlaskConical } from 'lucide-react';
import logo from '../assets/logo.png';
import './DomainSelection.css';

interface DomainCard {
  id: string;
  title: string;
  titleChinese: string;
  description: string;
  icon: React.ReactNode;
  keyTopics: string[];
}

const DomainSelection: React.FC = () => {

  const domains: DomainCard[] = [
    {
      id: 'biotechnology',
      title: 'Biotechnology',
      titleChinese: '生物技术',
      description: 'Master genetic engineering, protein expression, and cutting-edge biotechnology terminology.',
      icon: <Dna size={32} />,
      keyTopics: ['Genetic Engineering', 'Protein Expression', 'Cell Culture']
    },
    {
      id: 'business',
      title: 'Business English',
      titleChinese: '商业英语',
      description: 'Learn financial analysis, contract negotiation, and professional business communication.',
      icon: <BarChart3 size={32} />,
      keyTopics: ['Financial Analysis', 'Contract Negotiation', 'Market Research']
    },
    {
      id: 'chemistry',
      title: 'Chemistry',
      titleChinese: '化学',
      description: 'Understand laboratory procedures, analytical methods, and chemical terminology.',
      icon: <FlaskConical size={32} />,
      keyTopics: ['Organic Chemistry', 'Analytical Methods', 'Lab Equipment']
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
      <div className="container">
        {/* Header */}
        <header className="domain-header">
          <div className="logo">
            <img src={logo} alt="Verbiya Logo" className="logo-image" />
          </div>
        </header>

        {/* Main Content */}
        <main className="domain-main">
          <div className="domain-intro">
            <h1 className="domain-title">Choose Your Professional Domain</h1>
            <p className="domain-subtitle">
              Select a field to begin your specialized English learning journey
            </p>
          </div>

          <div className="domains-grid">
            {domains.map((domain) => (
              <div key={domain.id} className="domain-card">
                <div className="domain-card-header">
                  <div className="domain-icon">
                    {domain.icon}
                  </div>
                  <div className="domain-title-section">
                    <h2 className="domain-card-title">{domain.title}</h2>
                    <p className="domain-card-chinese">{domain.titleChinese}</p>
                  </div>
                </div>
                
                <p className="domain-description">{domain.description}</p>
                
                <div className="key-topics-section">
                  <h3 className="key-topics-label">Key Topics:</h3>
                  <div className="key-topics-tags">
                    {domain.keyTopics.map((topic, index) => (
                      <span key={index} className="topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="start-learning-btn"
                  onClick={() => handleStartLearning(domain.id)}
                >
                  Start Learning
                  <ArrowRight size={16} />
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