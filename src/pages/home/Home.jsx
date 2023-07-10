import React, { useEffect, useState } from 'react'
import { Hotel } from './Hotel';

export const Home = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/exotourista/hotel/get`)
    .then((response) => response.json())
    .then((data) => setHotels(data))
    .catch((error) => console.error('Error: ', error));
  } , []);

//   const useFetch = (`http://localhost:8080/exotourista/hotel/get`) => {
// const [data, setData] = useState{null};
// // const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

//   useEffect(() => {
//      const fetchData = async () => {
//       try {
//       const response = await fetch(`http://localhost:8080/exotourista/hotel/get`)
//       // .then((response) => response.json())
//       if(!response.ok){
//         throw new Error('Error occured while fetching data')
//       }

//       const responseData = await response.json();
//       setData(responseData);
//       }
//       catch (error) {
//         setError(error.message);
//       }
//      } ;

//      fetchData(); 
//     }, [`http://localhost:8080/exotourista/hotel/get`];
// //       .then((date) =>)
// // })


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
