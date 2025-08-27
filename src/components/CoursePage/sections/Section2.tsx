import React, { useState } from 'react';
import { Target, Heart, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import './Section2.css';

interface Section2Props {
  onComplete: () => void;
  isTranslated: boolean;
}

const Section2: React.FC<Section2Props> = ({ onComplete, isTranslated }) => {
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
      title: isTranslated ? "框架介绍" : "Framework Introduction",
      content: "framework"
    },
    {
      title: isTranslated ? "核心利益分析" : "Core Benefit Analysis",
      content: "core-benefit"
    },
    {
      title: isTranslated ? "情感钩子识别" : "Emotional Hook Identification",
      content: "emotional-hook"
    },
    {
      title: isTranslated ? "语调选择" : "Tone Selection",
      content: "tone"
    },
    {
      title: isTranslated ? "护肤标语练习" : "Skincare Slogan Exercise",
      content: "exercise"
    }
  ];

  const skincareSlogan = {
    original: "天然滋养，深层修护，焕发青春光彩",
    literal: "Natural nourishment, deep repair, radiate youthful glow",
    category: isTranslated ? "护肤" : "Skincare"
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
      <h3>{isTranslated ? "解构中文标语" : "Deconstructing Mandarin Taglines"}</h3>
      <p className="framework-intro">
        {isTranslated 
          ? "学习如何将中文营销标语「解构」为核心概念和西方情感触发点，然后重新编写。"
          : "Learn how to 'deconstruct' a Mandarin written tagline into core ideas and western emotional triggers before rewriting."
        }
      </p>
      
      <div className="framework-steps">
        <div className="framework-step">
          <div className="step-icon">
            <Target size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步骤1：识别核心利益" : "STEP 1: Identify Core Benefit"}</h4>
            <p>{isTranslated 
              ? "你的公司在这里承诺什么？(例如：速度、美丽、安全、便利)"
              : "What is being promised by your company here? (e.g., speed, beauty, safety, convenience)"
            }</p>
          </div>
        </div>
        
        <div className="framework-step">
          <div className="step-icon">
            <Heart size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步骤2：识别情感钩子" : "STEP 2: Identify Emotional Hook"}</h4>
            <p>{isTranslated 
              ? "你试图触发什么情感反应？(例如：骄傲、信任、独特性、紧迫感)"
              : "What emotional response are you trying to trigger? (e.g., pride, trust, exclusivity, urgency)"
            }</p>
          </div>
        </div>
        
        <div className="framework-step">
          <div className="step-icon">
            <Zap size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步骤3：选择正确语调" : "STEP 3: Choose Correct Tone"}</h4>
            <p>{isTranslated 
              ? "什么语调匹配你的目标受众？(例如：有趣、解决问题、权威、友好)"
              : "What tone matches your target audience? (e.g., playful, problem-solving, authoritative, friendly)"
            }</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCoreBenefit = () => (
    <div className="content-card core-benefit">
      <h3>{isTranslated ? "核心利益分析" : "Core Benefit Analysis"}</h3>
      <p className="step-description">
        {isTranslated 
          ? "让我们练习识别营销信息中的核心利益。核心利益是你的产品/服务实际为客户提供的东西。"
          : "Let's practice identifying the core benefit in marketing messages. The core benefit is what your product/service actually delivers to the customer."
        }
      </p>
      
      <div className="examples-grid">
        <div className="example-card">
          <h4>{isTranslated ? "示例1：科技" : "Example 1: Technology"}</h4>
          <p className="example-text">"智能科技，让生活更简单"</p>
          <p className="example-literal">"Smart technology makes life simpler"</p>
          <div className="benefit-analysis">
            <strong>{isTranslated ? "核心利益：" : "Core Benefit:"}</strong> {isTranslated ? "简洁与便利" : "Simplicity & Convenience"}
          </div>
        </div>
        
        <div className="example-card">
          <h4>{isTranslated ? "示例2：食品饮料" : "Example 2: Food & Beverage"}</h4>
          <p className="example-text">"新鲜食材，健康美味"</p>
          <p className="example-literal">"Fresh ingredients, healthy and delicious"</p>
          <div className="benefit-analysis">
            <strong>{isTranslated ? "核心利益：" : "Core Benefit:"}</strong> {isTranslated ? "健康与味道" : "Health & Taste"}
          </div>
        </div>
      </div>
      
      <div className="practice-section">
        <h4>{isTranslated ? "练习：识别核心利益" : "Practice: Identify Core Benefits"}</h4>
        <p>{isTranslated ? "这些标语中的核心利益是什么？" : "What are the core benefits in these taglines?"}</p>
        <div className="practice-examples">
          <div className="practice-item">
            <p>"快速配送，准时到达" (Fast delivery, arrive on time)</p>
            <input
              type="text"
              placeholder={isTranslated ? "输入核心利益..." : "Enter the core benefit..."}
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
      <h3>{isTranslated ? "情感钩子识别" : "Emotional Hook Identification"}</h3>
      <p className="step-description">
        {isTranslated 
          ? "情感钩子是让人们想要采取行动的心理触发因素。不同文化对不同的情感诉求有不同的反应。"
          : "Emotional hooks are the psychological triggers that make people want to take action. Different cultures respond to different emotional appeals."
        }
      </p>
      
      <div className="emotional-grid">
        <div className="emotion-card">
          <div className="emotion-icon">🏆</div>
          <h4>{isTranslated ? "骄傲与成就" : "Pride & Achievement"}</h4>
          <p>{isTranslated ? "让客户感到有成就感和优越感" : "Making customers feel accomplished and superior"}</p>
          <div className="example">"成为最好的自己" (Become your best self)</div>
        </div>
        
        <div className="emotion-card">
          <div className="emotion-icon">🤝</div>
          <h4>{isTranslated ? "信任与安全" : "Trust & Security"}</h4>
          <p>{isTranslated ? "建立信心并减少焦虑" : "Building confidence and reducing anxiety"}</p>
          <div className="example">"值得信赖的选择" (A trustworthy choice)</div>
        </div>
        
        <div className="emotion-card">
          <div className="emotion-icon">⚡</div>
          <h4>{isTranslated ? "紧迫感与FOMO" : "Urgency & FOMO"}</h4>
          <p>{isTranslated ? "通过稀缺性创造立即行动" : "Creating immediate action through scarcity"}</p>
          <div className="example">"限时优惠，错过不再" (Limited time offer, miss it and it's gone)</div>
        </div>
      </div>
      
      <div className="practice-section">
        <h4>{isTranslated ? "练习：识别情感钩子" : "Practice: Identify Emotional Hooks"}</h4>
        <p>{isTranslated ? "这个标语试图触发什么情感反应？" : "What emotional response is this tagline trying to trigger?"}</p>
        <div className="practice-examples">
          <div className="practice-item">
            <p>"专属定制，与众不同" (Exclusive customization, different from others)</p>
            <input
              type="text"
              placeholder={isTranslated ? "输入情感钩子..." : "Enter the emotional hook..."}
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
      <h3>{isTranslated ? "语调选择" : "Tone Selection"}</h3>
      <p className="step-description">
        {isTranslated 
          ? "你信息的语调应该匹配你的目标受众和品牌个性。美国受众通常更喜欢直接、对话式的语调。"
          : "The tone of your message should match your target audience and brand personality. US audiences often prefer direct, conversational tones."
        }
      </p>
      
      <div className="tone-options">
        <div className="tone-option">
          <h4>{isTranslated ? "有趣好玩" : "Playful & Fun"}</h4>
          <p>{isTranslated ? "轻松、幽默、引人入胜" : "Light-hearted, humorous, engaging"}</p>
          <div className="tone-example">"Let's make magic happen!"</div>
        </div>
        
        <div className="tone-option">
          <h4>{isTranslated ? "解决问题" : "Problem-Solving"}</h4>
          <p>{isTranslated ? "直接、以解决方案为中心、有帮助" : "Direct, solution-focused, helpful"}</p>
          <div className="tone-example">"Solve your biggest challenge today"</div>
        </div>
        
        <div className="tone-option">
          <h4>{isTranslated ? "权威" : "Authoritative"}</h4>
          <p>{isTranslated ? "自信、专业、值得信赖" : "Confident, expert, trustworthy"}</p>
          <div className="tone-example">"The proven solution professionals choose"</div>
        </div>
        
        <div className="tone-option">
          <h4>{isTranslated ? "友好平易近人" : "Friendly & Approachable"}</h4>
          <p>{isTranslated ? "温暖、欢迎、个人化" : "Warm, welcoming, personal"}</p>
          <div className="tone-example">"We're here to help you succeed"</div>
        </div>
      </div>
      
      <div className="practice-section">
        <h4>{isTranslated ? "练习：选择正确的语调" : "Practice: Choose the Right Tone"}</h4>
        <p>{isTranslated ? "对于针对年轻专业人士的护肤产品，哪种语调最有效？" : "For a skincare product targeting young professionals, which tone would be most effective?"}</p>
        <div className="practice-examples">
          <div className="practice-item">
            <select
              value={frameworkAnswers.tone}
              onChange={(e) => setFrameworkAnswers({...frameworkAnswers, tone: e.target.value})}
            >
              <option value="">{isTranslated ? "选择语调..." : "Select a tone..."}</option>
              <option value="playful">{isTranslated ? "有趣好玩" : "Playful & Fun"}</option>
              <option value="problem-solving">{isTranslated ? "解决问题" : "Problem-Solving"}</option>
              <option value="authoritative">{isTranslated ? "权威" : "Authoritative"}</option>
              <option value="friendly">{isTranslated ? "友好平易近人" : "Friendly & Approachable"}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="content-card exercise">
      <h3>{isTranslated ? "护肤标语练习" : "Skincare Slogan Exercise"}</h3>
      <p className="exercise-instruction">
        {isTranslated 
          ? "现在让我们将我们的框架应用到真实的中文护肤标语上。逐步分解它。"
          : "Now let's apply our framework to a real Mandarin skincare slogan. Break it down step by step."
        }
      </p>
      
      <div className="slogan-display">
        <div className="original-slogan">
          <h4>{isTranslated ? "原始中文标语：" : "Original Mandarin Slogan:"}</h4>
          <div className="mandarin-text">{skincareSlogan.original}</div>
          <div className="literal-translation">{isTranslated ? "字面意思" : "Literal"}: "{skincareSlogan.literal}"</div>
        </div>
      </div>
      
      <div className="framework-application">
        <h4>{isTranslated ? "应用框架：" : "Apply the Framework:"}</h4>
        
        <div className="framework-step">
          <h5>{isTranslated ? "步骤1：标记利益词汇" : "STEP 1: Mark the Benefiting Words"}</h5>
          <p>{isTranslated ? "哪些词汇描述了产品为客户做什么？" : "Which words describe what the product does for the customer?"}</p>
          <input
            type="text"
            placeholder={isTranslated ? "例如：滋养、修护、焕发..." : "e.g., nourish, repair, radiate..."}
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
          <h5>{isTranslated ? "步骤2：标记情感词汇" : "STEP 2: Mark the Emotional Words"}</h5>
          <p>{isTranslated ? "哪些词汇创造情感诉求？" : "Which words create emotional appeal?"}</p>
          <input
            type="text"
            placeholder={isTranslated ? "例如：天然、青春、光彩..." : "e.g., natural, youthful, glow..."}
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
          <h5>{isTranslated ? "步骤3：重建为西式英语" : "STEP 3: Rebuild into Westernized English"}</h5>
          <p>{isTranslated ? "为美国受众创建一个简短、直接的短语：" : "Create a short, direct phrase for US audiences:"}</p>
          <input
            type="text"
            placeholder={isTranslated ? "例如：'天然修护，焕发光彩'" : "e.g., 'Natural repair for radiant skin'"}
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
          <h2>{isTranslated ? "第2节完成！" : "Section 2 Complete!"}</h2>
          <p>{isTranslated ? "太棒了！你已经掌握了中文标语解构框架！" : "Excellent work mastering the framework for deconstructing Mandarin taglines!"}</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          {isTranslated ? "继续第3节" : "Continue to Section 3"}
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
            ? (isTranslated ? '完成本节' : 'Complete Section') 
            : (isTranslated ? '下一步' : 'Next Step')
          }
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Section2;
