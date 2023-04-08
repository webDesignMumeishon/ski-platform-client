
interface ComponentProps{
    isLoading: boolean
    children: any
}

const Loader = (prop: ComponentProps) => {
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
  