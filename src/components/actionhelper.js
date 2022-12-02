import { ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../styles/theme/appbar"

// FUNKSION OPSIONAL // TESTUES
export default function ActionsHelper (matches) {
        if (matches){
            return ActionIconsContainerMobile
        }
            return ActionIconsContainerDesktop
    }