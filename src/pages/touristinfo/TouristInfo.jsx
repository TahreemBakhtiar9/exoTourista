import React, { useEffect, useState } from 'react'

export const TouristInfo = () => {
  const[touristInfo, setTouristInfo] = useState("")
  
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
const handleInputChange = (e) => {
  const {name, value} =e.target;
  setFormData((prev) => ({
    ...prev,[name]:value,
  }));
};

const handleSubmitForm = async(e) => {
  e.preventDefault();

  try{
    const newTouristInfo = {
      name:formData.name,
      address:formData.address,
      email:formData.email,
      startDate:formData.startDate,
      endDate: formData.endDate,
      totalPrice: "",
      subTotal: "",
    };

    const response = await fetch(`http://localhost:8080/exotourista/tourist/post`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(newTouristInfo),
        })
        if(response.ok){
          console.log("data saved, apply navigation here")
        
        // .then((response) => response.json())
        // .then((data)=> setFormData(data))
        // .catch((error)=> console.error('Error: ' ,error))
      
      }
  }
  catch(error){
    console.error(error);
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


    <div>
      <div class="mb-3" style={{margin:"40px", display:'flex'}}>
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  

  
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>

  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </div>
  )
}
