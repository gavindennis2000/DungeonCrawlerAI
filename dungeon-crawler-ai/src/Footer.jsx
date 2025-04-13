import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        height: '28px',
        justifyContent: 'center',
        backgroundColor: '#2e1a47',
        padding: '0.5rem 2rem',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Cinzel, serif',
            color: '#f5e8c7',
            letterSpacing: '1px',
            textShadow: '1px 1px #000',
          }}
        >
          Created by: David Pham, Gavin Dennis, Kirill Slabun, and Sachina Koirala
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
