/*
 * ROOT COMPONENT - APPLICATION SHELL
 * 
 * Architecture:
 * - Single-page application structure
 * - Component composition: Hero, Experience, Projects, Skills, TechnicalDeepDive, Contact
 * - Smooth scroll navigation
 * - Intersection observer for animations
 * - Custom cursor for premium interactions
 */

import Hero from './components/organisms/Hero';
import Experience from './components/organisms/Experience';
import Projects from './components/organisms/Projects';
import Skills from './components/organisms/Skills';
import TechnicalCapabilities from './components/organisms/TechnicalCapabilities';
import Contact from './components/organisms/Contact';
import Navigation from './components/layout/Navigation';
import { useCursor } from './hooks/useCursor';
import './styles/cursor.css';

function App() {
    // Initialize custom cursor
    useCursor();

    return (
        <>
            {/* Fixed navigation bar */}
            <Navigation />

            {/* Main content sections */}
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <TechnicalCapabilities />
                <Contact />
            </main>
        </>
    );
}

export default App;
