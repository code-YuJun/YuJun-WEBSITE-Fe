import React, { memo } from "react";
import BlogItemWrapper from './style'
const BlogItem = memo(() => {
    return (
        <BlogItemWrapper>
            <div>博客</div>
        </BlogItemWrapper>
    )
})
export default BlogItem