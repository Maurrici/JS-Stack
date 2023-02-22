import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Count from './pages/Count';
import Navbar from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/count' element={<Count/>} />
        </Routes>
      </BrowserRouter>
  ) 
}

export default App;
