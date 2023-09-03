import { Grid } from "@mui/material";
import { IResort } from "../interfaces/resort";
import Resort from "./Resort";

type PropsType = {
  countryName: string;
  resorts: IResort[];
};

const Countries = ({ countryName, resorts }: PropsType) => {
  const countryResorts = resorts.filter(
    (resort) => resort.country === countryName
  );

  return (
    <>
      <h3 className="countries-title">{countryName}</h3>
      <Grid container>
        {countryResorts.map((resort: IResort) => {
          return <Resort key={resort.id} resort={resort} />;
        })}
      </Grid>
    </>
  );
};

export default Countries;
