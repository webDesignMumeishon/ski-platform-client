

type componentProps = {
    title: string
}

const Comment = (props : componentProps) => {
    console.log(props)
    return (
        <div>
            This is a single comment
            <p>{props.title}</p>
            
        </div>
    )
}

export default Comment