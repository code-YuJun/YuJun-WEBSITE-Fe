import React, { memo } from "react";
import { RightWrapper } from "./style"

const HeaderRight = memo(() => {
    return (
        <RightWrapper>
                <div className="nav-menu-item iconfont yujun-shouye">首页</div>
                <div className="nav-menu-item">业务组件</div>
                <div className="nav-menu-item">通用组件</div>
                <div className="nav-menu-item">444</div>
                <div className="nav-menu-item">555</div>
        </RightWrapper>
    )
})
export default HeaderRight