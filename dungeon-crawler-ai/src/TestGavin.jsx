// src/App.jsx
import { useState } from 'react';
import { TextField, Container, Typography } from '@mui/material';

function TestGavin() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container className="mt-5">
      <Typography variant="h4" gutterBottom>
        Enter Your Adventurer Name
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChange}
        fullWidth
      />
      <Typography variant="body1" className="mt-3">
        You typed: {name}
      </Typography>
    </Container>
  );
}

export default TestGavin;
