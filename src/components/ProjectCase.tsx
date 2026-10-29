import type { Project } from '../data/portfolio';
import { Icon } from './Icon';

export function ProjectCase({ project, number }: { project: Project; number: number }) {
  return <article className={`project-case${project.id === 'trainscale' ? ' project-case--featured' : ''}`}>
    <header className="project-case__overview">
      <div className="project-case__meta"><span>{String(number).padStart(2, '0')} / {project.kind}</span><span>{project.status}</span></div>
      <h3>{project.name}</h3>
      <p className="project-case__summary">{project.summary}</p>
      <p className="project-case__stack"><span>Implementation stack</span>{project.stack.join(' · ')}</p>
      <div className="project-case__links">
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} repository`}><Icon name="github" size={17} />Repository<Icon name="arrowUp" size={14} /></a>
        {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} implementation source`}>Implementation source<Icon name="arrowUp" size={14} /></a>}
      </div>
    </header>
    <div className="project-case__implementation">
      <h4>Inside the implementation</h4>
      <ol>{project.implementation.map((step, index) => <li key={step.title}>
        <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
        <div><h5>{step.title}</h5><p>{step.description}</p></div>
      </li>)}</ol>
    </div>
  </article>;
}
