import { Box, Dialog, DialogContent, DialogTitle, IconButton, Slide } from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

function SlideTransition(props){
    return <Slide direction = 'down' {...props}/>
}

export function ProductDetail({open, onClose ,product}) {

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant = 'permanent'
            open= {open}
            fullScreen
        >
            <DialogTitle sx = {{
                background: Colors.secondary
            }}>
                <Box
                display= {'flex'}
                alignItems ='center'
                justifyContent = 'center'
                >
                    Product Title
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

            </DialogTitle>
            <DialogContent>

            </DialogContent>
        </Dialog>
    )
}