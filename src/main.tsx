/*
 * MAIN ENTRY POINT - REACT APPLICATION BOOTSTRAP
 * 
 * Responsibilities:
 * - Mount React application to DOM
 * - Enable StrictMode for development warnings
 * - Import global styles
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

/* Mount React application with StrictMode enabled */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
