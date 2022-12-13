import { Box } from '@mui/material';
import React from 'react';
import { AppbarHeader } from '../../styles/appbar';

const Title = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} sx = {{padding : 4}}>
        <AppbarHeader>OUR PRODUCTS</AppbarHeader>
    </Box>
  )
}

export default Title;