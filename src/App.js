import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from './pages/About';
import Services from './pages/Services';
import Packages from './pages/Packages';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Destination from './pages/Destination';
import Booking from './pages/Booking';
import Travel from './pages/Travel';
import Sign from './pages/Sign';
import { TodoProvider } from './context/TodoContext';
import Mybookings from './pages/Mybookings';
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import Api from './components/Api';
function App() {
  return (
    <BrowserRouter>
     <TodoProvider>
        <Navigation />

        <Routes>

          <Route path="/" element={<Navigate to="/Home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/packages" element={<Packages />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/Destination' element={<Destination />}></Route>
          <Route path='/Booking' element={<Booking />}></Route>
          <Route path='/Travel' element={<Travel />}></Route>
          <Route path='/Sign' element={<Sign />}></Route>
          <Route path='/Mybookings' element={<Mybookings />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/UpdateProfile' element={<UpdateProfile />}></Route>
          <Route path='/Api' element={<Api />}></Route>
        </Routes>
      
      <Footer />
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
