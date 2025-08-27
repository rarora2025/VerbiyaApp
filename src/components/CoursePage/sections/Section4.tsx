import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import './Section4.css';

interface Section4Props {
  onComplete: () => void;
  isTranslated: boolean;
}

const Section4: React.FC<Section4Props> = ({ onComplete, isTranslated }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userRewrite, setUserRewrite] = useState('');
  const [showResults, setShowResults] = useState(false);

  const steps = [
    {
      title: isTranslated ? "介紹動畫" : "Intro Animation",
      content: "intro"
    },
    {
      title: isTranslated ? "引導分解" : "Guided Breakdown",
      content: "breakdown"
    },
    {
      title: isTranslated ? "重寫練習" : "Rewrite Practice",
      content: "practice"
    },
    {
      title: isTranslated ? "前後對比" : "Before/After Gallery",
      content: "gallery"
    }
  ];

  const mandarinTagline = {
    original: "天然滋养，深层修护，焕发青春光彩",
    literal: "Natural nourishment, deep repair, radiate youthful glow",
    category: isTranslated ? "护肤产品" : "Skincare Product"
  };

  const professionalRewrites = [
    "Natural repair for radiant skin",
    "Deep nourishment that brings out your glow",
    "Revive your skin's natural radiance"
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

  const renderIntro = () => (
    <div className="content-card intro">
      <h3>{isTranslated ? "介紹動畫" : "Intro Animation"}</h3>
      <p className="intro-description">
        {isTranslated 
          ? "觀看一個簡短的視頻，展示中文到英文的字面翻譯以及為什麼它在美國語境中不起作用。"
          : "Short video showing a literal Mandarin to English translation and why it doesn't work in a US context."
        }
      </p>
      
      <div className="video-container">
        <div className="video-placeholder">
          <Play size={48} className="play-icon" />
          <p>{isTranslated ? "點擊播放介紹視頻" : "Click to play intro video"}</p>
        </div>
      </div>
      
      <div className="intro-content">
        <h4>{isTranslated ? "視頻要點：" : "Video Key Points:"}</h4>
        <ul>
          <li>{isTranslated ? "字面翻譯的問題" : "Problems with literal translation"}</li>
          <li>{isTranslated ? "語調不匹配" : "Tone mismatch"}</li>
          <li>{isTranslated ? "文化差異" : "Cultural differences"}</li>
          <li>{isTranslated ? "美國受眾的期望" : "US audience expectations"}</li>
        </ul>
      </div>
    </div>
  );

  const renderBreakdown = () => (
    <div className="content-card breakdown">
      <h3>{isTranslated ? "引導分解" : "Guided Breakdown"}</h3>
      <p className="breakdown-description">
        {isTranslated 
          ? "幻燈片輪播突出顯示關鍵問題：語調不匹配、利益不明確、文化錯位。每個部分都有一個快速的「發現問題」測驗。"
          : "Slide carousel that highlights the key issues: tone mismatch, unclear benefit, cultural misalignment. Each section has a quick 'spot the problem' quiz."
        }
      </p>
      
      <div className="breakdown-slides">
        <div className="slide active">
          <h4>{isTranslated ? "問題1：語調不匹配" : "Issue 1: Tone Mismatch"}</h4>
          <div className="problem-example">
            <p className="mandarin-text">{mandarinTagline.original}</p>
            <p className="literal-text">{mandarinTagline.literal}</p>
          </div>
          <div className="problem-analysis">
            <p><strong>{isTranslated ? "問題：" : "Problem:"}</strong> {isTranslated ? "中文標語使用正式、詩意的語調，而美國受眾更喜歡直接、對話式的語調。" : "The Mandarin tagline uses formal, poetic tone while US audiences prefer direct, conversational tone."}</p>
          </div>
        </div>
        
        <div className="slide">
          <h4>{isTranslated ? "問題2：利益不明確" : "Issue 2: Unclear Benefit"}</h4>
          <div className="problem-example">
            <p className="mandarin-text">{mandarinTagline.original}</p>
            <p className="literal-text">{mandarinTagline.literal}</p>
          </div>
          <div className="problem-analysis">
            <p><strong>{isTranslated ? "問題：" : "Problem:"}</strong> {isTranslated ? "多個抽象概念（滋養、修護、煥發）使核心利益不明確。" : "Multiple abstract concepts (nourish, repair, radiate) make the core benefit unclear."}</p>
          </div>
        </div>
        
        <div className="slide">
          <h4>{isTranslated ? "問題3：文化錯位" : "Issue 3: Cultural Misalignment"}</h4>
          <div className="problem-example">
            <p className="mandarin-text">{mandarinTagline.original}</p>
            <p className="literal-text">{mandarinTagline.literal}</p>
          </div>
          <div className="problem-analysis">
            <p><strong>{isTranslated ? "问题：" : "Problem:"}</strong> {isTranslated ? "诗意表达在美国营销中可能显得过于华丽或不真诚。" : "Poetic expressions may seem overly flowery or insincere in US marketing."}</p>
          </div>
        </div>
      </div>
      
      <div className="slide-navigation">
        <button className="nav-dot active" onClick={() => {}}></button>
        <button className="nav-dot" onClick={() => {}}></button>
        <button className="nav-dot" onClick={() => {}}></button>
      </div>
    </div>
  );

  const renderPractice = () => (
    <div className="content-card practice">
      <h3>{isTranslated ? "重寫練習" : "Rewrite Practice"}</h3>
      <p className="practice-description">
        {isTranslated 
          ? "互動文本輸入框，學習者可以重寫標語。AI或預加載的反饋彈出給出提示。"
          : "Interactive text entry box where learners rewrite the line. AI or pre-loaded feedback pop up gives hints."
        }
      </p>
      
      <div className="practice-exercise">
        <div className="original-content">
          <h4>{isTranslated ? "原始中文标语：" : "Original Mandarin Tagline:"}</h4>
          <div className="mandarin-text">{mandarinTagline.original}</div>
          <div className="literal-translation">{isTranslated ? "字面意思：" : "Literal:"} "{mandarinTagline.literal}"</div>
        </div>
        
        <div className="rewrite-section">
          <h4>{isTranslated ? "你的美式英语版本：" : "Your US English Version:"}</h4>
          <textarea
            placeholder={isTranslated ? "重写这个标语，使其对美国受众更有效..." : "Rewrite this tagline to be more effective for US audiences..."}
            value={userRewrite}
            onChange={(e) => setUserRewrite(e.target.value)}
          />
          
          <div className="feedback-hints">
            <h5>{isTranslated ? "提示：" : "Hints:"}</h5>
            <ul>
              <li>{isTranslated ? "尝试让利益更直接" : "Try making the benefit more direct"}</li>
              <li>{isTranslated ? "避免正式敬语" : "Avoid formal honorifics"}</li>
              <li>{isTranslated ? "使用主动语态" : "Use active voice"}</li>
              <li>{isTranslated ? "保持简洁明了" : "Keep it simple and clear"}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGallery = () => (
    <div className="content-card gallery">
      <h3>{isTranslated ? "前後對比畫廊" : "Before/After Gallery"}</h3>
      <p className="gallery-description">
        {isTranslated 
          ? "學習者可以翻轉卡片來查看專業重寫並與自己的進行比較。"
          : "Learners can flip cards to see professional rewrites and compare to their own."
        }
      </p>
      
      <div className="comparison-cards">
        <div className="comparison-card">
          <div className="card-front">
            <h4>{isTranslated ? "原始版本" : "Original Version"}</h4>
            <div className="mandarin-text">{mandarinTagline.original}</div>
            <div className="literal-text">{mandarinTagline.literal}</div>
            <p className="flip-hint">{isTranslated ? "点击查看专业版本" : "Click to see professional version"}</p>
          </div>
          <div className="card-back">
            <h4>{isTranslated ? "专业版本" : "Professional Version"}</h4>
            <div className="professional-text">{professionalRewrites[0]}</div>
            <p className="improvement-note">{isTranslated ? "更直接、更清晰、更有影响力" : "More direct, clearer, more impactful"}</p>
          </div>
        </div>
        
        <div className="comparison-card">
          <div className="card-front">
            <h4>{isTranslated ? "字面翻译" : "Literal Translation"}</h4>
            <div className="literal-text">{mandarinTagline.literal}</div>
            <p className="flip-hint">{isTranslated ? "点击查看改进版本" : "Click to see improved version"}</p>
          </div>
          <div className="card-back">
            <h4>{isTranslated ? "改进版本" : "Improved Version"}</h4>
            <div className="professional-text">{professionalRewrites[1]}</div>
            <p className="improvement-note">{isTranslated ? "更自然、更吸引人" : "More natural, more engaging"}</p>
          </div>
        </div>
        
        <div className="comparison-card">
          <div className="card-front">
            <h4>{isTranslated ? "文化问题" : "Cultural Issues"}</h4>
            <div className="issue-text">{isTranslated ? "诗意表达可能显得过于华丽" : "Poetic expressions may seem overly flowery"}</div>
            <p className="flip-hint">{isTranslated ? "点击查看解决方案" : "Click to see solution"}</p>
          </div>
          <div className="card-back">
            <h4>{isTranslated ? "解决方案" : "Solution"}</h4>
            <div className="professional-text">{professionalRewrites[2]}</div>
            <p className="improvement-note">{isTranslated ? "直接、真诚、有效" : "Direct, sincere, effective"}</p>
          </div>
        </div>
      </div>
      
      <div className="gallery-tips">
        <h4>{isTranslated ? "学习要点：" : "Key Learnings:"}</h4>
        <ul>
          <li>{isTranslated ? "专业版本更直接、更清晰" : "Professional versions are more direct and clear"}</li>
          <li>{isTranslated ? "避免文化特定的表达方式" : "Avoid culture-specific expressions"}</li>
          <li>{isTranslated ? "专注于核心利益和情感诉求" : "Focus on core benefits and emotional appeal"}</li>
          <li>{isTranslated ? "使用美国受众熟悉的语言模式" : "Use language patterns familiar to US audiences"}</li>
        </ul>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case 'intro':
        return renderIntro();
      case 'breakdown':
        return renderBreakdown();
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
          <h2>{isTranslated ? "第4節完成！" : "Section 4 Complete!"}</h2>
          <p>{isTranslated ? "恭喜！你已經掌握了互動練習和技能掌握！" : "Congratulations! You've mastered the interactive practice and skill mastery!"}</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          {isTranslated ? "完成课程" : "Complete Course"}
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
          {currentStep === steps.length - 1 
            ? (isTranslated ? '完成本節' : 'Complete Section') 
            : (isTranslated ? '下一步' : 'Next Step')
          }
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Section4;
