import { useMediaQuery, useTheme } from "@mui/material";

export default function Appbar() {
    const theme = useTheme
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return(
        
        
        (matches ? <h1>mobile</h1> : <h1>Desktop</h1>)
        
    );
}