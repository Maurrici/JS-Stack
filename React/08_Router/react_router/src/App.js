import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Search from './pages/Search';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SearchForm from './components/SearchForm';

import { Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h2>React Router</h2>
      <BrowserRouter>
        <Navbar></Navbar>
        <SearchForm></SearchForm>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/search' element={<Search/>} />
          <Route path='/redirect' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
