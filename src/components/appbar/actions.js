import React from "react";
import { Badge, Divider, ListItemButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile,MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useState } from "react";
import { useUser } from "../../context/user";

export default function Actions ({matches, onLogin , onLogout}) {

    const[anchorEl,setAnchorEl] = useState(null);
    const {cart, setShowCart} = useUIContext() ;
    const{user} = useUser()

    const Component = matches
    ? ActionIconsContainerMobile 
    : ActionIconsContainerDesktop ;

    return (
        <Component>
        <MyList type="row" >
            <ListItemButton
            sx={{
                justifyContent: "center"
            }}
            >
                <ListItemIcon onClick = {() => setShowCart(true)}
                sx={{
                    display : "flex",
                    justifyContent: "center",
                    color : matches && Colors.secondary
                }}>
                    <Badge badgeContent = {cart && cart.length} color = 'secondary'>
                    <ShoppingCartIcon />

                    </Badge>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
            sx={{
                justifyContent: "center"
            }}
            >
                <ListItemIcon
                sx={{
                    display : "flex",
                    justifyContent: "center",
                    color : matches && Colors.secondary
                }}>
                    <FavoriteIcon/>

                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
            sx={{
                justifyContent: "center"
            }}
            >
                <ListItemIcon
                sx={{
                    display : "flex",
                    justifyContent: "center",
                    color : matches && Colors.secondary
                }}
                onClick={(event)=> setAnchorEl(event.currentTarget)}
                >
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>
        <Menu 
        anchorEl={anchorEl}
        open = {anchorEl !== null}
        onClose = {() => setAnchorEl(null)}>
            {! user && <MenuItem onClick = {onLogin}>Login</MenuItem>}
            { user && <MenuItem onClick = {onLogout}>Logout</MenuItem>}
        </Menu>

        </Component>
    )
}