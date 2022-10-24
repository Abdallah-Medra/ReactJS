import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Guard from './components/Guard';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Guard><Cart/></Guard>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </>
  );
}

export default App;
