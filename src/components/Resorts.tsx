import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { IResort } from "../interfaces/resort";
import Resort from "./Resort";

export async function loader(): Promise<IResort> {
  const result = await axios.get("http://localhost:4000/resort/resorts", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.data;
}

const Resorts = () => {
  const list = useLoaderData() as unknown as IResort[];
  return (
    <Box style={{padding: '20px'}}>
        <Grid container >
        {
            list.map((resort: IResort) => {
                return (
                <Resort key={resort.id} resort={resort}/>
                );
            })
        }
        </Grid>
    </Box>
  );
};

export default Resorts;
