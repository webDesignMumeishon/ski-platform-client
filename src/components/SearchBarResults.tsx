import React from "react";
import { FormControl, MenuItem } from "@mui/material";
import { IResort } from "../interfaces/resort";

interface CompProps {
  searchResults: IResort[];
  isInputSelected: boolean
}

const SearchBarResults: React.FC<CompProps> = ({ searchResults, isInputSelected }) => {
  const style: React.CSSProperties = {
    background: "black",
    position: "absolute",
    width: "100%",
    display: isInputSelected ? "" : 'none'
  };
  return (
    <div>
      <FormControl style={style}>
        {searchResults.map((result) => (
          <MenuItem key={result.id} value={result.id}>
            {result.city}
          </MenuItem>
        ))}
      </FormControl>
    </div>
  );
};

export default SearchBarResults
