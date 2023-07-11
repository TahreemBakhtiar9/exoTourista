import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const HotelDesc = (props) => {
  const {id} = useParams();
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/exotourista/hotel/get/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setHotel(data)
    
    })
    .catch((error) => console.error('Error: ', error));
    
  } , []);


  return (
    <div className='hotelpage'>
      <div>
        <h1>{hotel.location}</h1>
        <h2>{hotel.name}</h2>
        <h2>{hotel.longDesc}</h2>
      </div>


    <div className='hoteldesc'>
      {/* {hotel.map((hotelInfo) => 
      <HotelInfo data={hotelInfo}/>)} */}
    </div>
    </div>
  )
}
