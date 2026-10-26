import type { CSSProperties } from 'react';

export type IconName = 'arrow' | 'arrowUp' | 'download' | 'mail' | 'copy' | 'check' | 'menu' | 'close' | 'code' | 'layers' | 'book' | 'chevron' | 'github' | 'linkedin' | 'shield' | 'graph' | 'memory' | 'plus';

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export function Icon({ name, size = 20, className = '', style }: IconProps) {
  const paths = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    arrowUp: <><path d="M6 18 18 6M6 6h12v12" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    copy: <><rect x="8" y="8" width="12" height="13" rx="2" /><path d="M16 8V3H3v13h5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    code: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" /></>,
    layers: <><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></>,
    book: <><path d="M3 4h6a4 4 0 0 1 3 2 4 4 0 0 1 3-2h6v16h-6a4 4 0 0 0-3 2 4 4 0 0 0-3-2H3V4Zm9 2v16" /></>,
    chevron: <path d="m6 9 6 6 6-6" />,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    graph: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="19" r="2" /><path d="M7 6h10M6 8l5 9M18 8l-5 9" /></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4M9 9h6v6H9z" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    github: <path fill="currentColor" stroke="none" d="M12 .8a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.09 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.3-.51-1.46.12-3.04 0 0 .97-.31 3.16 1.18a11 11 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.64 1.58.24 2.74.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.1c0 .3.21.66.79.55A11.5 11.5 0 0 0 12 .8Z" />,
    linkedin: <path fill="currentColor" stroke="none" d="M20.5 2h-17C2.7 2 2 2.7 2 3.5v17c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-17c0-.8-.7-1.5-1.5-1.5ZM8 19H5V9h3v10ZM6.5 7.6a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-5c0-1.2 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19h-3V9h2.9v1.4h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.6V19Z" />,
  };

  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" className={`icon ${className}`} style={style} aria-hidden="true">{paths[name]}</svg>;
}
