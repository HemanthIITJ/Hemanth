/*
 * TECHNICAL CAPABILITIES - DARK CIRCUIT BOARD THEME
 * Organized grid layout matching AI model design
 * Pure CSS, browser-independent
 */

import { portfolioData } from '@data/portfolio';
import { useState } from 'react';
import './TechnicalCapabilities.css';
import type { TrainingCapability, InferenceCapability, OptimizationCapability, AgenticCapability } from '../types/portfolio';

const TechnicalCapabilities = () => {
    const [activeTab, setActiveTab] = useState(0);

    const renderSectionGrid = (capability: any) => {
        const sections: { title: string; tags: string[] }[] = [];

        // Add Technologies
        sections.push({
            title: 'TECHNOLOGIES',
            tags: capability.technologies
        });

        // Category-specific sections
        if (capability.category === 'training') {
            const trainCap = capability as TrainingCapability;
            sections.push(
                { title: 'ARCHITECTURES', tags: trainCap.architectures },
                { title: 'LOSS FUNCTIONS', tags: trainCap.lossFunctions },
                { title: 'DISTRIBUTED STRATEGIES', tags: trainCap.distributedStrategies }
            );
        } else if (capability.category === 'inference') {
            const infCap = capability as InferenceCapability;
            sections.push(
                { title: 'QUANTIZATION', tags: infCap.quantization },
                { title: 'BATCHING STRATEGIES', tags: infCap.batchingStrategies },
                { title: 'LATENCY OPTIMIZATIONS', tags: infCap.latencyOptimizations },
                { title: 'HARDWARE TARGETS', tags: infCap.hardwareTargets }
            );
        } else if (capability.category === 'optimization') {
            const optCap = capability as OptimizationCapability;
            sections.push(
                { title: 'PARALLELISM TYPES', tags: optCap.parallelismTypes },
                { title: 'MEMORY OPTIMIZATIONS', tags: optCap.memoryOptimizations },
                { title: 'KERNEL OPTIMIZATIONS', tags: optCap.kernelOptimizations },
                { title: 'PROFILING TOOLS', tags: optCap.profilingTools }
            );
        } else if (capability.category === 'agentic') {
            const agentCap = capability as AgenticCapability;
            sections.push(
                { title: 'ARCHITECTURE PATTERNS', tags: agentCap.architecturePatterns },
                { title: 'TOOL INTEGRATION', tags: agentCap.toolIntegration },
                { title: 'ORCHESTRATION FRAMEWORKS', tags: agentCap.orchestrationFrameworks },
                { title: 'SAFETY MECHANISMS', tags: agentCap.safetyMechanisms }
            );
        }

        return sections;
    };

    return (
        <section id="technical-capabilities" className="section technical-capabilities">
            {/* Circuit Board Background */}
            <div className="circuit-background"></div>

            <div className="container">
                <div className="section__header">
                    <h2 className="section__title technical-deep-dive-title">Technical Deep Dive</h2>
                    <p className="section__subtitle">
                        Advanced expertise in LLM training, inference optimization, and agentic AI systems
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="capability-tabs">
                    {portfolioData.technicalCapabilities.map((cap, idx) => (
                        <button
                            key={cap.id}
                            className={`capability-tab ${activeTab === idx ? 'active' : ''}`}
                            onClick={() => setActiveTab(idx)}
                        >
                            {cap.title}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="capability-content">
                    {portfolioData.technicalCapabilities.map((capability, idx) => (
                        <div
                            key={capability.id}
                            className={`capability-panel ${activeTab === idx ? 'active' : ''}`}
                        >
                            {/* Main Card */}
                            <div className="capability-card">
                                <h3 className="capability-card__title">{capability.title}</h3>
                                <p className="capability-card__description">{capability.description}</p>

                                {/* GRID LAYOUT for Sections */}
                                <div className="capability-sections-grid">
                                    {renderSectionGrid(capability).map((section, sidx) => (
                                        <div key={sidx} className="capability-section">
                                            <h4 className="capability-section__title">{section.title}</h4>
                                            <div className="capability-tags">
                                                {section.tags.map((tag) => (
                                                    <span key={tag} className="capability-tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* KEY ACHIEVEMENTS */}
                                    <div className="capability-section achievements-section">
                                        <h4 className="capability-section__title">KEY ACHIEVEMENTS</h4>
                                        <ul className="achievements-list">
                                            {capability.achievements.map((achievement, aidx) => (
                                                <li key={aidx} className="achievement-item">
                                                    <svg className="achievement-icon" viewBox="0 0 24 24" fill="none">
                                                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Data Scale for Training */}
                                {capability.category === 'training' && (
                                    <div className="data-scale">
                                        Trained on datasets ranging from <span className="highlight">10M to 1B+ tokens</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalCapabilities;
