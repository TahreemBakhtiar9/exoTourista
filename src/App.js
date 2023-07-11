
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/home/Home';
import { Confirmation } from './pages/hotelconfirmation/Confirmation';
import { HotelDesc } from './pages/hoteldescription/HotelDesc';
import { TouristInfo } from './pages/touristinfo/TouristInfo';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={'/hotel/:id'} element={<HotelDesc/>}/>
        <Route path='/touristinfo' element={<TouristInfo/>}/>
        <Route path='/confirmation' element={<Confirmation/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
