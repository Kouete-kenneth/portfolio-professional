import React from 'react';
import './home-skill.scss'; // Import your magical SCSS file here
import { useTheme } from '../../../Themes/themeContext';

const HomeSkills = () => {
    const skills = [
      { name: 'MERN', description: 'MERN stack mastery for spellbinding web applications.' },
      { name: 'Cloud', description: 'Harnessing the power of Huawei cloud for mystical scalability.' },
      { name: 'Frontend', description: 'Crafting captivating user interfaces with enchanting designs.' },
      { name: 'Backend', description: 'Building robust server-side solutions with magical efficiency.' },
      { name: 'Database', description: 'Creating spellbinding data structures for seamless information flow.' },
      { name: 'Deployment', description: 'Launching projects into the digital ether with seamless precision.' },
    ];
  
    return (
      <div className="enchanted-skills">
        {/* Main Title */}
        <h1 className="main-title">Enchanted Skills Showcase</h1>
        {/* Comment */}
        <p className="comment">Explore the mystical realms of expertise below:</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default HomeSkills;
