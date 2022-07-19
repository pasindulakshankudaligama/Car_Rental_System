import React from "react";
import HomePage from "../pages/Home";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import Posts from "../../src/pages/Posts";
function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='posts' element={<Posts/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
  );
}

export default App;
