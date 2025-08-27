import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ArrowRightLeft, Play, FileText } from 'lucide-react';
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
      title: isTranslated ? "管道图表介绍" : "Pipeline Chart Introduction",
      content: "pipeline"
    },
    {
      title: isTranslated ? "现场演示" : "Live Demo",
      content: "demo"
    },
    {
      title: isTranslated ? "行业练习" : "Industry Exercises",
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
      <h3>{isTranslated ? "中文输入 → 英文输出管道" : "Mandarin Input → English Output Pipeline"}</h3>
      <p className="pipeline-intro">
        {isTranslated 
          ? "了解如何重新排列、扩展或交换中文中的意象，从而产生更自然的美式英语文案，进而采用更西化的方法。"
          : "Show how rearranging, expanding, or swapping imagery in Mandarin leads to more natural U.S. copy, and hence more of a westernized approach."
        }
      </p>
      
      <div className="pipeline-flow">
        <div className="pipeline-step">
          <div className="step-icon">
            <FileText size={24} />
          </div>
          <div className="step-content">
            <h4>{isTranslated ? "步骤1：中文输入" : "Step 1: Mandarin Input"}</h4>
            <p>{isTranslated ? "原始中文营销标语" : "Original Mandarin marketing tagline"}</p>
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
            <h4>{isTranslated ? "步骤2：转换过程" : "Step 2: Transformation Process"}</h4>
            <p>{isTranslated ? "重新排列、扩展意象、文化适应" : "Rearranging, expanding imagery, cultural adaptation"}</p>
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
            <h4>{isTranslated ? "步骤3：英文输出" : "Step 3: English Output"}</h4>
            <p>{isTranslated ? "西化美式英语文案" : "Westernized US English copy"}</p>
          </div>
        </div>
      </div>
      
      <div className="pipeline-tips">
        <h4>{isTranslated ? "转换技巧" : "Transformation Tips"}</h4>
        <ul>
          <li>{isTranslated ? "避免直译，注重文化适应" : "Avoid literal translation, focus on cultural adaptation"}</li>
          <li>{isTranslated ? "重新排列句子结构以符合英语习惯" : "Rearrange sentence structure to match English conventions"}</li>
          <li>{isTranslated ? "扩展抽象概念为具体意象" : "Expand abstract concepts into concrete imagery"}</li>
          <li>{isTranslated ? "使用英语中常见的表达方式" : "Use common expressions in English"}</li>
        </ul>
      </div>
    </div>
  );

  const renderDemo = () => (
    <div className="content-card demo">
      <h3>{isTranslated ? "现场演示" : "Live Demo"}</h3>
      <p className="demo-intro">
        {isTranslated 
          ? "让我们看一个具体的例子，展示如何将中文标语转换为美式英语。"
          : "Let's look at a specific example showing how to transform a Mandarin tagline into US English."
        }
      </p>
      
      <div className="demo-example">
        <div className="demo-step">
          <h4>{isTranslated ? "原始中文：" : "Original Mandarin:"}</h4>
          <div className="mandarin-text">"健康美味，家的味道"</div>
        </div>
        
        <div className="demo-step">
          <h4>{isTranslated ? "字面翻译：" : "Literal Translation:"}</h4>
          <div className="literal-text">"Healthy and delicious, the taste of home"</div>
        </div>
        
        <div className="demo-step">
          <h4>{isTranslated ? "美式英语改编：" : "Adapted US English:"}</h4>
          <div className="adapted-text">"Wholesome flavor that feels like home"</div>
        </div>
      </div>
      
      <div className="demo-explanation">
        <h4>{isTranslated ? "转换说明：" : "Transformation Explanation:"}</h4>
        <ul>
          <li><strong>{isTranslated ? "重新排列：" : "Rearranged:"}</strong> {isTranslated ? "将「健康美味」改为「美味健康」" : "Changed 'healthy and delicious' to 'delicious and healthy'"}</li>
          <li><strong>{isTranslated ? "软化重复：" : "Softened repetition:"}</strong> {isTranslated ? "避免重复使用「味道」概念" : "Avoided repeating the 'taste' concept"}</li>
          <li><strong>{isTranslated ? "增加情感共鸣：" : "Added emotional resonance:"}</strong> {isTranslated ? "使用「feels like」而不是「taste of」" : "Used 'feels like' instead of 'taste of'"}</li>
        </ul>
      </div>
    </div>
  );

  const renderExercises = () => (
    <div className="content-card exercises">
      <h3>{isTranslated ? "行业练习" : "Industry Exercises"}</h3>
      <p className="exercise-instruction">
        {isTranslated 
          ? "现在练习将不同行业的中文标语转换为美式英语。为每个标语创建2-3个版本。"
          : "Now practice transforming Mandarin taglines from different industries into US English. Create 2-3 versions for each tagline."
        }
      </p>
      
      <div className="industry-exercises">
        {mandarinExamples.map((example, index) => (
          <div key={index} className="industry-exercise">
            <h4>{example.industry}</h4>
            <div className="original-tagline">
              <strong>{isTranslated ? "原始标语：" : "Original:"}</strong> {example.original}
            </div>
            <div className="literal-translation">
              <strong>{isTranslated ? "字面意思：" : "Literal:"}</strong> {example.literal}
            </div>
            <div className="example-adaptation">
              <strong>{isTranslated ? "示例改编：" : "Example adaptation:"}</strong> {example.adapted}
            </div>
            
            <div className="user-versions">
              <h5>{isTranslated ? "你的版本：" : "Your versions:"}</h5>
              <textarea
                placeholder={isTranslated ? "输入你的美式英语版本..." : "Enter your US English versions..."}
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
        <h4>{isTranslated ? "练习提示：" : "Exercise Tips:"}</h4>
        <ul>
          <li>{isTranslated ? "考虑目标受众的文化背景" : "Consider the cultural background of your target audience"}</li>
          <li>{isTranslated ? "使用英语中常见的表达方式" : "Use common expressions in English"}</li>
          <li>{isTranslated ? "保持原始信息的核心价值" : "Maintain the core value of the original message"}</li>
          <li>{isTranslated ? "测试不同语调的效果" : "Test the effectiveness of different tones"}</li>
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
          <h2>{isTranslated ? "第3节完成！" : "Section 3 Complete!"}</h2>
          <p>{isTranslated ? "太棒了！你已经掌握了中文到英文的转换技巧！" : "Excellent work mastering the transformation from Mandarin to English!"}</p>
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
            ? (isTranslated ? '完成本节' : 'Complete Section') 
            : (isTranslated ? '下一步' : 'Next Step')
          }
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Section3;
