import React from "react";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import Purple from "./Purple";
import Marble from "./Marble";
import { Routes, Route } from "react-router-dom";


export default function MainContainer() {
  return(
    <div id="main-section">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/blue' element={<Blue/>} />
      <Route path='/red' element={<Red/>} /> 
      <Route path='/purple' element={<Purple/>} />
      <Route path='/marble' element={<Marble/>} />
    </Routes>
  </div>
  )
}