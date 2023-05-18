import { Grid } from '@mui/material'
import { IComment } from '../interfaces/comments'
import {getFullDate} from '../utils/getDate'


interface Reply {
    reply: IComment
}

const Reply = ({ reply }: Reply) => {
return (
    <div className="reply-container">
        <div className="reply-content">
            <p>{reply.text}</p>
        </div>
    
        <Grid container className="reply-photo">
            <Grid container style={{width: '50%'}} className='reply-meta-data'>
                <Grid item xs={1} className='reply-meta-align'>
                    <img
                        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                        alt="Photo"
                    />
                </Grid>
                <Grid item xs={1} className='reply-meta-align'>
                    <p>·</p>
                </Grid>
                <Grid item>
                    <p>{getFullDate(new Date(reply.created_at))}</p>
                </Grid>
                <Grid item xs={1} className='reply-meta-align'>
                    <p>·</p>
                </Grid>
                <Grid item>
                    <p>{reply.first_name} {reply.last_name}</p>
                </Grid>
                
            </Grid>
        </Grid>
    </div>
)
}

export default Reply