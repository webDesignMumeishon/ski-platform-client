import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { IResort } from "../interfaces/resort";


type PropsType = {
    resort: IResort
}

const Resort = ({resort} : PropsType) => {
    return (
        <Grid item lg={2} md={3} sm={4} xs={6} style={{border: 'solid red 2px'}}>
            <Link to={`/${resort.state}/${resort.city}`}>
                {resort.city}, {resort.state}
            </Link>
        </Grid>
    );
  };
  
  export default Resort;