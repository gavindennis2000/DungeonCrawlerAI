import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2e1a47' }}>
        <img
        src={"logo.png"}
        alt="Dungeon Crawler AI"
        style={{ display: 'block', margin: '0 auto' }}
        />
        <Toolbar>
            <Typography
            variant="h5"
            sx={{
                flexGrow: 1,
                fontSize: 20,
                fontFamily: 'MedievalSharp, serif',
                color: '#f5e8c7',
                letterSpacing: '2px',
                textShadow: '1px 1px #000',
            }}
            >
            Online AI-Assisted Tabletop RPG
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
