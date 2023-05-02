const theme = {
    // 混入样式
    mixin:{
        boxShadow:`
            transition:box-shadow 200ms ease;
            &:hover{
                box-shadow:0 2px 4px rgba(0,0,0,.18)
            }
        `
    },
    size:{
        fontSize:"15px"
    },
    color:{
        primaryColor:"#bfc"
    }
}
export default theme