import styled from "styled-components"

export const RightWrapper  = styled.div`
    .nav-menu{
        display:flex;
        font-size:${props => props.theme.size.fontSize};
    }
    .nav-menu-item{
        padding:0 15px;
        ${props => props.theme.mixin.boxShadow}
    }
`