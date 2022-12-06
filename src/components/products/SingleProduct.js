import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import React from "react";
import { Stack } from "@mui/system";
import { Favorite, FitScreen } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';

export default function SingleProduct({product,matches}){

    return (
        <>
        
        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches= {matches}/>
            <ProductActionsWrapper>
                <Stack direction={"row"}>
                    <ProductFavButton isFav={0}>
                        <Favorite/>
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon color={"primary"}/>
                    </ProductActionButton>
                    <ProductActionButton>
                        <FitScreen color={"primary"}/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductAddToCart variant = "contained"> ADD TO CARD</ProductAddToCart>
        </>
        );
}