import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { Box } from "@mui/material";
import { IResort } from "../interfaces/resort";
import Countries from "./Countries";

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

  const uniqueCountries = new Set();

  // Iterate through the array and add each unique country to the Set
  list.forEach((item) => {
    uniqueCountries.add(item.country);
  });

  // Convert the Set back to an array if needed
  const uniqueCountriesArray: string[] = Array.from(
    uniqueCountries
  ) as string[];

  return (
    <Box style={{ padding: "20px" }} className="resorts">
      {uniqueCountriesArray.map((countryName: string, index: number) => (
        <Countries
          countryName={countryName}
          resorts={list}
          key={index}
        ></Countries>
      ))}
    </Box>
  );
};

export default Resorts;
