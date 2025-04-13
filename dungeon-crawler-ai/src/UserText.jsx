import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const UserText = ({ setStoryText, setStatus, status }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async () => {
        if (message.trim()) {
            const payload = {
                status: status,         // include current status
                action: message         // include the user’s command
            };

            try {
                console.log("Sending to Gemini:", payload);
                const response = await axios.post('http://localhost:3001/api/gemini/generate', payload);
                console.log('Response:', response.data);

                // Example assumes response includes { narrative: "...", status: {...} }
                if (response.data.narrative) {
                    setStoryText(response.data.narrative); // Update story view
                }

                // You could also call setStatus here if you're lifting state up (see below)
                setStatus(response.data.status);


            } catch (error) {
                console.error('Error during API call:', error);
            }
        }
    };

    return (
        <div>
            <TextField
                variant="outlined"
                fullWidth
                value={message}
                onChange={handleMessageChange}
                sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    '& .MuiOutlinedInput-root': {
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
