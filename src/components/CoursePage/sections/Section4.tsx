import React, { useState } from 'react';
import { Play, AlertTriangle, CheckCircle, ArrowRight, RotateCcw } from 'lucide-react';
import './Section4.css';

interface Section4Props {
  onComplete: () => void;
}

const Section4: React.FC<Section4Props> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({
    toneMismatch: '',
    unclearBenefit: '',
    culturalMisalignment: ''
  });
  const [userRewrite, setUserRewrite] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [galleryCard, setGalleryCard] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const steps = [
    {
      title: "Intro Animation",
      content: "intro"
    },
    {
      title: "Guided Breakdown",
      content: "breakdown"
    },
    {
      title: "Spot the Problem Quiz",
      content: "quiz"
    },
    {
      title: "Rewrite Practice",
      content: "practice"
    },
    {
      title: "Before/After Gallery",
      content: "gallery"
    }
  ];

  const slides = [
    {
      title: "Tone Mismatch",
      description: "Formal, honorific language that sounds stiff to US audiences",
      example: "尊敬的客户，我们荣幸地为您提供优质服务",
      literal: "Respected customer, we are honored to provide you with quality service",
      problem: "Too formal and distant for US marketing"
    },
    {
      title: "Unclear Benefit",
      description: "Vague promises that don't clearly state what the customer gets",
      example: "我们的产品很好，值得信赖",
      literal: "Our product is very good, trustworthy",
      problem: "Doesn't specify what makes it good or why to trust it"
    },
    {
      title: "Cultural Misalignment",
      description: "References and values that don't resonate with US culture",
      example: "传承千年工艺，弘扬中华文化",
      literal: "Inheriting thousand-year craftsmanship, promoting Chinese culture",
      problem: "US audiences care more about personal benefits than cultural heritage"
    }
  ];

  const beforeAfterExamples = [
    {
      before: "天然滋养，深层修护，焕发青春光彩",
      after: "Natural repair for radiant skin",
      explanation: "Simplified from flowery language to direct benefit"
    },
    {
      before: "智能科技，让生活更简单",
      after: "Smart tech that simplifies your life",
      explanation: "Made more personal and action-oriented"
    },
    {
      before: "时尚设计，展现个性魅力",
      after: "Design that shows off your unique style",
      explanation: "Changed from abstract to concrete personal benefit"
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

  const handleQuizSubmit = () => {
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  const renderIntro = () => (
    <div className="content-card intro">
      <h3>Why Literal Translation Doesn't Work</h3>
      <p className="intro-description">
        Watch this short demonstration to see why word-for-word translation fails in US marketing contexts.
      </p>
      
      <div className="video-container">
        {!showVideo ? (
          <div className="video-placeholder" onClick={() => setShowVideo(true)}>
            <div className="play-button">
              <Play size={48} />
            </div>
            <p>Click to watch demonstration</p>
          </div>
        ) : (
          <div className="video-content">
            <div className="video-demo">
              <div className="demo-scene">
                <h4>Literal Translation</h4>
                <div className="mandarin-text">"天然滋养，深层修护"</div>
                <div className="literal-text">"Natural nourishment, deep repair"</div>
                <div className="problem-indicator">
                  <AlertTriangle size={20} />
                  <span>Sounds awkward and formal</span>
                </div>
              </div>
              
              <div className="demo-arrow">→</div>
              
              <div className="demo-scene">
                <h4>US Adapted Version</h4>
                <div className="adapted-text">"Natural repair that works deep"</div>
                <div className="benefit-indicator">
                  <CheckCircle size={20} />
                  <span>Clear, direct, and natural</span>
                </div>
              </div>
            </div>
            
            <div className="key-takeaway">
              <h4>Key Takeaway</h4>
              <p>US audiences prefer direct, conversational language that clearly states benefits. 
              Formal or flowery language often sounds insincere or confusing.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderBreakdown = () => (
    <div className="content-card breakdown">
      <h3>Guided Breakdown: Common Problems</h3>
      <p className="breakdown-intro">
        Let's examine the key issues that make literal translations ineffective in US marketing.
      </p>
      
      <div className="slide-carousel">
        <div className="slide-navigation">
          <button 
            className="nav-btn"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
          >
            ← Previous
          </button>
          <span className="slide-counter">{currentSlide + 1} of {slides.length}</span>
          <button 
            className="nav-btn"
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
          >
            Next →
          </button>
        </div>
        
        <div className="slide-content">
          <h4>{slides[currentSlide].title}</h4>
          <p className="slide-description">{slides[currentSlide].description}</p>
          
          <div className="example-display">
            <div className="mandarin-example">
              <h5>Mandarin Original:</h5>
              <div className="mandarin-text">{slides[currentSlide].example}</div>
            </div>
            
            <div className="literal-example">
              <h5>Literal Translation:</h5>
              <div className="literal-text">"{slides[currentSlide].literal}"</div>
            </div>
            
            <div className="problem-highlight">
              <h5>Why This Doesn't Work:</h5>
              <div className="problem-text">{slides[currentSlide].problem}</div>
            </div>
          </div>
        </div>
        
        <div className="slide-dots">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderQuiz = () => (
    <div className="content-card quiz">
      <h3>Spot the Problem Quiz</h3>
      <p className="quiz-intro">
        Test your understanding by identifying the specific issues in these marketing translations.
      </p>
      
      <div className="quiz-questions">
        <div className="quiz-question">
          <h4>Question 1: Tone Mismatch</h4>
          <div className="question-content">
            <p>"我们荣幸地为您提供优质服务"</p>
            <p className="literal">"We are honored to provide you with quality service"</p>
            <p>What's the main problem with this translation?</p>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={quizAnswers.toneMismatch}
              onChange={(e) => setQuizAnswers({...quizAnswers, toneMismatch: e.target.value})}
            />
          </div>
        </div>
        
        <div className="quiz-question">
          <h4>Question 2: Unclear Benefit</h4>
          <div className="question-content">
            <p>"我们的产品很好，值得信赖"</p>
            <p className="literal">"Our product is very good, trustworthy"</p>
            <p>What's missing from this translation?</p>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={quizAnswers.unclearBenefit}
              onChange={(e) => setQuizAnswers({...quizAnswers, unclearBenefit: e.target.value})}
            />
          </div>
        </div>
        
        <div className="quiz-question">
          <h4>Question 3: Cultural Misalignment</h4>
          <div className="question-content">
            <p>"传承千年工艺，弘扬中华文化"</p>
            <p className="literal">"Inheriting thousand-year craftsmanship, promoting Chinese culture"</p>
            <p>Why doesn't this resonate with US audiences?</p>
            <input
              type="text"
              placeholder="Enter your answer..."
              value={quizAnswers.culturalMisalignment}
              onChange={(e) => setQuizAnswers({...quizAnswers, culturalMisalignment: e.target.value})}
            />
          </div>
        </div>
      </div>
      
      <div className="quiz-actions">
        <button className="submit-btn" onClick={handleQuizSubmit}>
          Submit Answers
        </button>
        {showFeedback && (
          <div className="feedback-message">
            <CheckCircle size={20} />
            <span>Great job! You've identified the key problems.</span>
          </div>
        )}
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="content-card practice">
      <h3>Rewrite Practice</h3>
      <p className="practice-intro">
        Now practice rewriting a Mandarin tagline into effective US English copy.
      </p>
      
      <div className="practice-content">
        <div className="original-tagline">
          <h4>Original Mandarin Tagline:</h4>
          <div className="mandarin-text">"天然成分，深层滋养，焕发青春光彩"</div>
          <div className="literal-text">Literal: "Natural ingredients, deep nourishment, radiate youthful glow"</div>
        </div>
        
        <div className="rewrite-section">
          <h4>Your US English Version:</h4>
          <textarea
            placeholder="Rewrite this tagline for US audiences. Focus on being direct, conversational, and benefit-focused..."
            value={userRewrite}
            onChange={(e) => setUserRewrite(e.target.value)}
            rows={4}
          />
          
          <div className="rewrite-tips">
            <h5>💡 Rewrite Tips:</h5>
            <ul>
              <li>Start with the main benefit</li>
              <li>Use active, energetic language</li>
              <li>Keep it conversational</li>
              <li>Focus on what the customer gets</li>
            </ul>
          </div>
        </div>
        
        <div className="ai-feedback">
          <h4>AI Feedback & Hints</h4>
          <div className="feedback-suggestions">
            <div className="suggestion">
              <strong>Try making the benefit more direct:</strong>
              <p>Instead of "deep nourishment," say "nourishes deep into your skin"</p>
            </div>
            <div className="suggestion">
              <strong>Avoid formal language:</strong>
              <p>Replace "radiate youthful glow" with "look younger and brighter"</p>
            </div>
            <div className="suggestion">
              <strong>Make it personal:</strong>
              <p>Use "you" and "your" to connect directly with the customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="content-card gallery">
      <h3>Before/After Gallery</h3>
      <p className="gallery-intro">
        Compare professional rewrites with literal translations. Flip the cards to see the transformation.
      </p>
      
      <div className="gallery-container">
        <div className="gallery-card">
          <div className="card-header">
            <h4>Example {galleryCard + 1}</h4>
            <button 
              className="flip-btn"
              onClick={() => setGalleryCard((galleryCard + 1) % beforeAfterExamples.length)}
            >
              <RotateCcw size={20} />
              Next Example
            </button>
          </div>
          
          <div className="card-content">
            <div className="before-section">
              <h5>Before (Literal):</h5>
              <div className="before-text">{beforeAfterExamples[galleryCard].before}</div>
              <p className="before-label">Word-for-word translation</p>
            </div>
            
            <div className="arrow-separator">→</div>
            
            <div className="after-section">
              <h5>After (US Adapted):</h5>
              <div className="after-text">{beforeAfterExamples[galleryCard].after}</div>
              <p className="after-label">Professional US marketing copy</p>
            </div>
          </div>
          
          <div className="transformation-explanation">
            <h5>What Changed:</h5>
            <p>{beforeAfterExamples[galleryCard].explanation}</p>
          </div>
        </div>
        
        <div className="gallery-navigation">
          <div className="gallery-dots">
            {beforeAfterExamples.map((_, index) => (
              <div 
                key={index}
                className={`gallery-dot ${index === galleryCard ? 'active' : ''}`}
                onClick={() => setGalleryCard(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case 'intro':
        return renderIntro();
      case 'breakdown':
        return renderBreakdown();
      case 'quiz':
        return renderQuiz();
      case 'practice':
        return renderPractice();
      case 'gallery':
        return renderGallery();
      default:
        return renderIntro();
    }
  };

  if (showResults) {
    return (
      <div className="content-card results">
        <div className="results-header">
          <CheckCircle size={48} className="success-icon" />
          <h2>Section 4 Complete!</h2>
          <p>Congratulations! You've mastered the interactive module and completed the course!</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          Course Complete!
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

export default Section4;
