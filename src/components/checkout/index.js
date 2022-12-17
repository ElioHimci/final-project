import React from "react";

import { Button, Drawer, useMediaQuery } from "@mui/material";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useTheme } from "@emotion/react";

export default function Checkout() {

    const {showCheckout,setShowCheckout} = useUIContext()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Drawer 
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        anchor='right'
        PaperProps={{
            sx: {
                width : matches ? '100%' : 500,
                background : Colors.light_gray,
                borderRadius:0
            }
        }}
        >
            <h1> checkout</h1>
            <Button onClick={() => setShowCheckout(false)}>close</Button>
        </Drawer>
    )
}