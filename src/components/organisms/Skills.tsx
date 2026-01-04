/* SKILLS MATRIX - Fixed visibility */

import { portfolioData } from '@data/portfolio';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">Skills & Expertise</h2>
                    <p className="section__subtitle">
                        Technical proficiency across programming, ML/AI frameworks, and infrastructure
                    </p>
                </div>

                <div className="skills__grid">
                    {portfolioData.skills.map((category, idx) => (
                        <div key={category.category} className="skill-category glass hover-lift">
                            <div className="skill-category__header">
                                <span className="skill-category__icon">{category.icon}</span>
                                <h3 className="skill-category__title">{category.category}</h3>
                            </div>

                            <div className="skill-category__items">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skill">
                                        <div className="skill__header">
                                            <span className="skill__name">{skill.name}</span>
                                            <span className="skill__proficiency">{skill.proficiency}%</span>
                                        </div>
                                        <div className="skill__bar">
                                            <div
                                                className="skill__bar-fill"
                                                style={{ width: `${skill.proficiency}%` }}
                                            />
                                        </div>
                                        {skill.yearsOfExperience && (
                                            <span className="skill__experience">
                                                {skill.yearsOfExperience}+ years
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
