import './App.css';
import {Button} from '@mui/material'
import Container from '@mui/material/Container';
import ThemeProvider from '@mui/material/themeCssVarsAugmentation'
import theme from './styles/theme';
function App() {

  
  return (
    <ThemeProvider theme = {theme}>
    <Container maxWidth  = 'xl'>

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
     <Button variant='contained'> hello</Button>
     </Container>
    </ThemeProvider> 
  );
}

export default App;
