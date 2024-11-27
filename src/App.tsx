import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { router } from './Router';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: `'Nanum Myeongjo', serif`,
  },
});

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/Portfolio') {
      window.location.href = '/Portfolio'; // Redireciona para "/Portfolio"
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
