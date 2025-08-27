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
      category: isTranslated ? "食品飲料" : "Food & Beverage"
    },
    {
      original: "科技改變生活，智慧引領未來",
      literal: "Technology changes life, wisdom leads the future",
      category: isTranslated ? "科技" : "Technology"
    },
    {
      original: "美麗從內而外，自信由心而生",
      literal: "Beauty from inside out, confidence born from heart",
      category: isTranslated ? "美容健康" : "Beauty & Wellness"
    }
  ];

  const steps = [
    {
      title: isTranslated ? "美國市場分析" : "US Market Analytics",
      icon: <BarChart3 size={32} />,
      content: "market-analytics"
    },
    {
      title: isTranslated ? "人口統計與行為" : "Demographics & Behavior",
      icon: <Users size={32} />,
      content: "demographics"
    },
    {
      title: isTranslated ? "界面對比" : "UI Comparison",
      icon: <Globe size={32} />,
      content: "ui-comparison"
    },
    {
      title: isTranslated ? "翻譯練習" : "Translation Exercise",
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
      <h3>{isTranslated ? "美國電商熱門類別" : "Top US E-commerce Categories"}</h3>
      <div className="analytics-grid">
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '80%' }}>
            <span>{isTranslated ? "電子產品" : "Electronics"}</span>
          </div>
          <p>32%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '65%' }}>
            <span>{isTranslated ? "時尚" : "Fashion"}</span>
          </div>
          <p>28%</p>
        </div>
        <div className="analytics-item">
          <div className="analytics-bar" style={{ height: '45%' }}>
            <span>{isTranslated ? "家居園藝" : "Home & Garden"}</span>
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
        <h4>{isTranslated ? "關鍵洞察" : "Key Insights"}</h4>
        <ul>
          <li>{isTranslated ? "亞馬遜佔據美國電商38%的市場份額" : "Amazon dominates 38% of US e-commerce"}</li>
          <li>{isTranslated ? "移動購物佔交易的72%" : "Mobile shopping accounts for 72% of transactions"}</li>
          <li>{isTranslated ? "社交電商年增長25%" : "Social commerce growing 25% annually"}</li>
        </ul>
      </div>
    </div>
  );

  const renderDemographics = () => (
    <div className="content-card demographics">
      <h3>{isTranslated ? "美國買家人口統計" : "US Buyer Demographics"}</h3>
      <div className="demographics-grid">
        <div className="demo-card">
                      <h4>{isTranslated ? "年齡段" : "Age Segments"}</h4>
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
                      <h4>{isTranslated ? "消費習慣" : "Spending Habits"}</h4>
            <ul>
              <li>{isTranslated ? "平均訂單價值：87美元" : "Average order value: $87"}</li>
              <li>{isTranslated ? "最活躍時間：週二下午2-4點" : "Most active: Tuesday 2-4 PM"}</li>
              <li>{isTranslated ? "首選支付方式：信用卡(65%)" : "Preferred payment: Credit cards (65%)"}</li>
            </ul>
        </div>
      </div>
    </div>
  );

  const renderUIComparison = () => (
    <div className="content-card ui-comparison">
      <h3>{isTranslated ? "數字界面對比：美國 vs 中國" : "Digital UI Comparison: US vs China"}</h3>
      <div className="ui-grid">
        <div className="ui-card">
          <h4>Facebook vs WeChat</h4>
          <div className="ui-features">
            <div className="feature-item">
              <span className="feature-label">Facebook:</span>
              <span className="feature-desc">{isTranslated ? "簡潔、極簡、廣告導向" : "Clean, minimal, ad-focused"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-label">WeChat:</span>
              <span className="feature-desc">{isTranslated ? "功能豐富、集成生態系統" : "Feature-rich, integrated ecosystem"}</span>
            </div>
          </div>
        </div>
        
        <div className="ui-card">
          <h4>Instagram vs Xiaohongshu</h4>
          <div className="ui-features">
            <div className="feature-item">
              <span className="feature-label">Instagram:</span>
              <span className="feature-desc">{isTranslated ? "視覺故事、話題標籤" : "Visual storytelling, hashtags"}</span>
            </div>
            <div className="feature-item">
              <span className="feature-label">Xiaohongshu:</span>
              <span className="feature-desc">{isTranslated ? "生活方式內容、購物集成" : "Lifestyle content, shopping integration"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExercise = () => (
    <div className="content-card exercise">
      <h3>{isTranslated ? "翻譯練習" : "Translation Exercise"}</h3>
      <p className="exercise-instruction">
        {isTranslated 
          ? "分析這3個中文營銷標語。逐字翻譯，然後識別為什麼它們在美國「賣不出去」。"
          : "Analyze these 3 Mandarin marketing taglines. Translate literally, then identify why they wouldn't 'sell' in the United States."
        }
      </p>
      
      <div className="exercise-form">
        {mandarinTaglines.map((tagline, index) => (
          <div key={index} className="exercise-item">
            <h4>{isTranslated ? `標語 ${index + 1}` : `Tagline ${index + 1}`}: {tagline.category}</h4>
            <div className="tagline-display">
              <div className="mandarin-text">{tagline.original}</div>
              <div className="literal-translation">
                {isTranslated ? "字面意思" : "Literal"}: "{tagline.literal}"
              </div>
            </div>
            <textarea
              placeholder={isTranslated 
                ? "為什麼這在美國賣不出去？考慮文化差異、語調和信息傳遞風格。"
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
          <h4>{isTranslated ? "反思問題" : "Reflection Question"}</h4>
          <textarea
            placeholder={isTranslated 
              ? "當我們逐字翻譯時，什麼會丟失或扭曲？這會如何影響營銷效果？"
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
          <h2>{isTranslated ? "第1節完成！" : "Section 1 Complete!"}</h2>
          <p>{isTranslated ? "很好！你已經理解了美國市場和翻譯挑戰！" : "Great job understanding the US market and translation challenges!"}</p>
        </div>
        <button className="complete-btn" onClick={handleComplete}>
          {isTranslated ? "繼續第2節" : "Continue to Section 2"}
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

export default Section1;
