import { Grid, Box, TextField} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TResortRequest } from '../interfaces/resort'
import {useAppSelector} from '../redux/hooks'
import PostService from "../service/PostService";

const CreatePost = () => {
    const resort = useAppSelector(((state) => state.resortReducer))
    const [post, setPost] = useState<string>('')
    const navigate = useNavigate();
    const params = useParams<TResortRequest>();

    const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setPost(value)
    }

    const submitComment = async () => {
        await PostService.createNewPost(resort.id, post)
        setPost('')
        navigate(`/${params.state}/${params.town}/post`);
    }

    return (
        <div>
            <Box >
                <h2>Create Post</h2>
                <Grid container direction={'column'} sx={{width: '60%', margin: 'auto'}} spacing={2}>
                    <Grid item sx={{}}>
                        <TextField
                            sx={{width: "100%", margin: 'auto',display: 'flex'}}
                            id="outlined-multiline-static"
                            multiline
                            label="Ask something!"
                            rows={5}
                            placeholder="Create a great post today..."
                            value={post}
                            onChange={handleComment}
                        />
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <button className="button-generic" onClick={submitComment}>Create Post</button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default CreatePost

