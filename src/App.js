import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
// import ThemeProvider from '@emotion/react'
import theme from './styles/theme';
import { ThemeProvider } from '@emotion/react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import { Box, Typography } from '@mui/material';
import Footer from './components/footer';
function App() {

  
  return (
    <ThemeProvider theme = {theme}>
    <Container maxWidth  = 'xl'>
    <Appbar/>
    <Banner/>
    <Promotions/>
    <Box display={"flex"} justifyContent={"center"} sx = {{padding : 4}}>
      <Typography variant='h4'>Our Products</Typography>
    </Box>
    <Products/>
    <Footer/>
      {/* 
      searchbox
      appdrawer
      */}
     </Container>
    </ThemeProvider> 
  );
}

export default App;
