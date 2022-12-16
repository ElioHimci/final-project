import React from "react";

import { Drawer } from "@mui/material";
import { Colors } from "../../styles/theme";

export default function Checkout() {
    return (
        <Drawer 
        open={false}
        anchor='right'
        PaperProps={{
            sx: {
                width : 500,
                background : Colors.light_gray,
                borderRadius:0
            }
        }}
        >
            <h1> checkout</h1>
        </Drawer>
    )
}