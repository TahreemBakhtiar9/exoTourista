import React from 'react';
import { useNavigate , Link} from 'react-router-dom';


export const Hotel = (props) => {
    const nav = useNavigate()
    const {id, name, shortDesc, longDecs, imgLink, location,experience,pool,price} = props.data;
    
// function handleBookNow(){
//     nav(`/hotel/${id}`)
// }
  return (
    <div className='hotel'>
        <div className='filters'></div>
        <img src={imgLink}/>

        <div className='desc'>
            <p><b>{name}</b></p>
            <ul className='list'> 
                <li>{shortDesc}</li>
                <li>{location}</li>
                <li>Rs: {price}/-</li>
            </ul>
          <Link to={`/hotel/${id}`}>
<button className='bookNowBttn' > Book now! </button>
</Link>
    </div>
    </div>
  )
}
