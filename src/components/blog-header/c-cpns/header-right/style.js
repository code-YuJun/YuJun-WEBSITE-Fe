import styled from "styled-components"

export const RightWrapper = styled.div`
    display:flex;
    font-size:${props => props.theme.size.fontSize};
    .nav-menu-item{
        padding:0 15px;
        height:100%;
        line-height:64px;
        cursor: pointer;
        ${props => props.theme.mixin.boxBgc}
    }
`