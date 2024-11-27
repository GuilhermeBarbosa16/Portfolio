import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: `'Nanum Myeongjo', serif`,
  },
});

function App() {
  useEffect(() => {
    if (window.performance.navigation.type === 1) {    
      window.location.href = "/Portfolio";
    }
  }, []); 

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
