import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Home from './Home/Home';
import Navbar from './Shared/Navbar';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
