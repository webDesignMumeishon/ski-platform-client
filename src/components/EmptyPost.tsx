import { Grid, Link, Box} from "@mui/material";

const EmptyPost = () => {
    return (
        <div>
            <Box >
                <Grid container justifyContent={'center'} alignItems="center" direction={'column'} sx={{height: '50vh'}}>
                    <Grid item>
                        <h2>Start Sharing Your Experience!</h2>
                    </Grid>

                    <Grid item>
                        <Link href={'blank'}>Create Your Post</Link>
                    </Grid>
                </Grid>
            </Box>
 
        </div>
    )
}

export default EmptyPost

