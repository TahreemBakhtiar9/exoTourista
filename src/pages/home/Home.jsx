import React, { useEffect, useState } from 'react';
import { Hotel } from './Hotel';

export const Home = () => {

  const [hotels, setHotels] = useState([]);
  // const api= fetch('http://localhost:8080/exotourista/hotel/get');
  // console.log(api)
  useEffect(() => {
    fetch(`http://localhost:8080/exotourista/hotel/get`)
    .then((response) => response.json())
    .then((data) => setHotels(data))
    .catch((error) => console.error('Error: ', error));
  } , []);

  return (
    <div className='home'>

      <div className='title'>
      <h1> EXOTOURISTA </h1>
      </div>

      <div className='filters'> 
        {hotels.map((hotel) => (
          <Hotel key={hotel.id} data={hotel} />
        ))}
      </div>
    </div>
  )
}
