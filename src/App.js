import './App.css';
import Container from '@mui/material/Container';
import theme from './styles/theme';
import { Button } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Appbar from './components/appbar/index.js';
function App() {

  
  return (
    <ThemeProvider theme = {theme}>
    <Container maxWidth  = 'xl'>
      <Appbar/>
      {/* 
      
      banner 
      promotions
      title 
      products
      Footer
      searchbox
      appdrawer
      */}
     <Button variant='contained'> hello</Button>
     </Container>
    </ThemeProvider> 
  );
}

export default App;
