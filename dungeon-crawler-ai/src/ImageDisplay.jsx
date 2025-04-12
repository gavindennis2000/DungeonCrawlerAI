// ImageDisplay.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageDisplay = ({ imageUrl, altText }) => {
  return (
    <Card sx={{ maxWidth: 600, marginTop: 3, backgroundColor: '#222' }}>
      <CardMedia
        component="img"
        height="350"
        image={imageUrl}
        alt={altText}
      />
      <CardContent>
        <Typography variant="body2" color="white">
          {altText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageDisplay;
