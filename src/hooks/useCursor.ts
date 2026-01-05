/*
 * SMOOTH CUSTOM CURSOR - Minimal & Fast
 * Optimized for readability and smooth movement
 */

import { useEffect } from 'react';

export const useCursor = () => {
    useEffect(() => {
        // Only run on desktop
        if (!window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        // Remove any existing cursors
        document.querySelectorAll('.cursor-dot, .cursor-ring').forEach(el => el.remove());

        // Create SMALL & SMOOTH cursor elements
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: hsl(45, 100%, 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            opacity: 0.9;
            will-change: transform;
        `;

        const ring = document.createElement('div');
        ring.className = 'cursor-ring';
        ring.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 1.5px solid hsl(45, 90%, 60%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.6;
            will-change: transform;
        `;

        document.body.appendChild(dot);
        document.body.appendChild(ring);

        let mouseX = 0;
        let mouseY = 0;
        let dotX = 0;
        let dotY = 0;
        let ringX = 0;
        let ringY = 0;
        let animationId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // FAST smooth animation
        const animate = () => {
            // Fast following for immediate response
            dotX += (mouseX - dotX) * 0.35;
            dotY += (mouseY - dotY) * 0.35;
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;

            // GPU-accelerated transforms
            dot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)`;
            ring.style.transform = `translate3d(${ringX - 10}px, ${ringY - 10}px, 0)`;

            animationId = requestAnimationFrame(animate);
        };

        // SUBTLE hover effects
        const handleMouseEnter = () => {
            dot.style.width = '8px';
            dot.style.height = '8px';
            ring.style.width = '28px';
            ring.style.height = '28px';
            ring.style.opacity = '0.8';
        };

        const handleMouseLeave = () => {
            dot.style.width = '6px';
            dot.style.height = '6px';
            ring.style.width = '20px';
            ring.style.height = '20px';
            ring.style.opacity = '0.6';
        };

        // Setup interactive elements
        const selector = 'a, button, input, textarea, [role="button"], [onclick]';
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        document.addEventListener('mousemove', handleMouseMove);
        animate();

        // Hide default cursor
        document.body.style.cursor = 'none';
        document.querySelectorAll('a, button').forEach(el => {
            (el as HTMLElement).style.cursor = 'none';
        });

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            document.removeEventListener('mousemove', handleMouseMove);
            elements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            dot.remove();
            ring.remove();
            document.body.style.cursor = '';
        };
    }, []);
};
