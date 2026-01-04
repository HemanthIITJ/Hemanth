/* PROJECTS SHOWCASE - Fixed visibility */

import { portfolioData } from '@data/portfolio';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">Featured Projects</h2>
                    <p className="section__subtitle">
                        Flagship projects in LLMs, agentic AI, and adversarial robustness
                    </p>
                </div>

                <div className="projects__grid">
                    {portfolioData.projects.map((project, idx) => (
                        <div key={project.id} className="project-card glass hover-lift">
                            <div className="project__header">
                                <h3 className="project__title">{project.title}</h3>
                                <span className="project__category badge">{project.category}</span>
                            </div>

                            <div className="project__meta">
                                <span className="project__org">{project.organization}</span>
                                <span className="project__duration">{project.duration}</span>
                            </div>

                            <ul className="project__description">
                                {project.description.map((desc, didx) => (
                                    <li key={didx}>{desc}</li>
                                ))}
                            </ul>

                            {project.metrics && (
                                <div className="project__metrics">
                                    {project.metrics.map((metric, midx) => (
                                        <div key={midx} className="metric">
                                            <div className="metric__value">{metric.value}</div>
                                            <div className="metric__label">{metric.label}</div>
                                            {metric.improvement && (
                                                <div className="metric__improvement">↑ {metric.improvement}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="project__technologies">
                                {project.technologies.slice(0, 8).map((tech) => (
                                    <span key={tech} className="badge">{tech}</span>
                                ))}
                            </div>

                            <div className="project__impact">
                                <strong>Impact:</strong> {project.impact}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
