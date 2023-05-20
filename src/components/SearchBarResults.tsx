import React from "react";
import { FormControl, MenuItem } from "@mui/material";
import { IResort } from "../interfaces/resort";
import { capitalizeFirstLetter } from "../utils/handleWords";
import { Link } from "react-router-dom";

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
        {searchResults.map((resort) => (
          <MenuItem key={resort.id} value={resort.id}>
            <Link to={`/${resort.state}/${resort.city}/report`} replace={false}>
              {capitalizeFirstLetter(resort.city)}
            </Link>
          </MenuItem>
        ))}
      </FormControl>
    </div>
  );
};

export default SearchBarResults
