const theme = {
    // 混入样式
    mixin:{
        boxBgc:`
            transition:background 200ms ease;
            &:hover{
                background:rgb(0,0,0,.1)
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