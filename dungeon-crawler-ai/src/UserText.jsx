import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const UserText = ({setStoryText}) => {
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
        // const data = await response.json();
        console.log("hold up:", response.data);
        setStoryText(response.data.text); // Update the shared state
      } catch (error) {
        console.error('Error during API call:', error);
      }
    }
  };

  return (
    <div>
      <TextField
        // label="Enter your message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={handleMessageChange}
        sx={{
          backgroundColor: '#333', // Dark background color for the TextField
          color: 'white',           // White text color
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#ccc', // Light border color for visibility
            },
            '&:hover fieldset': {
              borderColor: '#fff', // Border color when hovered
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff', // Border color when focused
            },
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </div>
  );
};

export default UserText;
