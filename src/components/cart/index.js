import React from "react";
import { Avatar, Drawer, useMediaQuery, useTheme } from "@mui/material";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { Box } from "@mui/system";


export default function Cart() {

    const {cart,setShowCart,showCart} = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery (theme.breakpoints.down('md'));

    const cartContent = 
    cart.map ( item => (
        <Box key = {item.id}>
            <Box 
            display={'flex'}
            sx= {{pt : 2 , pb: 2}}
            alignItems = 'start'
            justifyContent={'space-between'}>
            <Avatar src= {item.image} sx = {{width : 96 , height : 96}} />
            </Box>
        </Box>
    ))
    
    return (
        <Drawer
        onClose={() => setShowCart(false)}
        open = {showCart}
        anchor="right"
        PaperProps={{
            sx : {
                width: 500,
                background: Colors.light_gray,
                borderRadius : 0

            }
        }}
        >
             {cartContent}
        </Drawer>
    )
}