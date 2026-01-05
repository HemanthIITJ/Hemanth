/*
 * TECHNICAL DEEP DIVE COMPONENT - LLM & AGENTIC AI CAPABILITIES
 * 
 * Purpose: Showcase advanced technical expertise in:
 * - Foundation model training
 * - Production inference optimization
 * - TPU/GPU distributed training
 * - Agentic AI and multi-agent systems
 * 
 * Visual Design:
 * - Tab-based navigation for capability categories
 * - Glassmorphism cards for each capability
 * - Expandable sections for detailed information
 * - Technology badges with hover effects
 */

import { useState } from 'react';
import { portfolioData } from '@data/portfolio';
import type { TechnicalCapability } from '@types/portfolio';
import './TechnicalDeepDive.css';

const TechnicalDeepDive = () => {
    const [activeCategory, setActiveCategory] = useState<'training' | 'inference' | 'optimization' | 'agentic'>('training');

    const categories = [
        { id: 'training' as const, label: 'LLM Training', icon: '🧠' },
        { id: 'inference' as const, label: 'Inference Optimization', icon: '⚡' },
        { id: 'optimization' as const, label: 'TPU/GPU Optimization', icon: '🚀' },
        { id: 'agentic' as const, label: 'Agentic AI', icon: '🤖' },
    ];

    const getCapabilitiesByCategory = (category: typeof activeCategory): TechnicalCapability[] => {
        return portfolioData.technicalCapabilities.filter(cap => cap.category === category);
    };

    const renderCapabilityDetails = (capability: TechnicalCapability) => {
        switch (capability.category) {
            case 'training': {
                const trainingCap = capability as Extract<TechnicalCapability, { category: 'training' }>;
                return (
                    <>
                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Architectures</h4>
                            <div className="capability__tags">
                                {trainingCap.architectures.map((arch) => (
                                    <span key={arch} className="badge">{arch}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Loss Functions</h4>
                            <div className="capability__tags">
                                {trainingCap.lossFunctions.map((loss) => (
                                    <span key={loss} className="badge">{loss}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Distributed Strategies</h4>
                            <div className="capability__tags">
                                {trainingCap.distributedStrategies.map((strategy) => (
                                    <span key={strategy} className="badge">{strategy}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__metric">
                            <span className="capability__metric-label">Data Scale:</span>
                            <span className="capability__metric-value">{trainingCap.dataScale}</span>
                        </div>
                    </>
                );
            }

            case 'inference': {
                const inferenceCap = capability as Extract<TechnicalCapability, { category: 'inference' }>;
                return (
                    <>
                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Quantization Techniques</h4>
                            <div className="capability__tags">
                                {inferenceCap.quantization.map((quant) => (
                                    <span key={quant} className="badge">{quant}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Batching Strategies</h4>
                            <div className="capability__tags">
                                {inferenceCap.batchingStrategies.map((batch) => (
                                    <span key={batch} className="badge">{batch}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Latency Optimizations</h4>
                            <div className="capability__tags">
                                {inferenceCap.latencyOptimizations.map((opt) => (
                                    <span key={opt} className="badge">{opt}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Hardware Targets</h4>
                            <div className="capability__tags">
                                {inferenceCap.hardwareTargets.map((hw) => (
                                    <span key={hw} className="badge">{hw}</span>
                                ))}
                            </div>
                        </div>
                    </>
                );
            }

            case 'optimization': {
                const optCap = capability as Extract<TechnicalCapability, { category: 'optimization' }>;
                return (
                    <>
                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Parallelism Types</h4>
                            <div className="capability__tags">
                                {optCap.parallelismTypes.map((type) => (
                                    <span key={type} className="badge">{type}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Memory Optimizations</h4>
                            <div className="capability__tags">
                                {optCap.memoryOptimizations.map((mem) => (
                                    <span key={mem} className="badge">{mem}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Kernel Optimizations</h4>
                            <div className="capability__tags">
                                {optCap.kernelOptimizations.map((kernel) => (
                                    <span key={kernel} className="badge">{kernel}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Profiling Tools</h4>
                            <div className="capability__tags">
                                {optCap.profilingTools.map((tool) => (
                                    <span key={tool} className="badge">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </>
                );
            }

            case 'agentic': {
                const agenticCap = capability as Extract<TechnicalCapability, { category: 'agentic' }>;
                return (
                    <>
                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Architecture Patterns</h4>
                            <div className="capability__tags">
                                {agenticCap.architecturePatterns.map((pattern) => (
                                    <span key={pattern} className="badge">{pattern}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Tool Integration</h4>
                            <div className="capability__tags">
                                {agenticCap.toolIntegration.map((tool) => (
                                    <span key={tool} className="badge">{tool}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Orchestration Frameworks</h4>
                            <div className="capability__tags">
                                {agenticCap.orchestrationFrameworks.map((framework) => (
                                    <span key={framework} className="badge">{framework}</span>
                                ))}
                            </div>
                        </div>

                        <div className="capability__section section--no-border">
                            <h4 className="capability__section-title">Safety Mechanisms</h4>
                            <div className="capability__tags">
                                {agenticCap.safetyMechanisms.map((safety) => (
                                    <span key={safety} className="badge">{safety}</span>
                                ))}
                            </div>
                        </div>
                    </>
                );
            }
        }
    };

    return (
        <section id="technical" className="section technical">
            <div className="container">
                <div className="section__header">
                    <h2 className="section__title gradient-text">
                        Technical Deep Dive
                    </h2>
                    <p className="section__subtitle">
                        Advanced expertise in LLM training, inference optimization, and agentic AI systems
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="technical__tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`technical__tab ${activeCategory === cat.id ? 'technical__tab--active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <span className="technical__tab-icon">{cat.icon}</span>
                            <span className="technical__tab-label">{cat.label}</span>
                        </button>
                    ))}
                </div>

                {/* Capability Cards */}
                <div className="technical__content">
                    {getCapabilitiesByCategory(activeCategory).map((capability) => (
                        <div key={capability.id} className="capability glass">
                            <div className="capability__header">
                                <h3 className="capability__title">{capability.title}</h3>
                                <p className="capability__description">{capability.description}</p>
                            </div>

                            {/* Technologies */}
                            <div className="capability__section section--no-border">
                                <h4 className="capability__section-title">Technologies</h4>
                                <div className="capability__tags">
                                    {capability.technologies.map((tech) => (
                                        <span key={tech} className="badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Category-specific details */}
                            {renderCapabilityDetails(capability)}

                            {/* Achievements */}
                            <div className="capability__section section--no-border">
                                <h4 className="capability__section-title">Key Achievements</h4>
                                <ul className="capability__achievements">
                                    {capability.achievements.map((achievement, idx) => (
                                        <li key={idx} className="capability__achievement">
                                            <span className="capability__achievement-icon">✓</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalDeepDive;
