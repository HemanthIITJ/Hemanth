/*
 * PROJECTS SHOWCASE - PREMIUM GRID & CURSOR GLOW
 * Timeline with interactive spotlight following cursor
 */

import { portfolioData } from '@data/portfolio';
import { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
    const glowRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const glow = glowRef.current;

        if (!section || !glow) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update glow position
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        };

        section.addEventListener('mousemove', handleMouseMove);

        return () => {
            section.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="projects" className="section projects" ref={sectionRef}>
            {/* Cursor-following glow */}
            <div className="cursor-glow" ref={glowRef}></div>

            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">Featured Projects</h2>
                    <p className="section__subtitle">
                        Flagship projects in LLMs, agentic AI, and adversarial robustness
                    </p>
                </div>

                {/* Premium timeline-style showcase */}
                <div className="projects__timeline">
                    {portfolioData.projects.map((project, idx) => (
                        <article
                            key={project.id}
                            className={`project-entry ${idx % 2 === 0 ? 'align-left' : 'align-right'}`}
                        >
                            {/* Timeline connector */}
                            <div className="project__connector">
                                <div className="connector__line"></div>
                                <div className="connector__dot"></div>
                            </div>

                            {/* Project content */}
                            <div className="project__content">
                                {/* Header with category badge */}
                                <div className="project__header">
                                    <span className="project__badge">{project.category}</span>
                                    <div className="project__meta">
                                        <span className="project__org">{project.organization}</span>
                                        <span className="project__separator">•</span>
                                        <span className="project__duration">{project.duration}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="project__title">{project.title}</h3>

                                {/* Description */}
                                <ul className="project__description">
                                    {project.description.map((desc, didx) => (
                                        <li key={didx}>{desc}</li>
                                    ))}
                                </ul>

                                {/* Metrics grid */}
                                {project.metrics && (
                                    <div className="project__metrics">
                                        {project.metrics.map((metric, midx) => (
                                            <div key={midx} className="metric-card">
                                                <div className="metric-card__value">{metric.value}</div>
                                                <div className="metric-card__label">{metric.label}</div>
                                                {metric.improvement && (
                                                    <div className="metric-card__improvement">↑ {metric.improvement}</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Technologies */}
                                <div className="project__technologies">
                                    {project.technologies.slice(0, 8).map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                {/* Impact statement */}
                                <div className="project__impact">
                                    <svg className="impact__icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                    <p>{project.impact}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
