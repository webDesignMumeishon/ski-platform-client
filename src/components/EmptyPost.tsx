import { Link } from "react-router-dom";
import { Grid,  Box} from "@mui/material";



const EmptyPost = () => {

    return (
        <div>
            <Box >
                <Grid container justifyContent={'center'} alignItems="center" direction={'column'} sx={{height: '50vh'}}>
                    <Grid item>
                        <h2>Start Sharing Your Experience!</h2>
                    </Grid>

                    <Grid item>
                        <Link to={'new/create'}>Create Your Post</Link>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default EmptyPost

