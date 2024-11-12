import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Crie o tema com a fonte "Nanum Myeongjo"
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
