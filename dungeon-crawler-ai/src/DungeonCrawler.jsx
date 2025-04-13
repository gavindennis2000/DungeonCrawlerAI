import React, { useState } from 'react';
import StoryText from './StoryText';
import ImageDisplay from './ImageDisplay';
import UserText from './UserText';

const DungeonCrawler = () => {
    const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/600x350?dungeon');
    const [altText, setAltText] = useState('A mysterious dungeon entrance');
    const [storyText, setStoryText] = useState(
        "You awaken in a dimly lit stone chamber. The air is thick with the scent of moss and forgotten memories. A faint glow pulses from the hallway ahead..."
    );

    return (
        <div className="container-fluid d-flex flex-column flex-grow-1">
            {/* Story text */}
            <div className="mb-3">
                <StoryText storyText={storyText} />
            </div>

            {/* Image */}
            <div className="mb-3">
                <ImageDisplay imageUrl={imageUrl} altText={altText} />
            </div>

            {/* User input pinned to bottom */}
            <div className="mt-auto">
                <UserText />
            </div>
        </div>
    );
};

export default DungeonCrawler;