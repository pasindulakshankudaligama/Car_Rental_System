
import Dashboard from "../pages/Dashboard";

function App(){
    return(
        <div>
            <Dashboard/>
        </div>

    );
}


/*
import React from "react";
import Login from "../pages/session/Login";
import {Routes, Route} from "react-router-dom";
import NotFound from "../pages/session/NotFound";
import Dashboard from "../pages/Dashboard";

function App() {

  return (
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
  );
}
*/

export default App;
