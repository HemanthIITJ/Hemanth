import { featuredResearch } from '../data/portfolio';
import { Icon } from './Icon';

export function ResearchFeature() {
  return <article className="research-feature" aria-labelledby="featured-research-title">
    <div className="research-feature-mark" aria-hidden="true">
      <span className="research-feature-brand"><Icon name="graph" size={24} />AutonomyAtlas</span>
      <span className="research-feature-monogram">AS<span>.</span></span>
      <div className="research-feature-concepts"><span>Context</span><span>Memory</span><span>Control</span></div>
    </div>
    <div className="research-feature-content">
      <span className="research-feature-kind"><Icon name="book" size={17} />{featuredResearch.kind}<span>{featuredResearch.status}</span></span>
      <h3 id="featured-research-title">{featuredResearch.title}</h3>
      <p className="research-feature-subtitle">{featuredResearch.subtitle}</p>
      <p className="research-feature-description">{featuredResearch.description}</p>
      <div className="research-feature-topics">{featuredResearch.topics.map(topic => <span key={topic}>{topic}</span>)}</div>
      <div className="research-feature-actions">
        <a className="button button-primary" href={featuredResearch.url} target="_blank" rel="noopener noreferrer">Read monograph<Icon name="arrowUp" size={17} /></a>
        <a className="inline-link" href={featuredResearch.sourceUrl} target="_blank" rel="noopener noreferrer"><Icon name="github" size={17} />View source</a>
      </div>
    </div>
  </article>;
}
