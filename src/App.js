import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/index.tsx';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </ThemeProvider>
  );
} 

export default App;
