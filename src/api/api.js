import fetch from "./fetch"
export const getHomeArticles = () => {
    return fetch({
        api:'/homeArticle',
        method:'get'
    })
}