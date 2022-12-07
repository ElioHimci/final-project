import { IconButton, Input, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { SearchBoxContainer, SearchField } from "../../styles/search";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import React from "react";

export default function SearchBox (){
    const {showSearchBox,setShowSearchBox} = useUIContext();

    return(
        <Slide direction="down" in = {showSearchBox} timeout = {500}>
            <SearchBoxContainer>
            <Input className="inputfield"
                color="secondary"
                width= "70%"
                variant= "standart"
                placeholder="Search..."
                />
                <IconButton>
                    <SearchIcon sx={{
                        fontSize : {xs: "2rem", md: '3rem'}
                    }} color = "secondary"/>
                </IconButton>
                <IconButton 
                onClick={() => setShowSearchBox(false)}
                sx={{
                    position : 'absolute ',
                    top : 10 ,
                    right : 10,
                }}
                >
                    <CloseIcon sx= {{fontSize : '4rem'}} color = 'secondary'/>
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    )

}