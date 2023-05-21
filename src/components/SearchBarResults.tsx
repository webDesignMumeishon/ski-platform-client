import React, {useEffect, useRef} from "react";
import { FormControl, MenuItem } from "@mui/material";
import { IResort } from "../interfaces/resort";
import { capitalizeFirstLetter } from "../utils/handleWords";
import { Link } from "react-router-dom";
import { GoLocation } from 'react-icons/go';

interface CompProps {
  searchResults: IResort[];
  isInputSelected: boolean
  setIsInputSelected: any
}

function useOutsideAlerter(ref: any, setIsInputSelected: any) {
  useEffect(() => {
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
    position: "absolute",
    width: "100%",
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsInputSelected);
  const areLocationsFound = searchResults.length > 0

  return (
    <div className="search-bar-result-container" >
      <FormControl style={style} ref={wrapperRef} className="search-bar-result-form" >
        {isInputSelected && areLocationsFound? 
          <ul>
          {searchResults.map((resort) => (
            <MenuItem key={resort.id} value={resort.id}>
              <Link to={`/${resort.state}/${resort.city}/report`} reloadDocument >
                <GoLocation/>
                <span className="search-bar-location-name">{capitalizeFirstLetter(resort.city)}</span>
              </Link>
            </MenuItem>
          ))}
          </ul> 
        : 
        null
        }
      
    
      </FormControl>
    </div>
  );
};

export default SearchBarResults
