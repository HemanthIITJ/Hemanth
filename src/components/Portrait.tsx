import closeupPortrait from '../assets/portraits/hemanth-closeup.jpeg';
import outdoorPortrait from '../assets/portraits/hemanth-outdoor.jpeg';
import { profile } from '../data/portfolio';
import './Portrait.css';

interface PortraitProps {
  className?: string;
}

export function ProfilePortrait({ className = '' }: PortraitProps) {
  return (
    <figure className={`profile-portrait ${className}`.trim()}>
      <div className="profile-portrait__frame">
        <img
          className="profile-portrait__image"
          src={closeupPortrait}
          alt="Hemanth Kandimalla wearing glasses and a light polo shirt"
          width={1106}
          height={1422}
          loading="eager"
          decoding="async"
        />
      </div>
      <figcaption className="profile-portrait__caption">
        <span>{profile.role}</span>
        <span>{profile.location}</span>
      </figcaption>
    </figure>
  );
}

export function ContactPortrait({ className = '' }: PortraitProps) {
  return (
    <figure className={`contact-portrait ${className}`.trim()}>
      <img
        src={outdoorPortrait}
        alt="Hemanth Kandimalla standing in front of bamboo outdoors"
        width={591}
        height={1280}
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}
