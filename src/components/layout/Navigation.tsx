/* NAVIGATION COMPONENT - Updated with Theme Toggle */

import { useState, useEffect } from 'react';
import ThemeToggle from '@components/atoms/ThemeToggle';
import './Navigation.css';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'technical', label: 'Technical' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            /* Determine active section */
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
            <div className="navigation__container">
                <div className="navigation__brand">
                    <span className="navigation__logo pulse-glow">HK</span>
                    <span className="navigation__name">Hemanth Kandimalla</span>
                </div>

                <ul className="navigation__menu">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`navigation__link ${activeSection === item.id ? 'navigation__link--active' : ''}`}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navigation;
