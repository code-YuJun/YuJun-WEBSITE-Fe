import styled from "styled-components";
import quyueqiu from "@/assets/img/quyueqiu.jpg"

export const BlogContainerWrapper = styled.div`
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    .img{
        background:url(${quyueqiu}) no-repeat;
        width:100%;
        margin-top:-64px;
        height:100vh;
        background-size:cover;
        background-position:center;
    }
    .content{
        position:absolute;
        top:50%;
        left:50%;
        text-align:center;
        transform:translate(-50%,-50%);
    }
    .title{
        color:#fff;
        font-size:55px;
        margin-bottom:50px;
    }
    .btn{
        cursor: pointer;
        margin: 10px 15px;
        padding: 0 35px;
        height: 45px;
        line-height: 45px;
        font-size: 1rem;
        color: #fff;
        border: 1px solid #fff;
        background-color: transparent;
        border-radius: 30px;
        box-shadow: none;
    }
    .link{
        margin-top:50px;
        display:flex;
        justify-content: space-around;
        padding: 0 25px;
    }
    .articleBox{
        width:1125px;
        margin:0 auto;
        display:flex;
    }
` 
