import './App.css';
import React from 'react';
import Container from '@mui/material/Container';
import theme from './styles/theme';
import { ThemeProvider } from '@emotion/react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';
import Footer from './components/footer';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './components/search';
import Cart from './components/cart';
import Title from './components/title/title';


function App() {

  
  return (
    <ThemeProvider theme = {theme}>
      <Container maxWidth  = 'xl'>
        <UIProvider>
      <Appbar/>
      <Banner/>
      <Promotions/>
      <Title/>
      <Products/>
      <Footer/>
      <AppDrawer/>
      <Cart/>
      <SearchBox/>
    </UIProvider>
     </Container>
    </ThemeProvider> 
  );
}

export default App;
