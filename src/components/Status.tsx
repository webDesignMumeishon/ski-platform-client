
interface StatusProps{
    status: boolean
}

const Status = (props: StatusProps) => {
    
    const title = props.status ? 'open' : 'closed'

    return (
        <span className={`status-main status-${title}`}>{title}</span>
    )
}



export default Status

