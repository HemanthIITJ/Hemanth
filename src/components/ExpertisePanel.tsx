import { expertise } from '../data/portfolio';
import { Icon, type IconName } from './Icon';
import './ExpertisePanel.css';

interface GroupPresentation {
  icon: IconName;
  description: string;
}

const presentationByTitle: Record<string, GroupPresentation> = {
  'Harness & control': {
    icon: 'shield',
    description: 'Bound agent actions and verify outcomes.',
  },
  'Memory & graph systems': {
    icon: 'graph',
    description: 'Carry useful state and connect task dependencies.',
  },
  'Model development': {
    icon: 'layers',
    description: 'Adapt models through reproducible training workflows.',
  },
  'GPU & inference': {
    icon: 'memory',
    description: 'Connect kernel-level work with serving constraints.',
  },
  'Engineering & evaluation': {
    icon: 'code',
    description: 'Inspect code and test system behavior.',
  },
};

export function ExpertisePanel() {
  return (
    <div className="expertise-grid">
      {expertise.map(group => {
        const presentation = presentationByTitle[group.title] ?? {
          icon: 'code' as IconName,
          description: 'Methods and tools used across research and engineering.',
        };

        return (
          <article className="expertise-card" key={group.title}>
            <div className="expertise-card__header">
              <span className="expertise-card__symbol" aria-hidden="true">
                <Icon name={presentation.icon} size={22} />
              </span>
              <h3>{group.title}</h3>
            </div>
            <p className="expertise-card__description">{presentation.description}</p>
            <ul className="expertise-card__tools" aria-label={`${group.title} methods and tools`}>
              {group.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </article>
        );
      })}
    </div>
  );
}
