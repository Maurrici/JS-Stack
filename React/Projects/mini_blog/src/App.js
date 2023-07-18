import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import CreatePost from './views/CreatePost/CreatePost'
import Dashboard from './views/Dashboard/Dashboard';

import React from 'react';
import { useState, useEffect } from 'react';

import { AuthProvider } from './context/AuthContext';
import { onAuthStateChanged } from "firebase/auth";
import { useAuth } from './hooks/useAuth';

function App() {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuth();

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (userRequest) => {
      setUser(userRequest)
    })
  }, [auth])

  if(loadingUser){
    return <p style={{textAlign: "center"}}>Carregando...</p>
  }

  const handleUserAccess = (view, isNeededLogin) => {
    if(!user){
      if(!isNeededLogin) return view
      else return <Navigate to="/login" />
    }

    if(user){
      if(isNeededLogin) return view
      else return <Navigate to="/" />
    }
  }

  return (
    <div className="App">
      <AuthProvider value={user}>
        <BrowserRouter>
          <Navbar></Navbar>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={ handleUserAccess(<Login />, false) } />
              <Route path='/register' element={ handleUserAccess(<Register />, false) } />
              <Route path='/post/create' element={ handleUserAccess(<CreatePost />, true) } />
              <Route path='/dashboard' element={ handleUserAccess(<Dashboard/>, true) } />
            </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
