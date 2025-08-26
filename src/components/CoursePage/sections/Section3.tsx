import React, { useState } from 'react';
import { ArrowRight, ArrowDown, CheckCircle, Zap, RefreshCw, Lightbulb } from 'lucide-react';
import './Section3.css';

interface Section3Props {
  onComplete: () => void;
}

const Section3: React.FC<Section3Props> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userRewrites, setUserRewrites] = useState({
    tech: ['', '', ''],
    fashion: ['', '', ''],
    food: ['', '', ''],
    beauty: ['', '', ''],
    automotive: ['', '', '']
  });
  const [showResults, setShowResults] = useState(false);

  const steps = [
    {
      title: "Pipeline Overview",
      content: "pipeline"
    },
    {
      title: "Live Demo",
      content: "demo"
    },
    {
      title: "Industry Practice",
      content: "practice"
    }
  ];

  const liveDemo = {
    mandarin: "健康美味，家的味道",
    literal: "Healthy and delicious, the taste of home",
    adapted: "Wholesome flavor that feels like home"
  };

  const industryExamples = [
    {
      industry: "Tech",
      mandarin: "智能科技，让生活更简单",
      literal: "Smart technology makes life simpler",
      category: "tech"
    },
    {
      industry: "Fashion",
      mandarin: "时尚设计，展现个性魅力",
      literal: "Fashion design, show personality charm",
      category: "fashion"
    },
    {
      industry: "Food & Beverage",
      mandarin: "新鲜食材，传统工艺",
      literal: "Fresh ingredients, traditional craftsmanship",
      category: "food"
    },
    {
      industry: "Beauty",
      mandarin: "天然成分，深层滋养",
      literal: "Natural ingredients, deep nourishment",
      category: "beauty"
    },
    {
      industry: "Automotive",
      mandarin: "安全驾驶，舒适体验",
      literal: "Safe driving, comfortable experience",
      category: "automotive"
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

  const updateRewrite = (industry: string, index: number, value: string) => {
    setUserRewrites({
      ...userRewrites,
      [industry]: userRewrites[industry as keyof typeof userRewrites].map((item, i) => 
        i === index ? value : item
      )
    });
  };

  const renderPipeline = () => (
    <div className="content-card pipeline">
      <h3>Mandarin Input → English Output Pipeline</h3>
      <p className="pipeline-intro">
        Learn how rearranging, expanding, or swapping imagery in Mandarin leads to more natural US copy and a westernized approach.
      </p>
      
      <div className="pipeline-flow">
        <div className="pipeline-stage">
          <div className="stage-icon">
            <Zap size={24} />
          </div>
          <h4>Mandarin Input</h4>
          <p>Original cultural context and phrasing</p>
        </div>
        
        <div className="pipeline-arrow">
          <ArrowRight size={24} />
        </div>
        
        <div className="pipeline-stage">
          <div className="stage-icon">
            <RefreshCw size={24} />
          </div>
          <h4>Deconstruction</h4>
          <p>Break down into core benefits and emotions</p>
        </div>
        
        <div className="pipeline-arrow">
          <ArrowRight size={24} />
        </div>
        
        <div className="pipeline-stage">
          <div className="stage-icon">
            <Lightbulb size={24} />
          </div>
          <h4>Westernization</h4>
          <p>Rebuild with US cultural preferences</p>
        </div>
        
        <div className="pipeline-arrow">
          <ArrowRight size={24} />
        </div>
        
        <div className="pipeline-stage">
          <div className="stage-icon">
            <CheckCircle size={24} />
          </div>
          <h4>English Output</h4>
          <p>Natural, effective US marketing copy</p>
        </div>
      </div>
      
      <div className="pipeline-insights">
        <h4>Key Transformation Principles</h4>
        <div className="insights-grid">
          <div className="insight-item">
            <h5>Order Rearrangement</h5>
            <p>Move the most important benefit to the front</p>
          </div>
          <div className="insight-item">
            <h5>Imagery Expansion</h5>
            <p>Add concrete details that resonate with US audiences</p>
          </div>
          <div className="insight-item">
            <h5>Tone Softening</h5>
            <p>Reduce formal language, increase conversational appeal</p>
          </div>
          <div className="insight-item">
            <h5>Emotional Resonance</h5>
            <p>Connect with US cultural values and aspirations</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLiveDemo = () => (
    <div className="content-card demo">
      <h3>Live Demo: From Mandarin to US English</h3>
      <p className="demo-intro">
        Watch how we transform a literal translation into effective US marketing copy.
      </p>
      
      <div className="demo-flow">
        <div className="demo-step">
          <h4>Original Mandarin</h4>
          <div className="mandarin-text">{liveDemo.mandarin}</div>
          <p className="step-label">Cultural context</p>
        </div>
        
        <div className="demo-arrow">
          <ArrowDown size={24} />
        </div>
        
        <div className="demo-step">
          <h4>Literal Translation</h4>
          <div className="literal-text">"{liveDemo.literal}"</div>
          <p className="step-label">Word-for-word</p>
        </div>
        
        <div className="demo-arrow">
          <ArrowDown size={24} />
        </div>
        
        <div className="demo-step">
          <h4>US Adapted Version</h4>
          <div className="adapted-text">"{liveDemo.adapted}"</div>
          <p className="step-label">Westernized approach</p>
        </div>
      </div>
      
      <div className="transformation-analysis">
        <h4>What Changed & Why</h4>
        <div className="analysis-grid">
          <div className="analysis-item">
            <h5>Order Swap</h5>
            <p><strong>Before:</strong> "Healthy and delicious, the taste of home"<br/>
            <strong>After:</strong> "Wholesome flavor that feels like home"</p>
            <p className="explanation">Moved the benefit (wholesome flavor) to the front for immediate impact</p>
          </div>
          
          <div className="analysis-item">
            <h5>Imagery Enhancement</h5>
            <p><strong>Before:</strong> "taste of home"<br/>
            <strong>After:</strong> "feels like home"</p>
            <p className="explanation">Changed from literal taste to emotional feeling for stronger connection</p>
          </div>
          
          <div className="analysis-item">
            <h5>Language Softening</h5>
            <p><strong>Before:</strong> "Healthy and delicious"<br/>
            <strong>After:</strong> "Wholesome flavor"</p>
            <p className="explanation">Replaced formal adjectives with warm, approachable language</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="content-card practice">
      <h3>Industry Practice: Rewrite for US Social Media</h3>
      <p className="practice-intro">
        Practice rewriting these Mandarin lines from different industries for US social media. Create 2-3 versions each.
      </p>
      
      <div className="industry-exercises">
        {industryExamples.map((example, index) => (
          <div key={index} className="industry-exercise">
            <div className="exercise-header">
              <h4>{example.industry}</h4>
              <div className="original-content">
                <div className="mandarin-text">{example.mandarin}</div>
                <div className="literal-translation">Literal: "{example.literal}"</div>
              </div>
            </div>
            
            <div className="rewrite-section">
              <h5>Your US Social Media Versions:</h5>
              <div className="rewrite-inputs">
                {[0, 1, 2].map((inputIndex) => (
                  <input
                    key={inputIndex}
                    type="text"
                    placeholder={`Version ${inputIndex + 1}...`}
                    value={userRewrites[example.category as keyof typeof userRewrites][inputIndex]}
                    onChange={(e) => updateRewrite(example.category, inputIndex, e.target.value)}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="practice-tips">
        <h4>💡 Tips for Effective US Copy</h4>
        <ul>
          <li>Start with the main benefit or solution</li>
          <li>Use active, energetic language</li>
          <li>Keep it conversational and friendly</li>
          <li>Focus on what the customer gets, not what you offer</li>
          <li>Use US cultural references when appropriate</li>
        </ul>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case 'pipeline':
        return renderPipeline();
      case 'demo':
        return renderLiveDemo();
      case 'practice':
        return renderPractice();
      default:
        return renderPipeline();
    }
  };

  if (showResults) {
    return (
      <div className="content-card results">
        <div className="results-header">
          <CheckCircle size={48} className="success-icon" />
          <h2>Section 3 Complete!</h2>
          <p>Excellent work mastering the input-to-output transformation process!</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          Continue to Section 4
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

export default Section3;
