import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Colors } from "../../styles/theme";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import {clamp} from "./clamp";

export default function IncDec(){

    const clampV = clamp(1,10);
    const [amount,setAmount] = useState(1);

    return(
        <Box display={'flex'}>
            <IconButton
            sx={{
                borderRadius: 0,
                background:`${Colors.secondary}`
            }}
            onClick={()=> setAmount(clampV(amount - 1)) }>
            <RemoveIcon/>
            </IconButton>
            <Typography
            variant="h6"
            sx={{
                border : `1px solid ${Colors.secondary}`,
                p : 2
            }}
            >
                {amount}
            </Typography>
            <IconButton
            sx={{
                borderRadius: 0,
                background:`${Colors.secondary}`
            }}
            onClick={()=> setAmount(clampV(amount + 1)) }>
            <AddIcon/>
            </IconButton>
        </Box>
    )
}