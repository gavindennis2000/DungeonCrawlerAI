import React, { useState } from 'react';
import { Container } from '@mui/material';
import UserText from './UserText';
import StoryText from './StoryText';
import ImageDisplay from './ImageDisplay';

const DungeonCrawler = () => {
  const [imageUrl, setImageUrl] = useState('https://preview.redd.it/which-of-the-3-images-do-you-prefer-its-for-a-book-about-v0-2aje0otzj3wb1.jpg?width=5000&format=pjpg&auto=webp&s=3704ebb380800f77f937da20e8f75bc5583cce0f');
  const [storyText, setStoryText] = useState("Unable to grab story from Gemini. :(");
  const [status, setStatus] = useState({
      name: "David",
      level: 5,
      stats: {
          strength: 10,
          intelligence: 14
      },
      inventory: ['sword', 'shield', 'potion'],
  });

  return (
    <Container sx={{ minHeight: '100vh', padding: 3, color: 'white' }}>
      <ImageDisplay imageUrl={imageUrl} />
      <StoryText storyText={storyText} />
      <UserText 
        setStoryText={setStoryText} 
        setImageUrl={setImageUrl} 
        status={status}
        setStatus={setStatus}
      />
    </Container>
  );
};

export default DungeonCrawler;
