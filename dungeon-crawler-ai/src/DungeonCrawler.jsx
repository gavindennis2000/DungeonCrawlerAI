import React, { useState } from 'react';
import StoryText from './StoryText';
import ImageDisplay from './ImageDisplay';
import UserText from './UserText';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Container from '@mui/material/Container'; // Assuming you're using MUI Container

const DungeonCrawler = () => {
    const [imageUrl, setImageUrl] = useState('https://source.unsplash.com/random/600x350?dungeon');
    const [altText, setAltText] = useState('A mysterious dungeon entrance');
    const [storyText, setStoryText] = useState(
        "Unable to grab story from Gemini."
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{ minHeight: '100vh', padding: 3, color: 'white' }}>
                <div className="mb-3">
                    <StoryText storyText={storyText} />
                </div>
                <div className="mb-3">
                    <ImageDisplay imageUrl={imageUrl} altText={altText} />
                </div>
                <div className="mt-auto">
                    <UserText />
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default DungeonCrawler;
