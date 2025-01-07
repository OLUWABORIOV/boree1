import React, { useEffect, useState} from 'react'
import Home from './Components/Home';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return  (
  <>
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
  );
}

export default App;