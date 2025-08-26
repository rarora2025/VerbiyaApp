import React from 'react';
import './CourseSidebar.css';
import { BookOpen, CheckCircle } from 'lucide-react';

interface CourseSidebarProps {
  currentSection: number;
  completedSections: number[];
  onSectionChange: (sectionId: number) => void;
}

const CourseSidebar: React.FC<CourseSidebarProps> = ({ 
  currentSection, 
  completedSections, 
  onSectionChange 
}) => {
  const sections = [
    { id: 1, title: 'US Market & Cultural Analysis' },
    { id: 2, title: 'Mandarin Deconstruction Framework' },
    { id: 3, title: 'Input-to-Output Transformation' },
    { id: 4, title: 'Interactive Practice & Mastery' },
  ];

  const progressPercentage = (completedSections.length / sections.length) * 100;

  return (
    <div className="course-sidebar">
      <div className="sidebar-header">
        <BookOpen size={24} />
        <h2>Course Content</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {sections.map((section, index) => (
            <li 
              key={section.id} 
              className={`${completedSections.includes(section.id) ? 'completed' : ''} ${currentSection === section.id ? 'active' : ''}`}
              onClick={() => onSectionChange(section.id)}
            >
              <div className="section-number">{index + 1}</div>
              <span className="section-title-text">{section.title}</span>
              {completedSections.includes(section.id) && <CheckCircle size={16} className="completed-icon" />}
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>Progress: {Math.round(progressPercentage)}%</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebar;
