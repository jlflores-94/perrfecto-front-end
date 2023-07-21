import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fb8e0b',
      light: '#ffb74d',
      dark: '#ef6c00',
      contrastText: '#fff',
    },
    secondary: {
      main: '#d0cdcb',
      light: '#ffb74d',
      dark: '#ef6c00',
      contrastText: '#fb8e0b',
    },
  },
});

export default theme;