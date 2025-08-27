import React, { useState } from 'react';
import { BarChart3, Users, ShoppingCart, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import './Section1.css';

interface Section1Props {
  onComplete: () => void;
  isTranslated: boolean;
}

const Section1: React.FC<Section1Props> = ({ onComplete, isTranslated }) => {
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
      category: isTranslated ? "食品饮料" : "Food & Beverage"
    },
    {
      original: "科技改变生活，智慧引领未来",
      literal: "Technology changes life, wisdom leads the future",
      category: isTranslated ? "科技" : "Technology"
    },
    {
      original: "美丽从内而外，自信由心而生",
      literal: "Beauty from inside out, confidence born from heart",
      category: isTranslated ? "美容健康" : "Beauty & Wellness"
    }
  ];

  const steps = [
    {
      title: isTranslated ? "美国市场分析" : "US Market Analytics",
      icon: <BarChart3 size={32} />,
      content: "market-analytics"
    },
    {
      title: isTranslated ? "人口统计与行为" : "Demographics & Behavior",
      icon: <Users size={32} />,
      content: "demographics"
    },
    {
      title: isTranslated ? "界面对比" : "UI Comparison",
      icon: <Globe size={32} />,
      content: "ui-comparison"
    },
    {
      title: isTranslated ? "翻译练习" : "Translation Exercise",
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
      <h3>{isTranslated ? "美国电商热门类别" : "Top US E-commerce Categories"}</h3>
      <div className="analytics-grid">
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '80%' }}>
            <span>{isTranslated ? "电子产品" : "Electronics"}</span>
          </div>
          <p>32%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '65%' }}>
            <span>{isTranslated ? "时尚" : "Fashion"}</span>
          </div>
          <p>28%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '45%' }}>
            <span>{isTranslated ? "家居园艺" : "Home & Garden"}</span>
          </div>
          <p>18%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '35%' }}>
            <span>{isTranslated ? "美容" : "Beauty"}</span>
          </div>
          <p>15%</p>
        </div>
      </div>
      
      <div className="market-insights">
        <h4>{isTranslated ? "关键洞察" : "Key Insights"}</h4>
        <ul>
          <li>{isTranslated ? "亚马逊占据美国电商38%的市场份额" : "Amazon dominates 38% of US e-commerce"}</li>
          <li>{isTranslated ? "移动购物占交易的72%" : "Mobile shopping accounts for 72% of transactions"}</li>
          <li>{isTranslated ? "社交电商年增长25%" : "Social commerce growing 25% annually"}</li>
        </ul>
      </div>
    </div>
  );

  const renderDemographics = () => (
    <div className="content-card demographics">
      <h3>{isTranslated ? "美国买家人口统计" : "US Buyer Demographics"}</h3>
      <div className="demographics-grid">
        <div className="demo-card">
          <h4>{isTranslated ? "年龄段" : "Age Segments"}</h4>
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
          <h4>{isTranslated ? "消费习惯" : "Spending Habits"}</h4>
          <ul>
            <li>{isTranslated ? "平均订单价值：87美元" : "Average order value: $87"}</li>
            <li>{isTranslated ? "最活跃时间：周二下午2-4点" : "Most active: Tuesday 2-4 PM"}</li>
            <li>{isTranslated ? "首选支付方式：信用卡(65%)" : "Preferred payment: Credit cards (65%)"}</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderUIComparison = () => (
    <div className="content-card ui-comparison">
      <h3>{isTranslated ? "数字界面对比：美国 vs 中国" : "Digital UI Comparison: US vs China"}</h3>
      <div className="ui-grid">
        <div className="ui-card">
          <h4>Facebook vs WeChat</h4>
          <div className="ui-features">
            <div className="feature-item">
              <span className="feature-label">Facebook:</span>
              <span className="feature-desc">{isTranslated ? "简洁、极简、广告导向" : "Clean, minimal, ad-focused"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-label">WeChat:</span>
              <span className="feature-desc">{isTranslated ? "功能丰富、集成生态系统" : "Feature-rich, integrated ecosystem"}</span>
            </div>
          </div>
        </div>
        
        <div className="ui-card">
          <h4>Instagram vs Xiaohongshu</h4>
          <div className="ui-features">
            <div className="feature-item">
              <span className="feature-label">Instagram:</span>
              <span className="feature-desc">{isTranslated ? "视觉故事、话题标签" : "Visual storytelling, hashtags"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-label">Xiaohongshu:</span>
              <span className="feature-desc">{isTranslated ? "生活方式内容、购物集成" : "Lifestyle content, shopping integration"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="content-card exercise">
      <h3>{isTranslated ? "翻译练习" : "Translation Exercise"}</h3>
      <p className="exercise-instruction">
        {isTranslated 
          ? "分析这3个中文营销标语。逐字翻译，然后识别为什么它们在美国「卖不出去」。"
          : "Analyze these 3 Mandarin marketing taglines. Translate literally, then identify why they wouldn't 'sell' in the United States."
        }
      </p>
      
      <div className="exercise-form">
        {mandarinTaglines.map((tagline, index) => (
          <div key={index} className="exercise-item">
            <h4>{isTranslated ? `标语 ${index + 1}` : `Tagline ${index + 1}`}: {tagline.category}</h4>
            <div className="tagline-display">
              <div className="mandarin-text">{tagline.original}</div>
              <div className="literal-translation">
                {isTranslated ? "字面意思" : "Literal"}: "{tagline.literal}"
              </div>
            </div>
            <textarea
              placeholder={isTranslated 
                ? "为什么这在美国卖不出去？考虑文化差异、语调和信息传递风格。"
                : "Why wouldn't this sell in the US? Consider cultural differences, tone, and messaging style."
              }
              value={exerciseAnswers[`analysis${index + 1}` as keyof typeof exerciseAnswers]}
              onChange={(e) => setExerciseAnswers({
                ...exerciseAnswers, 
                [`analysis${index + 1}`]: e.target.value
              })}
            />
          </div>
        ))}
        
        <div className="reflection-section">
          <h4>{isTranslated ? "反思问题" : "Reflection Question"}</h4>
          <textarea
            placeholder={isTranslated 
              ? "当我们逐字翻译时，什么会丢失或扭曲？这会如何影响营销效果？"
              : "What gets lost or distorted when we translate word-for-word? How does this affect marketing effectiveness?"
            }
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
          <h2>{isTranslated ? "第1节完成！" : "Section 1 Complete!"}</h2>
          <p>{isTranslated ? "很好！你已经理解了美国市场和翻译挑战！" : "Great job understanding the US market and translation challenges!"}</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          {isTranslated ? "继续第2节" : "Continue to Section 2"}
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

export default Section1;
