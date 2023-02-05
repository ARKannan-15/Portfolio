import React ,{useEffect,useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Aboutme from './Aboutme/Aboutme';
import Intro from './Intro';
import Club from './Club';
import Work from './Work';
import Touch from './Touch';
import Home from './Home';


function App()
{
  
  return(
    <BrowserRouter>
   
      <Routes>
      <Route path='/' element={<Home />} />  
      <Route path="/about" element={<Aboutme />} />   
      <Route path="/work" element={<Work />} />     
      <Route path="/contact" element={<Touch />}/>
      </Routes>
    
    </BrowserRouter>
    
  )
}

export default App;