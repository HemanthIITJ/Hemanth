/* EXPERIENCE COMPONENT - Fixed visibility */

import { portfolioData } from '@data/portfolio';
import './Experience.css';
import PremiumFiller from '../atoms/PremiumFiller';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">Work Experience</h2>
                    <p className="section__subtitle">
                        Professional journey in AI/ML research and development
                    </p>
                </div>

                <div className="timeline">
                    {portfolioData.experience.map((exp, idx) => {
                        const isEven = idx % 2 !== 0; // index is 0-based
                        const variant = idx % 2 === 0 ? 'watch' : 'schematic';

                        return (
                            <div key={exp.id} className={`timeline-row ${isEven ? 'row-even' : 'row-odd'}`}>
                                {/* LEFT SIDE */}
                                <div className="timeline-col left-col">
                                    {isEven ? (
                                        <div className="timeline__item glass hover-lift">
                                            {/* CONTENT (same as before) */}
                                            <div className="timeline__content">
                                                <div className="exp__header">
                                                    <h3 className="exp__company">{exp.company}</h3>
                                                    <span className="exp__duration">{exp.duration}</span>
                                                </div>

                                                <div className="exp__meta">
                                                    <span className="exp__role">{exp.role}</span>
                                                    <span className="exp__location">{exp.location}</span>
                                                </div>

                                                <ul className="exp__responsibilities">
                                                    {exp.responsibilities.slice(0, 6).map((resp, ridx) => (
                                                        <li key={ridx}>{resp}</li>
                                                    ))}
                                                </ul>

                                                <div className="exp__technologies">
                                                    {exp.technologies.slice(0, 8).map((tech) => (
                                                        <span key={tech} className="badge">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <PremiumFiller variant={variant} year={exp.duration.split(' ')[2] || '2024'} />
                                    )}
                                </div>

                                {/* CENTER LINE MARKER */}
                                <div className="timeline-center">
                                    <div className="timeline__marker"></div>
                                </div>

                                {/* RIGHT SIDE */}
                                <div className="timeline-col right-col">
                                    {!isEven ? (
                                        <div className="timeline__item glass hover-lift">
                                            {/* CONTENT (Duplicated structure for logic simplicity or componentized ideally) */}
                                            <div className="timeline__content">
                                                <div className="exp__header">
                                                    <h3 className="exp__company">{exp.company}</h3>
                                                    <span className="exp__duration">{exp.duration}</span>
                                                </div>

                                                <div className="exp__meta">
                                                    <span className="exp__role">{exp.role}</span>
                                                    <span className="exp__location">{exp.location}</span>
                                                </div>

                                                <ul className="exp__responsibilities">
                                                    {exp.responsibilities.slice(0, 6).map((resp, ridx) => (
                                                        <li key={ridx}>{resp}</li>
                                                    ))}
                                                </ul>

                                                <div className="exp__technologies">
                                                    {exp.technologies.slice(0, 8).map((tech) => (
                                                        <span key={tech} className="badge">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <PremiumFiller variant={variant} year={exp.duration.split(' ')[2] || '2024'} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
