/* CONTACT SECTION - Updated: Removed phone, fixed location, updated years */

import { portfolioData } from '@data/portfolio';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">Get In Touch</h2>
                    <p className="section__subtitle">
                        Open to collaboration opportunities in AI/ML research and development
                    </p>
                </div>

                <div className="contact__grid">
                    {/* Contact Information */}
                    <div className="contact__info glass">
                        <h3 className="contact__info-title">Contact Information</h3>

                        <div className="contact__item">
                            <div className="contact__item-icon">📪</div>
                            <div className="contact__item-content">
                                <div className="contact__item-label">Email</div>
                                <a href={`mailto:${portfolioData.personal.email}`} className="contact__item-value">
                                    {portfolioData.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className="contact__item">
                            <div className="contact__item-icon">📍</div>
                            <div className="contact__item-content">
                                <div className="contact__item-label">Location</div>
                                <div className="contact__item-value">{portfolioData.personal.location}</div>
                            </div>
                        </div>

                        <div className="contact__social">
                            <a
                                href={portfolioData.personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary"
                            >
                                LinkedIn
                            </a>
                            {portfolioData.personal.github.map((url, idx) => (
                                <a
                                    key={idx}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--secondary"
                                >
                                    GitHub {idx > 0 ? '(AI)' : '(Main)'}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Summary */}
                    <div className="contact__summary glass">
                        <h3 className="contact__summary-title">Areas of Expertise</h3>
                        <ul className="contact__expertise">
                            <li>🧠 Large Language Models (Fine-tuning, RLHF, RAG)</li>
                            <li>🤖 Agentic AI & Multi-Agent Systems</li>
                            <li>⚡ Model Quantization & Inference Optimization</li>
                            <li>🚀 TPU/GPU Distributed Training</li>
                            <li>🔒 Adversarial Robustness & Security</li>
                            <li>🎤 Speaker Recognition & Signal Processing</li>
                        </ul>

                        <div className="contact__stats">
                            <div className="contact__stat">
                                <div className="contact__stat-value">3+</div>
                                <div className="contact__stat-label">Years Experience</div>
                            </div>
                            <div className="contact__stat">
                                <div className="contact__stat-value">8.34</div>
                                <div className="contact__stat-label">CGPA (IIT-J)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
