import React, { useState } from 'react';
import { Container } from '@mui/material';
import UserText from './UserText';
import StoryText from './StoryText';
// import ImageDisplay from './ImageDisplay'; // optional

const DungeonCrawler = () => {
  const [imageUrl, setImageUrl] = useState(
    'https://source.unsplash.com/random/600x350?dungeon'
  );
  const [storyText, setStoryText] = useState(
    "Unable to grab story from Gemini. :("
  );

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
      <UserText setStoryText={setStoryText} setImageUrl={setImageUrl}/>
    </Container>
  );
};

export default DungeonCrawler;
