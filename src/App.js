import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <Box width='400px' sx={{ width: {xl: '1488px'}}} m='auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
