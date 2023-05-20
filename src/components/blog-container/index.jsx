import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { BlogContainerWrapper } from "./style"
import { fetchHomeDataAction } from "@/store/modules/home.js"
import BlogItem from "@/components/blog-container/index.jsx"
const handleClick = () => {
    window.scrollTo(0, window.innerHeight);
}
const BlogContainer = memo(() => {
    // 从redux中获取数据
    const { articleInfo } = useSelector((state) => ({
        articleInfo:state.home.articles
    }),shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeDataAction())
    }, [dispatch])
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
            <div className="articleBox">
            {articleInfo.map((item) => {
                return <BlogItem />
            })}
            </div>
        </BlogContainerWrapper>
    )
})
export default BlogContainer
