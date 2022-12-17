import React from 'react';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { firebasedb } from '../../services/firebase/db';

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const handleLogin = () =>{
        console.log('login');
    }
    const handleLogout = () =>{
        
    }
    return(
        <>
            {matches 
            ? (<AppbarMobile 
                onLoginClick={handleLogin}
                onLogoutClick={handleLogout}
                matches={matches}/>) 
            : (<AppbarDesktop
                onLoginClick={handleLogin}
                onLogoutClick={handleLogout}
            matches={matches}/>)}
        </>
    );       
}
