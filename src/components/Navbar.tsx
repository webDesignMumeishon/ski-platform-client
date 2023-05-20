import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Grid
} from "@mui/material";

interface SearchResult {
  id: string;
  name: string;
}

interface SearchBarProps {
  searchResults: SearchResult[];
  open: boolean;
}


const mockResults = [
  { id: "null", name: "null" },
  { id: "null", name: "null" },
  { id: "null", name: "null" },
];

const Navbar = () => {
  const [value, setValue] = useState<string>("");
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleInputFocus = () => {
    setIsInputSelected(true);
  };

  const handleInputBlur = () => {
    setIsInputSelected(false);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm: string) => {
    searchTerm + '1'
  };


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
            <label htmlFor="Search">
              <input
                id="Search"
                placeholder="Search"
                onChange={handleOnChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <button onClick={() => onSearch(value)}>Search</button>
              <SearchBar
                open={isInputSelected}
                searchResults={mockResults}
              />
            </label>
          </Grid>

          <Grid item>
            <Link to="/">Home</Link>
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

const SearchBar: React.FC<SearchBarProps> = ({
  searchResults,
  open,
}) => {
  const style: React.CSSProperties = {
    background: "black",
    position: "absolute",
    width: "100%",
    display: open ? "" : "none",
  };
  return (
    <div>
      <FormControl style={style}>
        {searchResults.map((result) => (
          <MenuItem key={result.id} value={result.id} autoFocus={true}>
            {result.name}
          </MenuItem>
        ))}
      </FormControl>
    </div>
  );
};

export default Navbar;
