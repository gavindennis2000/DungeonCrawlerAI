import DungeonCrawler from './DungeonCrawler';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import StoryText from './StoryText.jsx';
import UserText from './UserText.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from './Particle.jsx';

const App = () => {
    return (
        <div className="position-relative">
            
            {/* Particle background */}
            <Particle />

            {/* Foreground content */}
            <div className="position-relative d-flex flex-column justify-content-center min-vh-100 text-white" style={{ zIndex: 2 }}>

                {/* Game content */}
                <div className="flex-grow-1 d-flex flex-column">
                    <Header />
                    <DungeonCrawler />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
