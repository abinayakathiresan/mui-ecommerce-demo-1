import React from "react";
import {Routes, Route } from "react-router-dom"; 
import Home from "./components/pages/Home/Home";


const RoutesConfig = function () {
    return (
      
        <Routes>
          <Route path="/" element={<Home/>} exact={true} /> 
          
          <Route path="*" element={<div>Page not found</div>}  exact={true}/>
        </Routes>
        
    );
  };
  export default RoutesConfig;