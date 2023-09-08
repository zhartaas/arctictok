"use client";
import React, { Dispatch, FC, SetStateAction } from 'react';

import Select from 'react-select';
// import { colourOptions } from '../data';


interface MultiselectProps {
  options: any[],
  userChoice: string,
  setUserChoice: Dispatch<SetStateAction<string>>
}

const Multiselect: FC<MultiselectProps> = ({options, userChoice, setUserChoice}) => {
    const handleChange = (selectedOptions:any) => {

    // Extracting selected option values into an array of strings
    const selectedValues = selectedOptions.map((option:any) => option.value);
    setUserChoice(selectedValues + ", ");
    console.log(userChoice)
    console.log(typeof(userChoice))
  };
  return(
    <Select
        defaultValue={[options[6], options[4]]}
        isMulti
        name="colors"
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
    />
  )
} 

export default Multiselect