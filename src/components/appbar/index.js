import { useTheme } from "@mui/material/styles";
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    if(matches) {
        return <AppbarMobile/>
    }
        return <AppbarDesktop/>;
    
}