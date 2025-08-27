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
    1: isTranslated ? "美国市场与文化分析" : "US Market & Cultural Analysis",
    2: isTranslated ? "中文解构框架" : "Mandarin Deconstruction Framework", 
    3: isTranslated ? "输入输出转换" : "Input-to-Output Transformation",
    4: isTranslated ? "互动练习与掌握" : "Interactive Practice & Mastery"
  };

  const courseTitle = isTranslated 
    ? "课程设计：面向亚洲营销人员的在线营销" 
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
        <h2>{isTranslated ? "预览内容" : "Preview Content"}</h2>
        <p>{isTranslated ? "这是课程的预览版本。完整课程即将推出！" : "This is a preview of the course. Full course coming soon!"}</p>
      </div>
      
      <div className="preview-sections">
        <div className="preview-section">
          <h3>{isTranslated ? "第2节：中文解构框架" : "Section 2: Mandarin Deconstruction Framework"}</h3>
          <p>{isTranslated ? "学习如何将中文营销标语「解构」为核心概念和西方情感触发点，然后重新编写。" : "Learn how to 'deconstruct' a Mandarin written tagline into core ideas and western emotional triggers before rewriting."}</p>
          <div className="preview-features">
            <span className="preview-feature">{isTranslated ? "框架步骤" : "Framework Steps"}</span>
            <span className="preview-feature">{isTranslated ? "核心利益分析" : "Core Benefit Analysis"}</span>
            <span className="preview-feature">{isTranslated ? "情感钩子识别" : "Emotional Hook Identification"}</span>
            <span className="preview-feature">{isTranslated ? "护肤标语练习" : "Skincare Slogan Exercise"}</span>
          </div>
        </div>

        <div className="preview-section">
          <h3>{isTranslated ? "第3节：输入输出转换" : "Section 3: Input-to-Output Transformation"}</h3>
          <p>{isTranslated ? "学习如何将中文术语和短语输入到美式英语重写格式中。" : "Learn how to feed Mandarin terms and phrases into a U.S. style English rewrite format."}</p>
          <div className="preview-features">
            <span className="preview-feature">{isTranslated ? "管道图表" : "Pipeline Chart"}</span>
            <span className="preview-feature">{isTranslated ? "现场演示" : "Live Demo"}</span>
            <span className="preview-feature">{isTranslated ? "行业练习" : "Industry Exercises"}</span>
          </div>
        </div>

        <div className="preview-section">
          <h3>{isTranslated ? "第4节：互动模块" : "Section 4: Interactive Module"}</h3>
          <p>{isTranslated ? "教学习者如何将中文营销标语提炼成美式英语文案。" : "Teach learners to take a Mandarin marketing line and refine it into U.S. English copy."}</p>
          <div className="preview-features">
            <span className="preview-feature">{isTranslated ? "介绍动画" : "Intro Animation"}</span>
            <span className="preview-feature">{isTranslated ? "引导分解" : "Guided Breakdown"}</span>
            <span className="preview-feature">{isTranslated ? "重写练习" : "Rewrite Practice"}</span>
            <span className="preview-feature">{isTranslated ? "前后对比" : "Before/After Gallery"}</span>
          </div>
        </div>
      </div>

      <div className="preview-footer">
        <p>{isTranslated ? "完整课程将包括所有互动练习、详细示例和个性化反馈。" : "The full course will include all interactive exercises, detailed examples, and personalized feedback."}</p>
        <button className="notify-btn">
          {isTranslated ? "课程发布时通知我" : "Notify me when course launches"}
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
              <span>{isTranslated ? "返回首页" : "Back to Home"}</span>
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
