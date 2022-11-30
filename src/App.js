import './App.css';
import React from 'react';
import {Button} from '@mui/material'
import Container from '@mui/material/Container';
// import ThemeProvider from '@emotion/react'
import theme from './styles/theme';
import { ThemeProvider } from '@emotion/react';
import Appbar from './components/appbar';
function App() {

  
  return (
    <ThemeProvider theme = {theme}>
    <Container maxWidth  = 'xl'>
    <Appbar/>
      {/* 
      app bar 
      banner 
      promotions
      title 
      products
      Footer
      searchbox
      appdrawer
      */}
     <Button variant='contained'> home</Button>
     </Container>
    </ThemeProvider> 
  );
}

export default App;
