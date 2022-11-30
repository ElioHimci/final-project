import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

import { AppbarContainer, AppbarHeader, MyList } from "../../styles/theme/appbar";
// import SearchIcon from "@mui/icons-material"
import SearchIcon from "@mui/icons-material/Search";
import Actions from './actions';
export default function AppbarDesktop(matches){

    

    return (
        <AppbarContainer>
        <AppbarHeader>my Store</AppbarHeader>
        <MyList type="row">
            <ListItemText primary="home"/>
            <ListItemText primary="categories"/>
            <ListItemText primary="products"/>
            <ListItemText primary="Contact Us"/>
        </MyList>
        <ListItemButton>
            <ListItemIcon>
                <SearchIcon/>
            </ListItemIcon>
        </ListItemButton>
        <Actions matches = {matches}/>
        </AppbarContainer>
    )
}