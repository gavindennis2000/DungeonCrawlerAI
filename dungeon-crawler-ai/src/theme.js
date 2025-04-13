// theme.js

// contains themes for material ui components

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Cinzel', serif`, // Or 'MedievalSharp', etc.
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#121212',
    },
    text: {
      primary: '#fff',
    },
  },
});

export default theme;
