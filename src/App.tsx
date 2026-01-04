/*
 * ROOT COMPONENT - APPLICATION SHELL
 * 
 * Architecture:
 * - Single-page application structure
 * - Component composition: Hero, Experience, Projects, Skills, TechnicalDeepDive, Contact
 * - Smooth scroll navigation
 * - Intersection observer for animations
 */

import Hero from './components/organisms/Hero';
import Experience from './components/organisms/Experience';
import Projects from './components/organisms/Projects';
import Skills from './components/organisms/Skills';
import TechnicalDeepDive from './components/organisms/TechnicalDeepDive';
import Contact from './components/organisms/Contact';
import Navigation from './components/layout/Navigation';

function App() {
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
                <TechnicalDeepDive />
                <Contact />
            </main>
        </>
    );
}

export default App;
