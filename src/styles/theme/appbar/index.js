import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Colors } from "..";
import "@fontsource/montez"

//container
export const AppbarContainer = styled(Box)(() => 
({
    display : 'flex',
    marginTop:4,
    justifyContent:"center",
    alignItems : "center",
    padding : "2px 8px",

}))
//header
export const AppbarHeader = styled(Typography)(()=>({
    padding:'4px',
    flexGrow:1,
    fontSize: '4em',
    fontFamily:`"Montez" , "cursive"`,
    color:Colors.secondary,
}));

export const MyList = styled(List)(({type})=>({
    display:type === "row"? "flex" : "block" ,
    flexGrow:3,
    justifyContent: 'center',
    fontFamily:`"Montez" , "cursive"`,
    alignItems:"center"
}));