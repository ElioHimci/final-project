import React from 'react';

import { AppbarContainer, AppbarHeader } from "../../styles/theme/appbar";

export default function AppbarDesktop(matches){

    return (
        // <h1> Desktop</h1>
        <AppbarContainer>
         {/* <AppbarHeader> my store <AppbarHeader/> */}
         <AppbarHeader>my Store</AppbarHeader>
         </AppbarContainer>
    )
}