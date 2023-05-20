import React, { useState } from "react";
import ResortService from "../service/ResortService";
import { IResort } from "../interfaces/resort";

type CompProps = {
  setResorts: React.Dispatch<React.SetStateAction<IResort[]>>
  setIsInputSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchBar = ({setResorts, setIsInputSelected}: CompProps) => {
    const [value, setValue] = useState<string>("");
    const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      setValue(inputValue);
      if (inputValue.length > 0) {
        const result = await ResortService.searchByKeyword(inputValue);
        setResorts(result.data);
      }
      else{
        setResorts([]);
      }
    };

    const handleInputFocus = async () => {
        setIsInputSelected(true)
    };

    return (
      <label htmlFor="Search">
            <input
                id="Search"
                placeholder="Search"
                onChange={handleOnChange}
                value={value}
                onFocus={handleInputFocus}
            />
        </label>
    )
  }
  

  export default SearchBar