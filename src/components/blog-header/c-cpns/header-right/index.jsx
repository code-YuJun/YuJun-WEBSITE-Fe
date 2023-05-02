import React, { memo } from "react";
import { RightWrapper } from "./style"

const HeaderRight = memo(() => {
    return (
        <RightWrapper>
            <div className="nav-menu">
                <div className="nav-menu-item">111</div>
                <div className="nav-menu-item">222</div>
                <div className="nav-menu-item">333</div>
                <div className="nav-menu-item">444</div>
                <div className="nav-menu-item">555</div>
            </div>
        </RightWrapper>
    )
})
export default HeaderRight