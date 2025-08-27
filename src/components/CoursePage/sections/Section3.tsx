import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ArrowRightLeft, FileText } from 'lucide-react';
import './Section3.css';

interface Section3Props {
  onComplete: () => void;
  isTranslated: boolean;
}

const Section3: React.FC<Section3Props> = ({ onComplete, isTranslated }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [exerciseAnswers, setExerciseAnswers] = useState({
    industry1: '',
    industry2: '',
    industry3: '',
    industry4: '',
    industry5: ''
  });
  const [showResults, setShowResults] = useState(false);

  const steps = [
    {
      title: isTranslated ? "管道圖表介紹" : "Pipeline Chart Introduction",
      content: "pipeline"
    },
    {
      title: isTranslated ? "現場演示" : "Live Demo",
      content: "demo"
    },
    {
      title: isTranslated ? "行業練習" : "Industry Exercises",
      content: "exercises"
    }
  ];

  const mandarinExamples = [
    {
      original: "健康美味，家的味道",
      literal: "Healthy and delicious, the taste of home",
      adapted: "Wholesome flavor that feels like home",
      industry: isTranslated ? "食品饮料" : "Food & Beverage"
    },
    {
      original: "科技改变生活，智慧引领未来",
      literal: "Technology changes life, wisdom leads the future",
      adapted: "Smart tech that transforms your everyday",
      industry: isTranslated ? "科技" : "Technology"
    },
    {
      original: "美丽从内而外，自信由心而生",
      literal: "Beauty from inside out, confidence born from heart",
      adapted: "Inner beauty that radiates confidence",
      industry: isTranslated ? "美容健康" : "Beauty & Wellness"
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

  const renderPipeline = () => (
    <div className="content-card pipeline">
      <h3>{isTranslated ? "中文輸入 → 英文輸出管道" : "Mandarin Input → English Output Pipeline"}</h3>
      <p className="pipeline-intro">
        {isTranslated 
          ? "了解如何重新排列、擴展或交換中文中的意象，從而產生更自然的美式英語文案，進而採用更西化的方法。"
          : "Show how rearranging, expanding, or swapping imagery in Mandarin leads to more natural U.S. copy, and hence more of a westernized approach."
        }
      </p>
      
      <div className="pipeline-flow">
        <div className="pipeline-step">
          <div className="step-icon">
            <FileText size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步驟1：中文輸入" : "Step 1: Mandarin Input"}</h4>
            <p>{isTranslated ? "原始中文營銷標語" : "Original Mandarin marketing tagline"}</p>
          </div>
        </div>
        
        <div className="pipeline-arrow">
          <ArrowRightLeft size={20} />
        </div>
        
        <div className="pipeline-step">
          <div className="step-icon">
            <ArrowRightLeft size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步驟2：轉換過程" : "Step 2: Transformation Process"}</h4>
            <p>{isTranslated ? "重新排列、擴展意象、文化適應" : "Rearranging, expanding imagery, cultural adaptation"}</p>
          </div>
        </div>
        
        <div className="pipeline-arrow">
          <ArrowRight size={20} />
        </div>
        
        <div className="pipeline-step">
          <div className="step-icon">
            <FileText size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步驟3：英文輸出" : "Step 3: English Output"}</h4>
            <p>{isTranslated ? "西化美式英語文案" : "Westernized US English copy"}</p>
          </div>
        </div>
      </div>
      
      <div className="pipeline-tips">
        <h4>{isTranslated ? "轉換技巧" : "Transformation Tips"}</h4>
        <ul>
          <li>{isTranslated ? "避免直譯，注重文化適應" : "Avoid literal translation, focus on cultural adaptation"}</li>
          <li>{isTranslated ? "重新排列句子結構以符合英語習慣" : "Rearrange sentence structure to match English conventions"}</li>
          <li>{isTranslated ? "擴展抽象概念為具體意象" : "Expand abstract concepts into concrete imagery"}</li>
          <li>{isTranslated ? "使用英語中常見的表達方式" : "Use common expressions in English"}</li>
        </ul>
      </div>
    </div>
  );

  const renderDemo = () => (
    <div className="content-card demo">
      <h3>{isTranslated ? "現場演示" : "Live Demo"}</h3>
      <p className="demo-intro">
        {isTranslated 
          ? "讓我們看一個具體的例子，展示如何將中文標語轉換為美式英語。"
          : "Let's look at a specific example showing how to transform a Mandarin tagline into US English."
        }
      </p>
      
      <div className="demo-example">
        <div className="demo-step">
          <h4>{isTranslated ? "原始中文：" : "Original Mandarin:"}</h4>
          <div className="mandarin-text">"健康美味，家的味道"</div>
        </div>
        
        <div className="demo-step">
          <h4>{isTranslated ? "字面翻譯：" : "Literal Translation:"}</h4>
          <div className="literal-text">"Healthy and delicious, the taste of home"</div>
        </div>
        
        <div className="demo-step">
          <h4>{isTranslated ? "美式英語改編：" : "Adapted US English:"}</h4>
          <div className="adapted-text">"Wholesome flavor that feels like home"</div>
        </div>
      </div>
      
      <div className="demo-explanation">
        <h4>{isTranslated ? "轉換說明：" : "Transformation Explanation:"}</h4>
        <ul>
                      <li><strong>{isTranslated ? "重新排列：" : "Rearranged:"}</strong> {isTranslated ? "將「健康美味」改為「美味健康」" : "Changed 'healthy and delicious' to 'delicious and healthy'"}</li>
            <li><strong>{isTranslated ? "軟化重複：" : "Softened repetition:"}</strong> {isTranslated ? "避免重複使用「味道」概念" : "Avoided repeating the 'taste' concept"}</li>
            <li><strong>{isTranslated ? "增加情感共鳴：" : "Added emotional resonance:"}</strong> {isTranslated ? "使用「feels like」而不是「taste of」" : "Used 'feels like' instead of 'taste of'"}</li>
        </ul>
      </div>
    </div>
  );

  const renderExercises = () => (
    <div className="content-card exercises">
      <h3>{isTranslated ? "行业练习" : "Industry Exercises"}</h3>
      <p className="exercise-instruction">
        {isTranslated 
          ? "現在練習將不同行業的中文標語轉換為美式英語。為每個標語創建2-3個版本。"
          : "Now practice transforming Mandarin taglines from different industries into US English. Create 2-3 versions for each tagline."
        }
      </p>
      
      <div className="industry-exercises">
        {mandarinExamples.map((example, index) => (
          <div key={index} className="industry-exercise">
            <h4>{example.industry}</h4>
            <div className="original-tagline">
              <strong>{isTranslated ? "原始標語：" : "Original:"}</strong> {example.original}
            </div>
            <div className="literal-translation">
              <strong>{isTranslated ? "字面意思：" : "Literal:"}</strong> {example.literal}
            </div>
            <div className="example-adaptation">
              <strong>{isTranslated ? "示例改編：" : "Example adaptation:"}</strong> {example.adapted}
            </div>
            
            <div className="user-versions">
              <h5>{isTranslated ? "你的版本：" : "Your versions:"}</h5>
              <textarea
                placeholder={isTranslated ? "輸入你的美式英語版本..." : "Enter your US English versions..."}
                value={exerciseAnswers[`industry${index + 1}` as keyof typeof exerciseAnswers]}
                onChange={(e) => setExerciseAnswers({
                  ...exerciseAnswers,
                  [`industry${index + 1}`]: e.target.value
                })}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="exercise-tips">
        <h4>{isTranslated ? "練習提示：" : "Exercise Tips:"}</h4>
        <ul>
          <li>{isTranslated ? "考慮目標受眾的文化背景" : "Consider the cultural background of your target audience"}</li>
          <li>{isTranslated ? "使用英語中常見的表達方式" : "Use common expressions in English"}</li>
          <li>{isTranslated ? "保持原始信息的核心價值" : "Maintain the core value of the original message"}</li>
          <li>{isTranslated ? "測試不同語調的效果" : "Test the effectiveness of different tones"}</li>
        </ul>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (steps[currentStep].content) {
      case 'pipeline':
        return renderPipeline();
      case 'demo':
        return renderDemo();
      case 'exercises':
        return renderExercises();
      default:
        return renderPipeline();
    }
  };

  if (showResults) {
    return (
      <div className="content-card results">
        <div className="results-header">
          <CheckCircle size={48} className="success-icon" />
          <h2>{isTranslated ? "第3節完成！" : "Section 3 Complete!"}</h2>
          <p>{isTranslated ? "太棒了！你已經掌握了中文到英文的轉換技巧！" : "Excellent work mastering the transformation from Mandarin to English!"}</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          {isTranslated ? "继续第4节" : "Continue to Section 4"}
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

export default Section3;
