// StoryDisplay.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StoryText = ({ storyText }) => {
  return (
    <Card sx={{ backgroundColor: '#1a1a1a', marginTop: 3, padding: 2 }}>
      <CardContent>
        <Typography variant="h6" color="white" gutterBottom fontFamily="MedievalSharp, serif">
          Story
        </Typography>
        <Typography variant="body1" color="white" fontFamily="MedievalSharp, serif">
          {storyText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StoryText;