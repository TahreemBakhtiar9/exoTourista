import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';


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
      <img src={hotel.imgLink}/>
      <div>
        <h1>{hotel.name}</h1>
        <p>{hotel.location}</p>
        <p>Rs: {hotel.price}/-</p>
        <p>{hotel.pool}</p>
        <p>{hotel.longDesc}</p>
      </div>


    <div className='Book'>
     <Link to={'/touristinfo'}>
      <button>Book Now</button>
     </Link>
    </div>
    </div>
  )
}
