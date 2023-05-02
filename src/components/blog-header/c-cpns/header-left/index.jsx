import React, { memo } from "react";
import { LeftWrapper } from "./style"
import Logo from "@/assets/img/logo.png"

const HeaderLeft = memo(() => {
    return (
        <LeftWrapper>
            <img src={Logo} className="logoImg" />
            <span className="logoTitle">YuJun</span>
        </LeftWrapper>
    )
})
export default HeaderLeft