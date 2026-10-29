import { expertise } from '../data/portfolio';
import { Icon } from './Icon';
import './ExpertisePanel.css';

export function ExpertisePanel() {
  return <div className="capability-ledger">
    <div className="capability-ledger__head" aria-hidden="true">
      <span>Practice</span><span>Mechanisms & concrete work</span><span>Inspect the evidence</span>
    </div>
    <ol className="capability-ledger__rows">
      {expertise.map((area, index) => <li className="capability-row" key={area.id}>
        <div className="capability-row__title">
          <span className="capability-row__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <h3>{area.title}</h3>
        </div>
        <div className="capability-row__mechanisms">
          <p>{area.mechanisms}</p>
          <p className="capability-row__work">{area.work}</p>
        </div>
        <ul className="capability-row__evidence" aria-label={`${area.title} public evidence`}>
          {area.evidence.map(source => <li key={source.url}>
            <span>{source.kind}</span>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<Icon name="arrowUp" size={15} /></a>
          </li>)}
        </ul>
      </li>)}
    </ol>
  </div>;
}
