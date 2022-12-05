import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from "../../styles/banner";
import { Typography } from "@mui/material";

export default function Banner () {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <BannerContainer>
            <BannerImage src="/images/banner/shop4.jpg"/>
            <BannerContent>
                <Typography variant = "h6" >Huge Collection</Typography>
                <BannerTitle variant = "h2"> new bags </BannerTitle>
                <BannerDescription variant="subtitles" > hello buy from us with the best price</BannerDescription>
            </BannerContent>
        </BannerContainer>
    )
}