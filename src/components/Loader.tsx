interface ComponentProps{
    isLoading: boolean
    children: JSX.Element
}

const Loader = (prop: ComponentProps) : JSX.Element => {
    if(prop.isLoading){
        return(
            <h1>LOADING</h1>
        )
    }
    else{
        return prop.children
    }
}
  
export default Loader
  