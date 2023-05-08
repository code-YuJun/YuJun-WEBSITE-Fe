import React, { memo } from "react";
import { BlogContainerWrapper } from "./style"
const handleClick = () => {
    window.scrollTo(0, window.innerHeight);
}
const BlogFooter = memo(() => {
    return (
        <BlogContainerWrapper>
            <div className="img"></div>
            <div className="content">
                <div className="title">
                    我的个人小站
                </div>
                <div className="btn" onClick={handleClick}>
                    开始阅读
                </div>
                <div className="link">
                    <div>222</div>
                    <div>333</div>
                    <div>444</div>
                </div> 
            </div>
        </BlogContainerWrapper>
    )
})
export default BlogFooter
