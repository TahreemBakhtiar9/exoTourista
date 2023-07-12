import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


export const TouristInfo = () => {
  const {id} = useParams();
  const[touristInfo, setTouristInfo] = useState("")


  // const [hotel, setHotel] = useState([]);

  const {state} = useLocation();

  let hotel = state.hotel;

  console.log({price: hotel.price})

  // useEffect(() => {
  //   fetch(`http://localhost:8080/exotourista/hotel/get/${id}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     setHotel(data)
    
  //   })
  //   .catch((error) => console.error('Error: ', error));
    
  // } , []);


  
  const[error, setError] = useState([]);
  const[formData, setFormData] = useState({
    name:"",
    email:"",
    address:"",
    startDate:"",
    endDate:"",
    totalPrice:"",
    subTotal:"",
    
  });
  const{name,address,email,startDate,endDate,totalPrice,subTotal}=formData;
  const handleInputChange = (e) => {
  const {name, value} =e.target;
  setFormData((prev) => ({
    ...prev,[name]:value,
  }));
};

// const [nights, setNights] = useState('');
const [price, setPrice] = useState('');
const [withTax, setWithTax] = useState('');

const numOfNightsPrice = () => {
  const hotelPrice = hotel.price;
  const arrival = new Date(formData.startDate);
  const departure = new Date(formData.endDate);
  const noOfNights = (departure - arrival) / (1000*60*60*24)
  
  return (hotelPrice * noOfNights)
}

const TaxPrice = () => {
  const tax = 0.12;
  const totalPrice = numOfNightsPrice();
  const priceWithTax = totalPrice * tax;
  // setPrice(priceWithTax)
  return (priceWithTax)
}

const subTotals = () => {
  const totalPrice = numOfNightsPrice();
  const totalTax = TaxPrice();
  const subTotal = totalPrice + totalTax;
  return subTotal;
}

const handleSubmitForm = async(e) => {
  e.preventDefault();

 
    const newTouristInfo = {
      name:formData.name,
      address:formData.address,
      email:formData.email,
      startDate:formData.startDate,
      endDate: formData.endDate,
      totalPrice: formData.totalPrice,
      subTotal: formData.subTotal,
    };
    console.log(newTouristInfo)
    const response = await fetch(`http://localhost:8080/exotourista/tourist/post`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(newTouristInfo),
        })
        if(response.ok){
          console.log("data saved, apply navigation here")
        
        .then((response) => response.json())
        .then((data)=> setFormData(data))
        .catch((error)=> console.error('Error: ' ,error))
      
      }
  
 
// useEffect(async() => {
//   await fetch(`http://localhost:8080/exotourista/tourist/post`,{
//     method: "POST",
//     headers: {
//       // "Content-Type": "application/json",
//     },
//     body:JSON.stringify()
//   })
//   .then((response) => response.json())
//   .then((data)=> setFormData(data))
//   .catch((error)=> console.error('Error: ' ,error))
// })
}

  return (
    <>
   

   <div>
        <h1>Confirmation</h1>
          
        <form onSubmit={handleSubmitForm}>
        <label>Name</label>
        <br/>
        <input type='text' name='name' value={name} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Email Address</label>
        <br/>
        <input type='text' name='email' value={email} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Address</label>
        <br/>
        <input type='text' name='address' value={address} onChange={handleInputChange} />

        <br/>
        <br/>

        <label>Checkin Date</label>
        <br/>
        <input type='date' name='startDate' value={startDate} onChange={handleInputChange}/>
        <br/>
        <br/>

        <label>Checkout Date</label>
        <br/>
        <input type='date' name='endDate' value={endDate} onChange={handleInputChange}/>
        <br/>
        <br/>

        <br/>
        {/* <input type='readonly'/> */}
        <br/>
        <br/>


        <label> Total Price:</label>
        <br/>
        <input value={numOfNightsPrice()} readOnly/>
        <br/>
        <br/>

        <label>Sub Total with Tax:{subTotal}</label>
        <br/>
        <input value={TaxPrice()} readOnly/>
        <br/>
        <br/>
        <input type='submit'/>
        </form>
        
        
    </div>

    </>
  )
}
