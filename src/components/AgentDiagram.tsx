import { useState } from 'react';
import { Icon, type IconName } from './Icon';

const stages: { id: string; title: string; label: string; icon: IconName; heading: string; description: string; tags: string[] }[] = [
  { id: 'context', title: 'Memory & context', label: 'Context engineering', icon: 'memory', heading: 'Give the next decision the right evidence.', description: 'Persistent state, selective retrieval, and context construction connect what an agent knows with what it needs now.', tags: ['Persistent memory', 'Context lifecycle'] },
  { id: 'tools', title: 'Tools & policy', label: 'Agent control', icon: 'shield', heading: 'Make the boundaries executable.', description: 'Tool contracts, permission gates, and resource budgets put explicit constraints around the actions a model proposes.', tags: ['Tool contracts', 'Action boundaries'] },
  { id: 'verify', title: 'Verify & recover', label: 'Reliable execution', icon: 'check', heading: 'Check the outcome. Keep a recovery path.', description: 'Verification, bounded repair, and rollback make completion a system decision, supported by evidence.', tags: ['Verification', 'Recovery'] },
  { id: 'state', title: 'Graphs & loops', label: 'Graph & loop engineering', icon: 'graph', heading: 'Keep the work connected to its state.', description: 'Workflow and knowledge graphs connect dependencies, memory, and controlled execution across longer tasks.', tags: ['Workflow graphs', 'State transitions'] },
];

export function AgentDiagram() {
  const [active, setActive] = useState(0);
  const current = stages[active];

  return <figure className="architecture">
    <div className="architecture-top"><span className="micro">THE SYSTEM AROUND THE MODEL</span><span className="architecture-symbol" aria-hidden="true">↗</span></div>
    <div className="system-map" aria-label="Explore four parts of an agent harness">
      <svg className="system-connections" viewBox="0 0 440 320" aria-hidden="true">
        <defs><pattern id="map-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="currentColor" opacity=".2" /></pattern></defs>
        <rect x="0" y="0" width="440" height="320" fill="url(#map-dots)" />
        <path className={active === 0 ? 'connection is-active' : 'connection'} d="M220 72v52" />
        <path className={active === 1 ? 'connection is-active' : 'connection'} d="M126 160h54" />
        <path className={active === 2 ? 'connection is-active' : 'connection'} d="M260 160h54" />
        <path className={active === 3 ? 'connection is-active' : 'connection'} d="M220 200v50" />
        <path className="connection-return" d="M70 190v80q0 15 15 15h80M370 130V50q0-15-15-15h-80" />
        <circle cx="220" cy="101" r="3" className={active === 0 ? 'point is-active' : 'point'} />
        <circle cx="153" cy="160" r="3" className={active === 1 ? 'point is-active' : 'point'} />
        <circle cx="287" cy="160" r="3" className={active === 2 ? 'point is-active' : 'point'} />
        <circle cx="220" cy="225" r="3" className={active === 3 ? 'point is-active' : 'point'} />
      </svg>
      <div className="model-core"><span className="model-core-mark" aria-hidden="true">∴</span><strong>Model</strong><span>proposes</span></div>
      {stages.map((stage, index) => <button key={stage.id} type="button" className={`system-node node-${stage.id} ${active === index ? 'is-active' : ''}`} aria-pressed={active === index} onClick={() => setActive(index)}>
        <Icon name={stage.icon} size={17} /><span>{stage.title}</span>
      </button>)}
      <span className="map-boundary">HARNESS / EXECUTION BOUNDARY</span>
    </div>
    <figcaption className="architecture-detail" aria-live="polite" aria-atomic="true">
      <div className="architecture-detail-top"><span className="micro">{current.label}</span><span className="mono">0{active + 1} / 04</span></div>
      <h3>{current.heading}</h3><p>{current.description}</p>
      <div className="diagram-tags">{current.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </figcaption>
    <span className="diagram-note">A reference architecture for my research focus.</span>
  </figure>;
}
