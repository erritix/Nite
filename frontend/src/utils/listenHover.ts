
function listenHover(setState: (state: boolean)=> void) {
    return {
        onMouseEnter: ()=>setState(true),
        onMouseLeave: ()=>setState(false)
    }
}

export {
    listenHover
}