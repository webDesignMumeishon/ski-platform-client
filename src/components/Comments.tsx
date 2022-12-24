import { useEffect } from "react"
import axios from "axios"

import Comment from "./Comment"

const Comments = () => {

    useEffect(() => {
        const getComments = async () => {
            const {data} = await axios('http://localhost:3000/comment/')
            console.log(data)
        }
        getComments()
    }, [])

    return (
        <div>
            <Comment/>
        </div>
    )
}


export default Comments