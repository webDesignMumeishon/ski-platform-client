import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export async function loader(): Promise<any> {
  const result = await axios.get("http://localhost:4000/resort/resorts", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.data;
}

const Resorts = () => {
  const list = useLoaderData() as any;

  return (
    <Box>
      <h1>Resorts</h1>

    <Grid container style={{border: 'solid blue 2px'}}>
    {
        list.map((resort: any) => {
            return (
                <Grid item lg={2} md={3} sm={4} xs={6} style={{border: 'solid red 2px'}}>
                    <Link to={`/${resort.state}/${resort.city}`}>
                        {resort.city}, {resort.state}
                    </Link>
                </Grid>
            );
        })
    }
    </Grid>

    </Box>
  );
};

export default Resorts;
