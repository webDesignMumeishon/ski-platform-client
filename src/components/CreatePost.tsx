import { Grid, Box, TextField} from "@mui/material";
// import { useParams } from 'react-router-dom';
import { HiLocationMarker } from 'react-icons/hi';

// type SkiCenter = {
//     state: string
//     center: string
// }

const CreatePost = () => {
    // const params = useParams<SkiCenter>();
    
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
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <HiLocationMarker />
                            </Grid>
                            <Grid item sx={{marginLeft: '1em'}}>
                                <p>Add Location</p>
                            </Grid>
                        </Grid>
                    </Grid>
{/* 
                    <Grid item>
                    <TextField
                        id="outlined-number"
                        label="Postcode"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid> */}

                    <Grid item>
                        <button>Comment</button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
export default CreatePost

