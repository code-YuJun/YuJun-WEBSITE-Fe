import React, { memo } from "react";
import { BlogItemWrapper } from './style'
import PropTypes from 'prop-types'
const BlogItem = memo((props) => {
    const { ItemData } = props
    return (
        <BlogItemWrapper>
            {/* 图片、标题 */}
            <div className="itemTop">
                <img className="img" src={ItemData.pic} />
                <span className="title">{ItemData.title}</span>
            </div>
            {/* 发布日期、文章简介 */}
            <div className="itemDescription">
                <div className="summary">{ItemData.summary}</div>
                <div className="publishInfo">{ItemData.publishTime}</div>
            </div>
        </BlogItemWrapper>
    )   
})
BlogItem.propTypes = {
    ItemData: PropTypes.object
}
export default BlogItem