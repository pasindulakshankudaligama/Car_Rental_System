import React from "react";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/session/NotFound";

function App() {

  return (
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
