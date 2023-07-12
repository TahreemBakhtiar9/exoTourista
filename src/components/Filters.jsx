// havent navigated or imported this component to home page 




import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Radio, RadioGroup, Select, FormControlLabel } from '@material-ui/core';

export const Filters = () => {
    const [city, setCity] = useState('');
    const [explvl, setExplvl] = useState('');
    const [pool, setPool] = useState(false);
    const [filteredHotels, setFilteredHotels] = useState([]);



  return (
    <>
     <div className='filterform'>
  <FormControl>
    <InputLabel id="cities-label">Select a city:</InputLabel>
    <Select className='cities' labelId="cities-label" id={data.id}>
      <MenuItem value="Karachi">Karachi</MenuItem>
      <MenuItem value="Islamabad">Islamabad</MenuItem>
      <MenuItem value="Lahore">Lahore</MenuItem>
    </Select>
  </FormControl>
  <FormControl>
    <InputLabel id="explvl-label">Select an experience level:</InputLabel>
    <Select className='explvl' labelId="explvl-label" id={data.id}>
      <MenuItem value="Budget">Budget</MenuItem>
      <MenuItem value="Business">Business</MenuItem>
      <MenuItem value="Luxury">Luxury</MenuItem>
    </Select>
  </FormControl>
  <FormControl component="fieldset">
    <InputLabel>Pool?</InputLabel>
    <RadioGroup className='pool' id='pool' name='pool'>
      <FormControlLabel value='yes' control={<Radio />} label='Yes' />
      <FormControlLabel value='no' control={<Radio />} label='No' />
    </RadioGroup>
  </FormControl>
</div>

    </>
  )
}
