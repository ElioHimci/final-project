import React from "react";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerDesktop, ActionIconsContainerMobile,MyList } from "../../styles/theme/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Colors } from "../../styles/theme";
import ActionsHelper from "../actionhelper";

export default function Actions (matches) {
    // function Component (matches) {
    //     if (matches){
    //         return ActionIconsContainerMobile
    //     }
    //         return ActionIconsContainerDesktop
    // }
    // const Component = matches 
    // ? ActionIconsContainerMobile 
    // : ActionIconsContainerDesktop ;

    return (
        <ActionsHelper>
        <MyList type="row" >
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
                    <ShoppingCartIcon/>
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
                }}>
                    <PersonIcon/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>
        </ActionsHelper>
    )
}