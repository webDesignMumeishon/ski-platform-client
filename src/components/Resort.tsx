import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { capitalizeFirstLetter } from "../utils/handleWords";
import { IResort } from "../interfaces/resort";

type PropsType = {
  resort: IResort;
};

const Resort = ({ resort }: PropsType) => {
  return (
    <Grid
      container
      lg={2}
      md={3}
      sm={4}
      xs={12}
      className="resort-container"
      justifyContent={"space-between"}
    >
      <Grid item xs={1}>
        {resort.flag}
      </Grid>

      <Grid item xs={11}>
        <Link to={`/${resort.state}/${resort.code}/report`} replace={false}>
          {capitalizeFirstLetter(resort.city)},{" "}
          {capitalizeFirstLetter(resort.state)}
        </Link>
      </Grid>
    </Grid>
  );
};

export default Resort;
