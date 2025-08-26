import React, { useState } from 'react';
import { Target, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import './Section2.css';

interface Section2Props {
  onComplete: () => void;
}

const Section2: React.FC<Section2Props> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [frameworkAnswers, setFrameworkAnswers] = useState({
    coreBenefit: '',
    emotionalHook: '',
    tone: '',
    skincareAnalysis: {
      benefitWords: '',
      emotionalWords: '',
      westernizedPhrase: ''
    }
  });
  const [showResults, setShowResults] = useState(false);

  const steps = [
    {
      title: "Framework Introduction",
      content: "framework"
    },
    {
      title: "Core Benefit Analysis",
      content: "core-benefit"
    },
    {
      title: "Emotional Hook Identification",
      content: "emotional-hook"
    },
    {
      title: "Tone Selection",
      content: "tone"
    },
    {
      title: "Skincare Slogan Exercise",
      content: "exercise"
    }
  ];

  const skincareSlogan = {
    original: "天然滋养，深层修护，焕发青春光彩",
    literal: "Natural nourishment, deep repair, radiate youthful glow",
    category: "Skincare"
  };

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

  const renderFramework = () => (
    <div className="content-card framework">
      <h3>Deconstructing Mandarin Taglines</h3>
      <p className="framework-intro">
        Learn how to "deconstruct" a Mandarin written tagline into core ideas and western emotional triggers before rewriting.
      </p>
      
      <div className="framework-steps">
        <div className="framework-step">
          <div className="step-icon">
            <Target size={24} />
          </div>
          <div className="step-content">
            <h4>STEP 1: Identify Core Benefit</h4>
            <p>What is being promised by your company here? (e.g., speed, beauty, safety, convenience)</p>
          </div>
        </div>
        
        <div className="framework-step">
          <div className="step-icon">
            <Heart size={24} />
          </div>
          <div className="step-content">
            <h4>STEP 2: Identify Emotional Hook</h4>
            <p>What emotional response are you trying to trigger? (e.g., pride, trust, exclusivity, urgency)</p>
          </div>
        </div>
        
        <div className="framework-step">
          <div className="step-icon">
            <Zap size={24} />
          </div>
          <div className="step-content">
            <h4>STEP 3: Choose Correct Tone</h4>
            <p>What tone matches your target audience? (e.g., playful, problem-solving, authoritative, friendly)</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCoreBenefit = () => (
    <div className="content-card core-benefit">
      <h3>Core Benefit Analysis</h3>
      <p className="step-description">
        Let's practice identifying the core benefit in marketing messages. The core benefit is what your product/service actually delivers to the customer.
      </p>
      
      <div className="examples-grid">
        <div className="example-card">
          <h4>Example 1: Technology</h4>
          <p className="example-text">"智能科技，让生活更简单"</p>
          <p className="example-literal">"Smart technology makes life simpler"</p>
          <div className="benefit-analysis">
            <strong>Core Benefit:</strong> Simplicity & Convenience
          </div>
        </div>
        
        <div className="example-card">
          <h4>Example 2: Food & Beverage</h4>
          <p className="example-text">"新鲜食材，健康美味"</p>
          <p className="example-literal">"Fresh ingredients, healthy and delicious"</p>
          <div className="benefit-analysis">
            <strong>Core Benefit:</strong> Health & Taste
          </div>
        </div>
      </div>
      
      <div className="practice-section">
        <h4>Practice: Identify Core Benefits</h4>
        <p>What are the core benefits in these taglines?</p>
        <div className="practice-examples">
          <div className="practice-item">
            <p>"快速配送，准时到达" (Fast delivery, arrive on time)</p>
            <input
              type="text"
              placeholder="Enter the core benefit..."
              value={frameworkAnswers.coreBenefit}
              onChange={(e) => setFrameworkAnswers({...frameworkAnswers, coreBenefit: e.target.value})}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmotionalHook = () => (
    <div className="content-card emotional-hook">
      <h3>Emotional Hook Identification</h3>
      <p className="step-description">
        Emotional hooks are the psychological triggers that make people want to take action. Different cultures respond to different emotional appeals.
      </p>
      
      <div className="emotional-grid">
        <div className="emotion-card">
          <div className="emotion-icon">🏆</div>
          <h4>Pride & Achievement</h4>
          <p>Making customers feel accomplished and superior</p>
          <div className="example">"成为最好的自己" (Become your best self)</div>
        </div>
        
        <div className="emotion-card">
          <div className="emotion-icon">🤝</div>
          <h4>Trust & Security</h4>
          <p>Building confidence and reducing anxiety</p>
          <div className="example">"值得信赖的选择" (A trustworthy choice)</div>
        </div>
        
        <div className="emotion-card">
          <div className="emotion-icon">⚡</div>
          <h4>Urgency & FOMO</h4>
          <p>Creating immediate action through scarcity</p>
          <div className="example">"限时优惠，错过不再" (Limited time offer, miss it and it's gone)</div>
        </div>
      </div>
      
      <div className="practice-section">
        <h4>Practice: Identify Emotional Hooks</h4>
        <p>What emotional response is this tagline trying to trigger?</p>
        <div className="practice-examples">
          <div className="practice-item">
            <p>"专属定制，与众不同" (Exclusive customization, different from others)</p>
            <input
              type="text"
              placeholder="Enter the emotional hook..."
              value={frameworkAnswers.emotionalHook}
              onChange={(e) => setFrameworkAnswers({...frameworkAnswers, emotionalHook: e.target.value})}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderTone = () => (
    <div className="content-card tone">
      <h3>Tone Selection</h3>
      <p className="step-description">
        The tone of your message should match your target audience and brand personality. US audiences often prefer direct, conversational tones.
      </p>
      
      <div className="tone-options">
        <div className="tone-option">
          <h4>Playful & Fun</h4>
          <p>Light-hearted, humorous, engaging</p>
          <div className="tone-example">"Let's make magic happen!"</div>
        </div>
        
        <div className="tone-option">
          <h4>Problem-Solving</h4>
          <p>Direct, solution-focused, helpful</p>
          <div className="tone-example">"Solve your biggest challenge today"</div>
        </div>
        
        <div className="tone-option">
          <h4>Authoritative</h4>
          <p>Confident, expert, trustworthy</p>
          <div className="tone-example">"The proven solution professionals choose"</div>
        </div>
        
        <div className="tone-option">
          <h4>Friendly & Approachable</h4>
          <p>Warm, welcoming, personal</p>
          <div className="tone-example">"We're here to help you succeed"</div>
        </div>
      </div>
      
      <div className="practice-section">
        <h4>Practice: Choose the Right Tone</h4>
        <p>For a skincare product targeting young professionals, which tone would be most effective?</p>
        <div className="practice-examples">
          <div className="practice-item">
            <select
              value={frameworkAnswers.tone}
              onChange={(e) => setFrameworkAnswers({...frameworkAnswers, tone: e.target.value})}
            >
              <option value="">Select a tone...</option>
              <option value="playful">Playful & Fun</option>
              <option value="problem-solving">Problem-Solving</option>
              <option value="authoritative">Authoritative</option>
              <option value="friendly">Friendly & Approachable</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="content-card exercise">
      <h3>Skincare Slogan Exercise</h3>
      <p className="exercise-instruction">
        Now let's apply our framework to a real Mandarin skincare slogan. Break it down step by step.
      </p>
      
      <div className="slogan-display">
        <div className="original-slogan">
          <h4>Original Mandarin Slogan:</h4>
          <div className="mandarin-text">{skincareSlogan.original}</div>
          <div className="literal-translation">Literal: "{skincareSlogan.literal}"</div>
        </div>
      </div>
      
      <div className="framework-application">
        <h4>Apply the Framework:</h4>
        
        <div className="framework-step">
          <h5>STEP 1: Mark the Benefiting Words</h5>
          <p>Which words describe what the product does for the customer?</p>
          <input
            type="text"
            placeholder="e.g., nourish, repair, radiate..."
            value={frameworkAnswers.skincareAnalysis.benefitWords}
            onChange={(e) => setFrameworkAnswers({
              ...frameworkAnswers,
              skincareAnalysis: {
                ...frameworkAnswers.skincareAnalysis,
                benefitWords: e.target.value
              }
            })}
          />
        </div>
        
        <div className="framework-step">
          <h5>STEP 2: Mark the Emotional Words</h5>
          <p>Which words create emotional appeal?</p>
          <input
            type="text"
            placeholder="e.g., natural, youthful, glow..."
            value={frameworkAnswers.skincareAnalysis.emotionalWords}
            onChange={(e) => setFrameworkAnswers({
              ...frameworkAnswers,
              skincareAnalysis: {
                ...frameworkAnswers.skincareAnalysis,
                emotionalWords: e.target.value
              }
            })}
          />
        </div>
        
        <div className="framework-step">
          <h5>STEP 3: Rebuild into Westernized English</h5>
          <p>Create a short, direct phrase for US audiences:</p>
          <input
            type="text"
            placeholder="e.g., 'Natural repair for radiant skin'"
            value={frameworkAnswers.skincareAnalysis.westernizedPhrase}
            onChange={(e) => setFrameworkAnswers({
              ...frameworkAnswers,
              skincareAnalysis: {
                ...frameworkAnswers.skincareAnalysis,
                westernizedPhrase: e.target.value
              }
            })}
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case 'framework':
        return renderFramework();
      case 'core-benefit':
        return renderCoreBenefit();
      case 'emotional-hook':
        return renderEmotionalHook();
      case 'tone':
        return renderTone();
      case 'exercise':
        return renderExercise();
      default:
        return renderFramework();
    }
  };

  if (showResults) {
    return (
      <div className="content-card results">
        <div className="results-header">
          <CheckCircle size={48} className="success-icon" />
          <h2>Section 2 Complete!</h2>
          <p>Excellent work mastering the framework for deconstructing Mandarin taglines!</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          Continue to Section 3
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

export default Section2;
