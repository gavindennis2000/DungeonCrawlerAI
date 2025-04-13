import React, { useState } from 'react';
import StoryText from './StoryText';
import ImageDisplay from './ImageDisplay';
<<<<<<< HEAD
import UserText from './UserText';

const DungeonCrawler = () => {
    const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/600x350?dungeon');
    const [altText, setAltText] = useState('A mysterious dungeon entrance');
    const [storyText, setStoryText] = useState(
        "You awaken in a dimly lit stone chamber. The air is thick with the scent of moss and forgotten memories. A faint glow pulses from the hallway ahead..."
    );
=======
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const DungeonCrawler = () => {
  const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/600x350?dungeon');
  const [altText, setAltText] = useState('A mysterious dungeon entrance');
  const [storyText, setStoryText] = useState(
    "Unable to grab story from Gemini."
  );
>>>>>>> 180ed13ce3b0fd73e5047ab5f7da6e61e361eda7

    return (
        <div className="container-fluid d-flex flex-column flex-grow-1">
            {/* Story text */}
            <div className="mb-3">
                <StoryText storyText={storyText} />
            </div>

<<<<<<< HEAD
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
=======
  return (
    <Container sx={{ minHeight: '100vh', padding: 3, color: 'white' }}>
      <StoryText storyText={storyText} />
      <ImageDisplay imageUrl={imageUrl} altText={altText} />
      <UserText />
    </Container>
  );
>>>>>>> 180ed13ce3b0fd73e5047ab5f7da6e61e361eda7
};

export default DungeonCrawler;