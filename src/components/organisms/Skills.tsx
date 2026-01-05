/*
 * SKILLS INFINITE MARQUEE - WORKING VERSION
 * Continuous auto-scrolling badges with alternating directions
 * FIXED: Proper duplication for seamless infinite scrolling
 */

import { portfolioData } from '@data/portfolio';
import './Skills.css';

const Skills = () => {
    // Group skills by actual categories
    const programmingSkills = portfolioData.skills
        .filter(cat => cat.category === 'Programming Languages')
        .flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));

    const mlFrameworks = portfolioData.skills
        .filter(cat => cat.category === 'ML/AI Frameworks')
        .flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));

    const llmSkills = portfolioData.skills
        .filter(cat => cat.category === 'LLM Specializations')
        .flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));

    const infraSkills = portfolioData.skills
        .filter(cat => cat.category === 'Infrastructure & MLOps')
        .flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));

    const researchSkills = portfolioData.skills
        .filter(cat => cat.category === 'Research Domains')
        .flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));

    // Get proper icon mappings
    const getIcon = (category: string) => {
        const cat = portfolioData.skills.find(c => c.category === category);
        return cat?.icon || '●';
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">Skills & Expertise</h2>
                    <p className="section__subtitle">
                        Technical proficiency across programming, ML/AI frameworks, and infrastructure
                    </p>
                </div>

                {/* Programming Languages - LTR */}
                <div className="skills__marquee-wrapper">
                    <div className="marquee__category">Programming Languages</div>
                    <div className="skills__marquee marquee--ltr">
                        <div className="marquee__track">
                            {/* Triple duplication for seamless loop */}
                            {[...programmingSkills, ...programmingSkills, ...programmingSkills].map((skill, idx) => (
                                <div key={`prog-${idx}`} className="skill-badge">
                                    <span className="skill-badge__icon-wrapper">
                                        <svg className="skill-badge__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3L4 7L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 3L20 7L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span className="skill-badge__name">{skill.name}</span>
                                    <span className="skill-badge__proficiency">{skill.proficiency}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ML/AI Frameworks - RTL */}
                <div className="skills__marquee-wrapper">
                    <div className="marquee__category">ML/AI Frameworks</div>
                    <div className="skills__marquee marquee--rtl">
                        <div className="marquee__track">
                            {[...mlFrameworks, ...mlFrameworks, ...mlFrameworks].map((skill, idx) => (
                                <div key={`ml-${idx}`} className="skill-badge">
                                    <span className="skill-badge__icon-wrapper">
                                        <svg className="skill-badge__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
                                            <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 7V12L5 17M12 12L19 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </span>
                                    <span className="skill-badge__name">{skill.name}</span>
                                    <span className="skill-badge__proficiency">{skill.proficiency}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* LLM Specializations - LTR */}
                <div className="skills__marquee-wrapper">
                    <div className="marquee__category">LLM Specializations</div>
                    <div className="skills__marquee marquee--ltr">
                        <div className="marquee__track">
                            {[...llmSkills, ...llmSkills, ...llmSkills].map((skill, idx) => (
                                <div key={`llm-${idx}`} className="skill-badge">
                                    <span className="skill-badge__icon-wrapper">
                                        <svg className="skill-badge__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span className="skill-badge__name">{skill.name}</span>
                                    <span className="skill-badge__proficiency">{skill.proficiency}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Infrastructure - RTL */}
                <div className="skills__marquee-wrapper">
                    <div className="marquee__category">Infrastructure & MLOps</div>
                    <div className="skills__marquee marquee--rtl">
                        <div className="marquee__track">
                            {[...infraSkills, ...infraSkills, ...infraSkills].map((skill, idx) => (
                                <div key={`infra-${idx}`} className="skill-badge">
                                    <span className="skill-badge__icon-wrapper">
                                        <svg className="skill-badge__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                                            <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                                            <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                                            <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </span>
                                    <span className="skill-badge__name">{skill.name}</span>
                                    <span className="skill-badge__proficiency">{skill.proficiency}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Research Domains - LTR */}
                <div className="skills__marquee-wrapper">
                    <div className="marquee__category">Research Domains</div>
                    <div className="skills__marquee marquee--ltr">
                        <div className="marquee__track">
                            {[...researchSkills, ...researchSkills, ...researchSkills].map((skill, idx) => (
                                <div key={`research-${idx}`} className="skill-badge">
                                    <span className="skill-badge__icon-wrapper">
                                        <svg className="skill-badge__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                            <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="2" />
                                        </svg>
                                    </span>
                                    <span className="skill-badge__name">{skill.name}</span>
                                    <span className="skill-badge__proficiency">{skill.proficiency}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
