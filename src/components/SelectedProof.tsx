import { featuredResearch, projects } from '../data/portfolio';
import { Icon, type IconName } from './Icon';

export function SelectedProof() {
  const items: { title: string; detail: string; icon: IconName; url: string }[] = [
    { title: 'TrainScale', detail: 'Model training infrastructure', icon: 'layers', url: projects.find(project => project.id === 'trainscale')!.url },
    { title: 'SDKAtlas', detail: 'Static SDK analysis', icon: 'code', url: projects.find(project => project.id === 'sdkatlas')!.url },
    { title: 'Agentic State', detail: 'Research synthesis · Monograph', icon: 'book', url: featuredResearch.url },
  ];

  return <div className="proof-strip container" aria-label="Selected engineering and research">
    {items.map(item => <a className="proof-card" key={item.title} href={item.url} target="_blank" rel="noopener noreferrer">
      <span className="proof-card-icon"><Icon name={item.icon} size={23} /></span>
      <span className="proof-card-copy"><strong>{item.title}</strong><span>{item.detail}</span></span>
      <Icon name="arrowUp" size={17} />
    </a>)}
  </div>;
}
