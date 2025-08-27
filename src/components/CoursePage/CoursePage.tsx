import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import './CoursePage.css';

const CoursePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [completedSections, setCompletedSections] = useState([1]);

  const sectionNames = {
    1: "US Market & Cultural Analysis",
    2: "Mandarin Deconstruction Framework", 
    3: "Input-to-Output Transformation",
    4: "Interactive Practice & Mastery"
  };

  const handleSectionComplete = (sectionId: number) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
    // Auto-advance to next section
    if (sectionId < 4) {
      setCurrentSection(sectionId + 1);
    }
  };

  const renderSectionContent = () => {
    switch (currentSection) {
      case 1:
        return <Section1 onComplete={() => handleSectionComplete(1)} />;
      case 2:
        return <Section2 onComplete={() => handleSectionComplete(2)} />;
      case 3:
        return <Section3 onComplete={() => handleSectionComplete(3)} />;
      case 4:
        return <Section4 onComplete={() => handleSectionComplete(4)} />;
      default:
        return <Section1 onComplete={() => handleSectionComplete(1)} />;
    }
  };

  return (
    <div className="course-page">
      <CourseSidebar 
        currentSection={currentSection}
        completedSections={completedSections}
        onSectionChange={setCurrentSection}
      />
      <div className="course-content-area">
        <div className="section-header">
          <div className="header-top">
            <Link to="/" className="back-to-home-btn">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>
            <h1 className="section-title">{sectionNames[currentSection as keyof typeof sectionNames]}</h1>
          </div>
          <div className="section-progress">
            <div className="progress-dots">
              {[1, 2, 3, 4].map((section) => (
                <div 
                  key={section}
                  className={`progress-dot ${section === currentSection ? 'active' : ''} ${completedSections.includes(section) ? 'completed' : ''}`}
                  onClick={() => setCurrentSection(section)}
                />
              ))}
            </div>
          </div>
        </div>
        {renderSectionContent()}
      </div>
    </div>
  );
};

export default CoursePage;
