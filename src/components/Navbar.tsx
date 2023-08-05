import { Link } from "react-router-dom";
import React, {useState} from "react";
import { Grid } from "@mui/material";

import { IResort } from "../interfaces/resort";
import SearchBar from "./SearchBar";
import SearchBarResults from "./SearchBarResults";
import skibuds from "../assets/goggles.png";
import useLogout from "./hooks/useLogout";



const Navbar = () => {
  const [resorts, setResorts] = useState<IResort[]>([]);
  const [isInputSelected, setIsInputSelected] = useState(false);

  const {handleLogout, logged} = useLogout()

  const login = (
    <Grid item>
      <Link to="/login">Login</Link>{" "}
    </Grid>
  );

  const logout = (
    <Grid item>
      <p onClick={handleLogout}>Logout</p>
    </Grid>
  );

  return (
    <Grid
      className="navbar-container"
      container
      alignItems="center"
      justifyContent={"space-between"}
    >
      <Grid item lg={1} sx={{ display: "contents" }}>
        <Link to="/">
          <Grid container alignItems={"center"}>
            <img
              src={skibuds}
              style={{ width: "30px" }}
              className="icon-navbar"
            />
            <span>Skibuds</span>
          </Grid>
        </Link>
      </Grid>

      <Grid item xs={8} md={8} sm={7}>
        <Grid container className="nav-bar-wrapper" alignItems={"center"}>
          <Grid item className="search-input" xs={isInputSelected ? 6 : 0}>
            <SearchBar
              setResorts={setResorts}
              setIsInputSelected={setIsInputSelected}
            />
            <SearchBarResults
              searchResults={resorts}
              isInputSelected={isInputSelected}
              setIsInputSelected={setIsInputSelected}
            />
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
        <Grid container></Grid>
        {logged ? logout : login}
      </Grid>
    </Grid>
  );
};

export default React.memo(Navbar);
