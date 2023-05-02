## blog 项目
### 项目技术栈
React
### code地址
https://github.com/code-YuJun/YuJun-WEBSITE
### 项目中使用的 icon 
https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=2774920

### craco 文件别名
在 craco 中的配置相当于 vue 项目中修改 vue.config.js 文件
1. 安装:
```bash
npm install @craco/craco
```
2. 创建 craco.config.js 文件
```javascript
const path = require('path')
module.exports = {
    webpack:{
        alias:{
            "@":path.resolve(__dirname,"src")
        }
    }
}
```
3. 修改启动脚本
启动的时候会将 craco 中的配置和 webpack 中的配置结合
```javascript
"start": "craco start"
```

### 样式重置
```bash
npm install normalize.css
```
### Router配置
1. 安装
```bash
npm install react-router-dom
```
2. 配置
```javascript
import { HashRouter } from "react-router-dom"
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```
3. 创建router/index.js
```javascript
import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const routes = [
    {
        path:"/",
        element:<Navigate to="/home" />
    },
    {
        path:"/home",
        element:<Home />
    },
    {
        path:"/detail",
        element:<Detail />
    }
]
export default routes;
```
4. 使用 router
App.jsx中
```javascript
import React,{memo} from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '@/router'

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>header</div>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App;
```
### Redux配置
1. 安装
```bash
npm install @reduxjs/toolkit react-redux
```
2. 创建 store/index.js 文件
```javascript
import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./modules/home"
import detailReducer from "./modules/details"

const store = configureStore({
    reducer:{
        home:homeReducer,
        detail:detailReducer
    }
})
export default store
```
3. 项目引入 store/index.js 文件
```javascript
    import store from "./store"
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
```
## 样式使用 styled-components
安装:
```bash
npm install styled-components
```

## 自定义主题色
定义主题色:
```javascript
const theme = {
    color:{
        primaryColor:"#bfc"
    }
}
export default theme
```

index.js 中引入:
```javascript
import { ThemeProvider } from "styled-components"
import theme from "@/assets/theme"
```
使用:
```jsx
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
```
组件的样式文件中使用:
```javascript
import styled from "styled-components"

export const RightWrapper  = styled.div`
    color:${props => props.theme.color.primaryColor};
`
```
## 样式混入
多个位置需要相同的样式时，就可以使用 样式混入
定义样式：
```javascript
    mixin:{
        boxBgc:`
            transition:background 200ms ease;
            &:hover{
                background:rgb(0,0,0,.1)
            }
        `
    },
```
使用：
```css
    .nav-menu-item{
        ${props => props.theme.mixin.boxBgc}
    }
```
## 首页banner图样式
```css
    .img{
        background:url(${banner}) no-repeat;
        width:100%;
        height:100vh;
        background-size:cover;
    }
```