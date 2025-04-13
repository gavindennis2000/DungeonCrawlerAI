// ImageDisplay.jsx
import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 800, maxHeight: 225, marginTop: 3, backgroundColor: '#222' }}>
      <CardMedia
        component="img"
        // height="auto"
        // width="auto"
        image={imageUrl}
        alt={"unable to load image"}
      />
      <img src={imageUrl}/>
    </Card>
  );
};

export default ImageDisplay;
