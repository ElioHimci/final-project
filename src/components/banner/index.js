import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { BannerContainer } from "../../styles/banner";

export default function Banner () {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <BannerContainer>
            <h1>Banner</h1>
        </BannerContainer>
    )
}