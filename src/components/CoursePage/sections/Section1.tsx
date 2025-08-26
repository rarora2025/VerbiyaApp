import React, { useState } from 'react';
import { BarChart3, Users, ShoppingCart, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import './Section1.css';

interface Section1Props {
  onComplete: () => void;
}

const Section1: React.FC<Section1Props> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [exerciseAnswers, setExerciseAnswers] = useState({
    tagline1: '',
    tagline2: '',
    tagline3: '',
    translation1: '',
    translation2: '',
    translation3: '',
    analysis1: '',
    analysis2: '',
    analysis3: '',
    reflection: ''
  });
  const [showResults, setShowResults] = useState(false);

  // Pre-generated Mandarin taglines for the exercise
  const mandarinTaglines = [
    {
      original: "健康美味，家的味道",
      literal: "Healthy and delicious, the taste of home",
      category: "Food & Beverage"
    },
    {
      original: "科技改变生活，智慧引领未来",
      literal: "Technology changes life, wisdom leads the future",
      category: "Technology"
    },
    {
      original: "美丽从内而外，自信由心而生",
      literal: "Beauty from inside out, confidence born from heart",
      category: "Beauty & Wellness"
    }
  ];

  const steps = [
    {
      title: "US Market Analytics",
      icon: <BarChart3 size={32} />,
      content: "market-analytics"
    },
    {
      title: "Demographics & Behavior",
      icon: <Users size={32} />,
      content: "demographics"
    },
    {
      title: "UI Comparison",
      icon: <Globe size={32} />,
      content: "ui-comparison"
    },
    {
      title: "Translation Exercise",
      icon: <ShoppingCart size={32} />,
      content: "exercise"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleComplete = () => {
    onComplete();
  };

  const renderMarketAnalytics = () => (
    <div className="content-card market-analytics">
      <h3>Top US E-commerce Categories</h3>
      <div className="analytics-grid">
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '80%' }}>
            <span>Electronics</span>
          </div>
          <p>32%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '65%' }}>
            <span>Fashion</span>
          </div>
          <p>28%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '45%' }}>
            <span>Home & Garden</span>
          </div>
          <p>18%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '35%' }}>
            <span>Beauty</span>
          </div>
          <p>15%</p>
        </div>
      </div>
      
      <div className="market-insights">
        <h4>Key Insights</h4>
        <ul>
          <li>Amazon dominates 38% of US e-commerce</li>
          <li>Mobile shopping accounts for 72% of transactions</li>
          <li>Social commerce growing 25% annually</li>
        </ul>
      </div>
    </div>
  );

  const renderDemographics = () => (
    <div className="content-card demographics">
      <h3>US Buyer Demographics</h3>
      <div className="demographics-grid">
        <div className="demo-card">
          <h4>Age Segments</h4>
          <div className="age-chart">
            <div className="age-segment">
              <span>18-24</span>
              <div className="age-bar" style={{ width: '25%' }}></div>
            </div>
            <div className="age-segment">
              <span>25-34</span>
              <div className="age-bar" style={{ width: '35%' }}></div>
            </div>
            <div className="age-segment">
              <span>35-44</span>
              <div className="age-bar" style={{ width: '30%' }}></div>
            </div>
            <div className="age-segment">
              <span>45+</span>
              <div className="age-bar" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="demo-card">
          <h4>Spending Habits</h4>
          <ul>
            <li>Average order value: $87</li>
            <li>Most active: Tuesday 2-4 PM</li>
            <li>Preferred payment: Credit cards (65%)</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderUIComparison = () => (
    <div className="content-card ui-comparison">
      <h3>Digital UI Comparison: US vs China</h3>
      <div className="ui-grid">
        <div className="ui-card">
          <h4>Facebook vs WeChat</h4>
          <div className="ui-features">
            <div className="feature-item">
              <span className="feature-label">Facebook:</span>
              <span className="feature-desc">Clean, minimal, ad-focused</span>
            </div>
            <div className="feature-item">
              <span className="feature-label">WeChat:</span>
              <span className="feature-desc">Feature-rich, integrated ecosystem</span>
            </div>
          </div>
        </div>
        
        <div className="ui-card">
          <h4>Instagram vs Xiaohongshu</h4>
          <div className="ui-features">
            <div className="feature-item">
              <span className="feature-label">Instagram:</span>
              <span className="feature-desc">Visual storytelling, hashtags</span>
            </div>
            <div className="feature-item">
              <span className="feature-label">Xiaohongshu:</span>
              <span className="feature-desc">Lifestyle content, shopping integration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="content-card exercise">
      <h3>Translation Exercise</h3>
      <p className="exercise-instruction">
        Analyze these 3 Mandarin marketing taglines. Translate literally, then identify why they wouldn't "sell" in the United States.
      </p>
      
      <div className="exercise-form">
        {mandarinTaglines.map((tagline, index) => (
          <div key={index} className="exercise-item">
            <h4>Tagline {index + 1}: {tagline.category}</h4>
            <div className="tagline-display">
              <div className="mandarin-text">{tagline.original}</div>
              <div className="literal-translation">Literal: "{tagline.literal}"</div>
            </div>
            <textarea
              placeholder="Why wouldn't this sell in the US? Consider cultural differences, tone, and messaging style."
              value={exerciseAnswers[`analysis${index + 1}` as keyof typeof exerciseAnswers]}
              onChange={(e) => setExerciseAnswers({
                ...exerciseAnswers, 
                [`analysis${index + 1}`]: e.target.value
              })}
            />
          </div>
        ))}
        
        <div className="reflection-section">
          <h4>Reflection Question</h4>
          <textarea
            placeholder="What gets lost or distorted when we translate word-for-word? How does this affect marketing effectiveness?"
            value={exerciseAnswers.reflection}
            onChange={(e) => setExerciseAnswers({...exerciseAnswers, reflection: e.target.value})}
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case 'market-analytics':
        return renderMarketAnalytics();
      case 'demographics':
        return renderDemographics();
      case 'ui-comparison':
        return renderUIComparison();
      case 'exercise':
        return renderExercise();
      default:
        return renderMarketAnalytics();
    }
  };

  if (showResults) {
    return (
      <div className="content-card results">
        <div className="results-header">
          <CheckCircle size={48} className="success-icon" />
          <h2>Section 1 Complete!</h2>
          <p>Great job understanding the US market and translation challenges!</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          Continue to Section 2
          <ArrowRight size={20} />
        </button>
      </div>
    );
  }

  return (
    <div className="section-content">
      <div className="step-indicator">
        <div className="step-dots">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`step-dot ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
            />
          ))}
        </div>
        <h2 className="step-title">{steps[currentStep].title}</h2>
      </div>
      
      {renderContent()}
      
      <div className="step-navigation">
        <button 
          className="nav-btn next-btn"
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? 'Complete Section' : 'Next Step'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Section1;
