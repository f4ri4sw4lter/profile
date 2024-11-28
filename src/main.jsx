import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    primary: {
      main: '#4C307F',
    },
    secondary: {
      main: '#dc004e',
    },
    link: {
      main: '#1AD0FB',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
      <CssBaseline />
        <App />
  </ThemeProvider>
);