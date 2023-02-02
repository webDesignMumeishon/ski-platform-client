import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Box, Grid } from "@mui/material";

import Resort from "./Resort";

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
    <Box style={{padding: '20px'}}>
        <Grid container >
        {
            list.map((resort: any, index: any) => {
                return (
                <Resort key={index} resort={resort}/>
                );
            })
        }
        </Grid>
    </Box>
  );
};

export default Resorts;
