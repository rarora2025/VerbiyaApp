import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Languages, Lock } from 'lucide-react';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import './CoursePage.css';

const CoursePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [completedSections, setCompletedSections] = useState([1]);
  const [isTranslated, setIsTranslated] = useState(false);

  const sectionNames = {
    1: isTranslated ? "美國市場與文化分析" : "US Market & Cultural Analysis",
    2: isTranslated ? "中文解構框架" : "Mandarin Deconstruction Framework", 
    3: isTranslated ? "輸入輸出轉換" : "Input-to-Output Transformation",
    4: isTranslated ? "互動練習與掌握" : "Interactive Practice & Mastery"
  };

  const courseTitle = isTranslated 
    ? "課程設計：面向亞洲營銷人員的在線營銷" 
    : "Course Design: Online Marketing for Asian Marketers";

  const handleSectionComplete = (sectionId: number) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
    // Auto-advance to next section
    if (sectionId < 4) {
      setCurrentSection(sectionId + 1);
    }
  };

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      case 1:
        return <Section1 onComplete={() => handleSectionComplete(1)} isTranslated={isTranslated} />;
      case 2:
        return <Section2 onComplete={() => handleSectionComplete(2)} isTranslated={isTranslated} />;
      case 3:
        return <Section3 onComplete={() => handleSectionComplete(3)} isTranslated={isTranslated} />;
      case 4:
        return <Section4 onComplete={() => handleSectionComplete(4)} isTranslated={isTranslated} />;
      default:
        return <Section1 onComplete={() => handleSectionComplete(1)} isTranslated={isTranslated} />;
    }
  };

  const renderPreviewContent = () => (
    <div className="preview-content">
      <div className="preview-header">
        <Lock size={48} className="lock-icon" />
        <h2>{isTranslated ? "預覽內容" : "Preview Content"}</h2>
        <p>{isTranslated ? "這是課程的預覽版本。完整課程即將推出！" : "This is a preview of the course. Full course coming soon!"}</p>
      </div>
      
      <div className="preview-sections">
        <div className="preview-section">
          <h3>{isTranslated ? "第2節：中文解構框架" : "Section 2: Mandarin Deconstruction Framework"}</h3>
          <p>{isTranslated ? "學習如何將中文營銷標語「解構」為核心概念和西方情感觸發點，然後重新編寫。" : "Learn how to 'deconstruct' a Mandarin written tagline into core ideas and western emotional triggers before rewriting."}</p>
          <div className="preview-features">
            <span className="preview-feature">{isTranslated ? "框架步驟" : "Framework Steps"}</span>
            <span className="preview-feature">{isTranslated ? "核心利益分析" : "Core Benefit Analysis"}</span>
            <span className="preview-feature">{isTranslated ? "情感鉤子識別" : "Emotional Hook Identification"}</span>
            <span className="preview-feature">{isTranslated ? "護膚標語練習" : "Skincare Slogan Exercise"}</span>
          </div>
        </div>

        <div className="preview-section">
          <h3>{isTranslated ? "第3節：輸入輸出轉換" : "Section 3: Input-to-Output Transformation"}</h3>
          <p>{isTranslated ? "學習如何將中文術語和短語輸入到美式英語重寫格式中。" : "Learn how to feed Mandarin terms and phrases into a U.S. style English rewrite format."}</p>
          <div className="preview-features">
            <span className="preview-feature">{isTranslated ? "管道圖表" : "Pipeline Chart"}</span>
            <span className="preview-feature">{isTranslated ? "現場演示" : "Live Demo"}</span>
            <span className="preview-feature">{isTranslated ? "行業練習" : "Industry Exercises"}</span>
          </div>
        </div>

        <div className="preview-section">
          <h3>{isTranslated ? "第4節：互動模塊" : "Section 4: Interactive Module"}</h3>
          <p>{isTranslated ? "教學習者如何將中文營銷標語提煉成美式英語文案。" : "Teach learners to take a Mandarin marketing line and refine it into U.S. English copy."}</p>
          <div className="preview-features">
            <span className="preview-feature">{isTranslated ? "介紹動畫" : "Intro Animation"}</span>
            <span className="preview-feature">{isTranslated ? "引導分解" : "Guided Breakdown"}</span>
            <span className="preview-feature">{isTranslated ? "重寫練習" : "Rewrite Practice"}</span>
            <span className="preview-feature">{isTranslated ? "前後對比" : "Before/After Gallery"}</span>
          </div>
        </div>
      </div>

      <div className="preview-footer">
        <p>{isTranslated ? "完整課程將包括所有互動練習、詳細示例和個性化反饋。" : "The full course will include all interactive exercises, detailed examples, and personalized feedback."}</p>
        <button className="notify-btn">
          {isTranslated ? "課程發布時通知我" : "Notify me when course launches"}
        </button>
      </div>
    </div>
  );

  return (
    <div className="course-page">
      <CourseSidebar 
        currentSection={currentSection}
        completedSections={completedSections}
        onSectionChange={setCurrentSection}
        isTranslated={isTranslated}
      />
      <div className="course-content-area">
        <div className="section-header">
          <div className="header-top">
            <Link to="/" className="back-to-home-btn">
              <ArrowLeft size={20} />
              <span>{isTranslated ? "返回首頁" : "Back to Home"}</span>
            </Link>
            <div className="header-content">
              <h1 className="course-title">{courseTitle}</h1>
              <h2 className="section-title">{sectionNames[currentSection as keyof typeof sectionNames]}</h2>
            </div>
            <button 
              onClick={toggleTranslation} 
              className="translate-btn"
              title={isTranslated ? "Switch to English" : "Switch to Chinese"}
            >
              <Languages size={20} />
              <span>{isTranslated ? "English" : "中文"}</span>
            </button>
          </div>
          <div className="section-progress">
            <div className="progress-dots">
              {[1, 2, 3, 4].map((section) => (
                <div 
                  key={section}
                  className={`progress-dot ${section === currentSection ? 'active' : ''} ${completedSections.includes(section) ? 'completed' : ''} ${section > 1 ? 'locked' : ''}`}
                  onClick={() => section === 1 && setCurrentSection(section)}
                >
                  {section > 1 && <Lock size={12} />}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {currentSection === 1 ? renderSectionContent() : renderPreviewContent()}
      </div>
    </div>
  );
};

export default CoursePage;
