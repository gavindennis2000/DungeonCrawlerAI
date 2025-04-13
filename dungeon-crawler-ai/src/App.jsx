import React, { useState } from 'react';
import DungeonCrawler from './DungeonCrawler';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from './Particle.jsx';

const App = () => {
    return (
        <div className="position-relative">
            {/* Particle background */}
            <Particle />

            {/* Foreground content */}
            <div className="position-relative d-flex flex-column min-vh-100 text-white" style={{ zIndex: 2 }}>
                {/* Logo at top */}
                <div className="text-center py-3">
                    <img
                        src="logo.png"
                        alt="My Logo"
                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                    />
                </div>

                {/* Game content */}
                <div className="flex-grow-1 d-flex flex-column">
                    <DungeonCrawler />
                </div>
            </div>
        </div>
    );
};

export default App;
