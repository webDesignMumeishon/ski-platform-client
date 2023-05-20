import React, {useEffect, useRef} from "react";
import { FormControl, MenuItem } from "@mui/material";
import { IResort } from "../interfaces/resort";
import { capitalizeFirstLetter } from "../utils/handleWords";
import { Link } from "react-router-dom";

interface CompProps {
  searchResults: IResort[];
  isInputSelected: boolean
  setIsInputSelected: any
}

function useOutsideAlerter(ref: any, setIsInputSelected: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsInputSelected(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const SearchBarResults: React.FC<CompProps> = ({ searchResults, isInputSelected, setIsInputSelected }) => {
  const style: React.CSSProperties = {
    background: "black",
    position: "absolute",
    width: "100%",
    display: isInputSelected ? "" : 'none'
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsInputSelected);

  return (
    <div>
      <FormControl style={style} ref={wrapperRef}>
        {searchResults.map((resort) => (
          <MenuItem key={resort.id} value={resort.id}>
            <Link to={`/${resort.state}/${resort.city}/report`} reloadDocument>
              {capitalizeFirstLetter(resort.city)}
            </Link>
          </MenuItem>
        ))}
      </FormControl>
    </div>
  );
};

export default SearchBarResults
