import { Grid, Box, TextField} from "@mui/material";

// import {useAppSelector} from '../redux/hooks'

const CreatePost = () => {
    // const resort = useAppSelector(((state) => state.resortReducer))
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
                        />
                    </Grid>
                    <Grid item>
                    </Grid>
                    <Grid item>
                        <button>Comment</button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default CreatePost

