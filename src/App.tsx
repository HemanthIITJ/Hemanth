import { useEffect, useRef, useState } from 'react';
import { AgentDiagram } from './components/AgentDiagram';
import { Icon, type IconName } from './components/Icon';
import { ProfilePortrait, ContactPortrait } from './components/Portrait';
import { education, experience, expertise, profile, projects, researchAreas, writings } from './data/portfolio';

const navItems = [{ id: 'research', label: 'Research' }, { id: 'work', label: 'Work' }, { id: 'writing', label: 'Writing' }, { id: 'experience', label: 'Experience' }];
const filters = ['All work', 'Model systems', 'Developer tools', 'Agent workflows'] as const;
type Filter = typeof filters[number];
const projectFilters: Record<string, Filter> = { trainscale: 'Model systems', sdkatlas: 'Developer tools', neuralskills: 'Agent workflows' };
const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeUrl.replace(/^\//, '')}`;

function ExternalLink({ href, children, className = '', label }: { href: string; children: React.ReactNode; className?: string; label?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>{children}</a>;
}

function SectionHeading({ id, number, eyebrow, title, children }: { id: string; number: string; eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div className="section-label"><span className="section-number">{number}</span><span className="micro">{eyebrow}</span></div><div className="section-heading-main"><h2 id={id}>{title}</h2>{children}</div></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [filter, setFilter] = useState<Filter>('All work');
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: '-12% 0px -55% 0px', threshold: [0, .1, .25] });
    document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onEscape);
    return () => { window.removeEventListener('keydown', onEscape); if (copyTimer.current) clearTimeout(copyTimer.current); };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const visibleProjects = projects.filter(project => filter === 'All work' || projectFilters[project.id] === filter);
  const books = writings.filter(writing => writing.id !== 'engineering-journal');
  const journal = writings.find(writing => writing.id === 'engineering-journal')!;

  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header">
      <div className="container nav-shell">
        <a className="wordmark" href="#home" aria-label="Hemanth Kandimalla, home"><span className="wordmark-symbol" aria-hidden="true">h<span>.</span></span><span>Hemanth Kandimalla</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a href={`#${item.id}`} key={item.id} className={activeSection === item.id ? 'is-active' : ''}>{item.label}</a>)}</nav>
        <a className="nav-contact" href="#contact">Let’s talk <Icon name="arrowUp" size={15} /></a>
        <button type="button" className="mobile-menu-toggle" aria-controls="mobile-nav" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav container" aria-label="Mobile navigation">{[...navItems, { id: 'contact', label: 'Contact' }].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}<Icon name="arrowUp" size={17} /></a>)}</nav>}
    </header>

    <main id="main">
      <section className="hero container" id="home" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-eyebrow"><span className="status-dot" /><span className="micro">{profile.role} / {profile.location}</span></div>
          <h1 id="hero-title">Hemanth<br /><em>Kandimalla.</em></h1>
          <p className="hero-focus">Agent alignment. Control. AI engineering.</p>
          <p className="hero-description">I research the alignment and control of agentic systems, and engineer the models, harnesses, and infrastructure around them.</p>
          <div className="hero-actions"><a href="#work" className="button button-primary">Explore my work <Icon name="arrow" size={18} /></a><a href={resumeHref} className="text-link" target="_blank" rel="noopener noreferrer">Résumé <Icon name="download" size={17} /></a></div>
          <div className="hero-current"><span className="micro">CURRENTLY</span><span>Applied AI Scientist <span className="muted">at</span> Celebal Technologies</span></div>
        </div>
        <ProfilePortrait />
        <div className="hero-footnote"><span>Research questions. Working code. Open writing.</span><a href="#research">A closer look <span aria-hidden="true">↓</span></a></div>
      </section>

      <section id="research" className="section research-section" aria-labelledby="research-title">
        <div className="container">
          <div className="research-overview"><div className="research-overview-copy"><div className="section-label"><span className="section-number">01</span><span className="micro">RESEARCH DIRECTION</span></div><h2 id="research-title">Capability is a starting point.<br /><em>Control is the question.</em></h2><p>My core research focus is agent alignment and control. My engineering work makes those questions concrete through memory, context, graphs, and execution loops.</p></div><AgentDiagram /></div>
          <div className="research-grid">{researchAreas.map((area, index) => <article className="research-item" key={area.id}><div className="research-item-top"><Icon name={(['shield', 'memory', 'graph'] as IconName[])[index]} size={25} /><span className="mono">0{index + 1}</span></div><h3>{area.title}</h3><p>{area.description}</p><ul className="mechanism-list">{area.mechanisms.map(mechanism => <li key={mechanism}><span aria-hidden="true">↳</span>{mechanism}</li>)}</ul></article>)}</div>
          <div className="research-note"><span className="note-marker" aria-hidden="true">↳</span><p>Alongside research, I build the training, inference, and application infrastructure that lets ideas meet real constraints.</p></div>
        </div>
      </section>

      <section id="work" className="section work-section container" aria-labelledby="work-title">
        <SectionHeading id="work-title" number="02" eyebrow="SELECTED OPEN SOURCE" title="Ideas, made inspectable."><p>A selection of systems and tools I’ve built. The source is the most useful place to understand the work.</p></SectionHeading>
        <div className="work-toolbar"><div className="filter-list" aria-label="Filter engineering projects">{filters.map(item => <button key={item} type="button" onClick={() => setFilter(item)} className={filter === item ? 'filter-button is-active' : 'filter-button'} aria-pressed={filter === item}>{item}</button>)}</div><span className="work-count mono" aria-live="polite">{String(visibleProjects.length).padStart(2, '0')} projects</span></div>
        <div className="projects-list">{visibleProjects.map(project => <article className={`project ${project.id === 'trainscale' ? 'project-featured' : ''}`} key={project.id}>
          <div className="project-number mono">{String(projects.indexOf(project) + 1).padStart(2, '0')} /</div>
          <div className="project-content"><div className="project-meta"><span className="micro">{project.kind}</span><span className="project-status">{project.status}</span></div><h3>{project.name}</h3><p className="project-summary">{project.summary}</p><div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div><details className="project-details"><summary>Inside the implementation <Icon name="plus" size={15} /></summary><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>{project.sourceUrl && <ExternalLink href={project.sourceUrl} className="inline-link">Explore the implementation <Icon name="arrowUp" size={14} /></ExternalLink>}</details></div>
          <ExternalLink href={project.url} className="project-repo" label={`View ${project.name} on GitHub`}><Icon name="github" size={22} /><Icon name="arrowUp" size={17} /></ExternalLink>
          {project.id === 'trainscale' && <div className="project-architecture" aria-label="TrainScale workflow"><span className="micro">A REPRODUCIBLE TRAINING PATH</span>{['Data & packing', 'Objectives & adapters', 'Distributed execution', 'Evaluate & checkpoint'].map((item, i) => <div className="training-step" key={item}><span className="mono">0{i + 1}</span>{item}{i < 3 && <span className="training-connector" aria-hidden="true" />}</div>)}</div>}
        </article>)}</div>
      </section>

      <section id="writing" className="section writing-section" aria-labelledby="writing-title">
        <div className="container"><div className="section-heading"><div className="section-label"><span className="section-number">03</span><span className="micro">BOOKS & TECHNICAL WRITING</span></div><div className="section-heading-main"><h2 id="writing-title">Thinking in public.<br /><em>One layer deeper.</em></h2><p>I write to connect mechanisms with the systems around them. These are online technical books and engineering analyses.</p></div></div>
          <div className="books-grid">{books.map((book, index) => <article className={`book-card book-${index + 1}`} key={book.id}>
            <ExternalLink href={book.url} className="book-cover" label={`Read ${book.title}`}><span className="book-cover-top"><span className="micro">NEURAL ATLAS</span><span className="mono">0{index + 1} / 03</span></span><span className="book-cover-title">{book.title}</span><span className={`book-cover-art cover-art-${index + 1}`} aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <span key={i} />)}</span><span className="book-cover-bottom"><span>Hemanth Kandimalla</span><Icon name="arrowUp" size={20} /></span></ExternalLink>
            <div className="book-info"><span className="writing-status"><span />{book.status}</span><p>{book.description}</p><ExternalLink href={book.url} className="inline-link">Read online <Icon name="arrowUp" size={15} /></ExternalLink></div>
          </article>)}</div>
          <article className="journal-feature"><div className="journal-marker" aria-hidden="true">N<span>↗</span></div><div><span className="micro">THE ENGINEERING JOURNAL / ONGOING</span><h3>{journal.title}</h3><p>{journal.description}</p></div><ExternalLink href={journal.url} className="button button-outline">Explore the journal <Icon name="arrowUp" size={17} /></ExternalLink></article>
        </div>
      </section>

      <section id="experience" className="section experience-section container" aria-labelledby="experience-title">
        <SectionHeading id="experience-title" number="04" eyebrow="THE WORK SO FAR" title="Research, with an engineering backbone."><p>Applied AI, public-sector R&D, and an earlier foundation in wireless systems.</p></SectionHeading>
        <div className="experience-layout"><div className="experience-list">{experience.map((job, index) => <article className="experience-item" key={job.id}><div className="experience-period"><span className={index === 0 ? 'experience-dot is-current' : 'experience-dot'} /><span className="mono">{job.period}</span>{index === 0 && <span className="current-label">Current</span>}</div><div className="experience-content"><h3>{job.company}</h3><p className="job-title">{job.title}</p><p className="job-focus">{job.focus}</p><p className="job-summary">{job.summary}</p><details><summary>Selected contributions <Icon name="chevron" size={16} /></summary><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details></div></article>)}</div>
          <aside className="education-card"><span className="micro">FOUNDATIONS</span><Icon name="book" size={25} /><h3>IIT Jammu</h3><p>{education.degree}</p><div className="education-meta"><span>{education.period}</span><span>CGPA {education.cgpa}</span></div><div className="education-project"><span className="micro">M.TECH RESEARCH</span><p>{education.project}</p></div><a href={resumeHref} target="_blank" rel="noopener noreferrer" className="inline-link">View full résumé <Icon name="download" size={15} /></a></aside>
        </div>
      </section>

      <section className="practice-section container" aria-labelledby="practice-title"><div className="practice-intro"><span className="micro">METHODS & TOOLS</span><h2 id="practice-title">The working toolkit.</h2><p>Selected methods and tools used across my engineering work and research.</p></div><div className="expertise-list">{expertise.map(group => <div className="expertise-row" key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></div>)}</div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="container"><div className="contact-main"><div className="contact-intro"><span className="micro">KEEP THE CONVERSATION OPEN</span><h2 id="contact-title">Let’s compare<br /><em>notes.</em></h2><ContactPortrait /></div><div className="contact-content"><p>Research collaborations, applied AI systems, or a difficult engineering problem. Email is the best place to start.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrowUp" size={21} /></a><button type="button" onClick={copyEmail} className="copy-email"><Icon name={copied ? 'check' : 'copy'} size={16} /><span aria-live="polite">{copied ? 'Email copied' : 'Copy email address'}</span></button></div></div><div className="contact-bottom"><span>{profile.location}</span><div className="social-links"><ExternalLink href={profile.linkedin}><Icon name="linkedin" size={17} />LinkedIn</ExternalLink>{profile.github.map(account => <ExternalLink key={account.name} href={account.url}><Icon name="github" size={17} />{account.name}</ExternalLink>)}</div></div></div></section>
    </main>
    <footer className="site-footer container"><a href="#home">Hemanth Kandimalla<span aria-hidden="true"> ↗</span></a><span>© 2026 · Research & engineering</span><a href="#home" className="back-top">Back to top ↑</a></footer>
  </>;
}

export default App;
