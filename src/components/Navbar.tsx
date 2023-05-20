import { Link } from "react-router-dom";
import { useState } from "react";
import {  Grid } from "@mui/material";
import { IResort } from "../interfaces/resort";
import SearchBar from "./SearchBar";
import SearchBarResults from "./SearchBarResults";

const Navbar = () => {
  const [resorts, setResorts] = useState<IResort[]>([]);
  const [isInputSelected, setIsInputSelected] = useState(false);

  return (
    <Grid
      className="navbar-container"
      container
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Grid item lg={1} style={{ marginRight: "10px" }}>
        <p>ICON</p>
      </Grid>

      <Grid item xs={8} md={8} sm={7}>
        <Grid container className="nav-bar-wrapper">
          <Grid item className="search-input">
            <SearchBar setResorts={setResorts} setIsInputSelected={setIsInputSelected}/>
            <SearchBarResults searchResults={resorts} isInputSelected={isInputSelected} setIsInputSelected={setIsInputSelected}/>
          </Grid>

          <Grid item>
            <Link to="/">Map</Link>
          </Grid>

          <Grid item>
            <Link to="/resorts">Resorts</Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={1} md={1} sm={2}>
        <Grid container>
          <Grid item>
            <Link to="/login">Login</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


export default Navbar;
