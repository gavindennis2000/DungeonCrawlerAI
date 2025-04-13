import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const UserText = ({setStoryText, setImageUrl}) => {
  // textbox and submit. handles collecting user input and api call
  // communicate with gemini

  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async () => {
    if (message.trim()) {
      const messageObj = {
        prompt: message
      }
      try {
        console.log(messageObj);
        const response = await axios.post('http://localhost:3001/api/gemini/generate', messageObj);
        console.log('Response:', response.data); // Handle response data here
        setStoryText(response.data.text); // Update the shared state
        const imgURL = 'https://preview.redd.it/which-of-the-3-images-do-you-prefer-its-for-a-book-about-v0-2aje0otzj3wb1.jpg?width=5000&format=pjpg&auto=webp&s=3704ebb380800f77f937da20e8f75bc5583cce0f';
        setImageUrl(imgURL);
        console.log("Image set to; ", imgURL)
      } catch (error) {
        console.error('Error during API call:', error);
      }
    }
  };

  return (
    <div>
      <br/>
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'MedievalSharp, serif',
          color: '#fff', // Optional: set text color
          marginBottom: '0.5rem'
        }}
      >
        Your Response:
      </Typography>
      <TextField 
        variant="outlined"
        fullWidth
        value={message}
        onChange={handleMessageChange}
        sx={{
          backgroundColor: '#333', // Dark background color
          '& .MuiOutlinedInput-root': {
            fontFamily: 'MedievalSharp, cursive',
            color: 'white',
            '& fieldset': {
              borderColor: '#ccc',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'MedievalSharp, cursive',
            color: 'white',
          },
        }}
      />

      <Button
        variant="contained"
        color="primary"
        fontFamily="MedievalSharp, serif"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </div>
  );
};

export default UserText;
