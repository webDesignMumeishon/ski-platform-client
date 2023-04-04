import { Grid, Box, TextareaAutosize} from "@mui/material";
const CreatePost = () => {
    return (
        <div>
            <Box >
                <Grid container direction={'column'}>
                    <Grid item>
                    <TextareaAutosize     
                        aria-label="empty textarea"
                        placeholder="Enter text here"
                        maxRows={10}
                        minRows={10} 
                    />
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

