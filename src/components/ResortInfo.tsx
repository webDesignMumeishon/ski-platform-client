import { Grid, Link} from "@mui/material";

type PropsType = {
    link?: string
}

const ResortInfo = (props : PropsType) => {

    return (
        <div style={{margin: '10px 0px'}}>
            <h2>More Info</h2>
            <Grid container justifyContent='center'>
                <Grid item xs={10} sx={{background: '#FFF', display: 'flex', justifyContent: 'center',  borderRadius: '10px', padding: '5px', }}>
                    <Link href={props.link} sx={{cursor: 'pointer', width: '100%', textAlign: 'center'}}>Resort Website</Link>
                </Grid>
            </Grid>
        </div>
    );
  };
  
  export default ResortInfo;