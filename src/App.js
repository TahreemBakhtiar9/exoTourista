
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Home} from './pages/home/Home'
import { HotelList } from './pages/hotellist/HotelList';
import { HotelDesc } from './pages/hoteldescription/HotelDesc';
import { TouristInfo } from './pages/touristinfo/TouristInfo';
import { Confirmation } from './pages/hotelconfirmation/Confirmation';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='hotellist' element={<HotelList/>}/>
        <Route path='hoteldesc' element={<HotelDesc/>}/>
        <Route path='touristinfo' element={<TouristInfo/>}/>
        <Route path='confirmation' element={<Confirmation/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
