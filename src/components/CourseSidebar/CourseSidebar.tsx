import React from 'react';
import './CourseSidebar.css';
import { BookOpen, CheckCircle, Lock } from 'lucide-react';

interface CourseSidebarProps {
  currentSection: number;
  completedSections: number[];
  onSectionChange: (sectionId: number) => void;
  isTranslated: boolean;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ 
  currentSection, 
  completedSections, 
  onSectionChange,
  isTranslated
}) => {
  const sections = [
    { 
      id: 1, 
      title: isTranslated ? '美国市场与文化分析' : 'US Market & Cultural Analysis',
      subtitle: isTranslated ? '了解美国市场与规模' : 'Understanding the US Market & Scale'
    },
    { 
      id: 2, 
      title: isTranslated ? '中文解构框架' : 'Mandarin Deconstruction Framework',
      subtitle: isTranslated ? '学习如何解构中文标语' : 'Learn to deconstruct Mandarin taglines'
    },
    { 
      id: 3, 
      title: isTranslated ? '输入输出转换' : 'Input-to-Output Transformation',
      subtitle: isTranslated ? '中文到英文的转换流程' : 'Mandarin to English transformation'
    },
    { 
      id: 4, 
      title: isTranslated ? '互动练习与掌握' : 'Interactive Practice & Mastery',
      subtitle: isTranslated ? '实践练习与技能掌握' : 'Practice exercises and skill mastery'
    },
  ];

  const progressPercentage = (completedSections.length / sections.length) * 100;

  const handleSectionClick = (sectionId: number) => {
    if (sectionId === 1) {
      onSectionChange(sectionId);
    }
    // Sections 2-4 are locked for now
  };

  return (
    <div className="course-sidebar">
      <div className="sidebar-header">
        <BookOpen size={24} />
        <h2>{isTranslated ? '课程内容' : 'Course Content'}</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {sections.map((section, index) => (
            <li 
              key={section.id} 
              className={`${completedSections.includes(section.id) ? 'completed' : ''} ${currentSection === section.id ? 'active' : ''} ${section.id > 1 ? 'locked' : ''}`}
              onClick={() => handleSectionClick(section.id)}
            >
              <div className="section-number">
                {section.id > 1 ? <Lock size={14} /> : index + 1}
              </div>
              <div className="section-info">
                <span className="section-title-text">{section.title}</span>
                <span className="section-subtitle">{section.subtitle}</span>
              </div>
              {completedSections.includes(section.id) && <CheckCircle size={16} className="completed-icon" />}
              {section.id > 1 && <span className="locked-label">{isTranslated ? '预览' : 'Preview'}</span>}
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>{isTranslated ? '进度' : 'Progress'}: {Math.round(progressPercentage)}%</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="preview-note">{isTranslated ? '仅第1节可用，其余为预览' : 'Only Section 1 available, others are preview'}</p>
      </div>
    </div>
  );
};

export default CourseSidebar;
