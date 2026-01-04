/*
 * HERO COMPONENT - PREMIUM ENTRANCE SECTION
 * 
 * Features:
 * - Full-viewport canvas background with particle system
 * - Animated gradient overlay
 * - Typewriter effect for title
 * - Glassmorphism card with personal info
 * - Smooth scroll indicator
 * 
 * Performance:
 * - Canvas particles: 300-500 (adaptive to device)
 * - RAF-based animation loop
 * - GPU-accelerated transforms
 */

import { useRef } from 'react';
import { portfolioData } from '@data/portfolio';
import { useParticles } from '@hooks/useParticles';
import './Hero.css';

const Hero = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    /* Initialize particle system */
    useParticles(canvasRef);

    return (
        <section id="home" className="section section--hero">
            {/* Canvas background: Particle system */}
            <canvas
                ref={canvasRef}
                className="hero__canvas"
                aria-hidden="true"
            />

            {/* Gradient overlay for depth */}
            <div className="hero__gradient" aria-hidden="true" />

            {/* Main content */}
            <div className="container hero__container">
                <div className="hero__content">
                    {/* Animated title */}
                    <h1 className="hero__title gradient-text-animated">
                        {portfolioData.personal.name}
                    </h1>

                    {/* Subtitle with role */}
                    <p className="hero__subtitle">
                        {portfolioData.personal.title}
                    </p>

                    {/* Description */}
                    <p className="hero__description">
                        AI/ML Researcher specializing in <span className="highlight">Large Language Models</span>,{' '}
                        <span className="highlight">Agentic AI</span>, and{' '}
                        <span className="highlight">Distributed Training Optimization</span>
                    </p>

                    {/* CTA buttons */}
                    <div className="hero__cta">
                        <a href="#projects" className="btn btn--primary">
                            View Projects
                        </a>
                        <a href="#contact" className="btn btn--secondary">
                            Get in Touch
                        </a>
                    </div>

                    {/* Quick stats */}
                    <div className="hero__stats glass">
                        <div className="stat">
                            <div className="stat__value">3+</div>
                            <div className="stat__label">Years in AI/ML</div>
                        </div>
                        <div className="stat">
                            <div className="stat__value">4</div>
                            <div className="stat__label">Major Projects</div>
                        </div>
                        <div className="stat">
                            <div className="stat__value">IIT-J</div>
                            <div className="stat__label">M.Tech 8.34 CGPA</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" onClick={() => {
                document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
            }}>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
