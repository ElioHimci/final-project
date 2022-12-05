import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
// import ThemeProvider from '@emotion/react'
import theme from './styles/theme';
import { ThemeProvider } from '@emotion/react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
function App() {

  
  return (
    <ThemeProvider theme = {theme}>
    <Container maxWidth  = 'xl'>
    <Appbar/>
    <Banner/>
    <Promotions/>
      {/* 
      promotions
      title 
      products
      Footer
      searchbox
      appdrawer
      */}
     </Container>
    </ThemeProvider> 
  );
}

export default App;
