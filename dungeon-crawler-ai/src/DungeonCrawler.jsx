// DungeonCrawler.jsx

import React, { useState } from 'react';
import { Container } from '@mui/material';
import UserText from './UserText';
import StoryText from './StoryText';
import ImageDisplay from './ImageDisplay';

const DungeonCrawler = () => {
  const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/600x350?dungeon');
  const [altText, setAltText] = useState('A mysterious dungeon entrance');
  const [storyText, setStoryText] = useState(
    "You awaken in a dimly lit stone chamber. The air is thick with the scent of moss and forgotten memories. A faint glow pulses from the hallway ahead..."
  );

  // TODO: replace setStoryText with Gemini API response

  return (
    <Container sx={{ backgroundColor: 'black', minHeight: '100vh', padding: 3, color: 'white' }}>
      <StoryText storyText={storyText} />
      <ImageDisplay imageUrl={imageUrl} altText={altText} />
      <UserText />
    </Container>
  );
};

export default DungeonCrawler;