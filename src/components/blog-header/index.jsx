import React, { memo } from "react";
import { HeaderWrapper } from "./style"
import HeaderLeft from "./c-cpns/header-left"
import HeaderRight from "./c-cpns/header-right"

const BlogHeader = memo(() => {
    return (
        <HeaderWrapper>
            <HeaderLeft />
            <HeaderRight />
        </HeaderWrapper>
    )
})
export default BlogHeader