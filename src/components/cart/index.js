import React from "react";
import { Avatar, Button, Divider, Drawer, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
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
                <Avatar src= {item.image} sx = {{width : 96 , height : 96 , mr:2}} />
                <Box display="flex" flexDirection={'column'}>
                <Typography variant = "h6"> {item.name}</Typography>
                <Typography variant = "subtitles"> {item.description}</Typography>
                </Box>
                <Typography variant = "body1" justifyContent={'end'}> 
                ALL {item.price}
                </Typography>
            </Box>
                <Divider variant="inset" />
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
            <Box 
            sx={{pd : 4 }}
            display = 'flex'
            justifyContent={'center'}
            flexDirection= 'column'
            alignItems={'center'}
            >
                <Typography variant= 'h3' color = {Colors.black}>
                    Your Cart
                </Typography>
                <Typography variant= 'body' color = {Colors.muted}>
                    SOME text some text some text
                </Typography>

                <Paper
                    elevation={0}
                    sx = {{
                        mt:2,
                        width : '90%',
                        padding : 4,
                    }}
                >

             {cartContent}
                </Paper>
                <Button sx = {{mt : 4}} variant = "contained">
                    Proceed to payment
                </Button>

            </Box>
        </Drawer>
    )
}