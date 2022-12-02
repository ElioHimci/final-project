import { IconButton } from '@mui/material';
import React from 'react';
import { AppbarContainer, AppbarHeader } from '../../styles/theme/appbar';
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from "@mui/icons-material/Search";
import Actions from './actions';


export default function AppbarMobile(matches){

    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <AppbarHeader textAlign = 'center' variant = 'h4'>
                My Store
            </AppbarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Actions matches = {matches}/>
        </AppbarContainer>
    )
}