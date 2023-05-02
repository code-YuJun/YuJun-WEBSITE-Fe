import React, { memo } from "react";
import { BlogContainerWrapper } from "./style"
const BlogFooter = memo(() => {
    return (
        <BlogContainerWrapper>
            <div className="img"></div>
            <div className="content">
                <div className="title">
                    我的个人小站
                </div>
                <div className="btn">
                    开始阅读
                </div>
                <div className="link">
                    <div>111</div>
                    <div>222</div>
                    <div>333</div>
                    <div>444</div>
                </div>
            </div>
        </BlogContainerWrapper>
    )
})
export default BlogFooter
