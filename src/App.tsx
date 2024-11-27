import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import { router } from './Router';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: `'Nanum Myeongjo', serif`,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
