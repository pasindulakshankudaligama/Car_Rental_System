
//import AppBar from "../components/common/appBar";
import Dashboard from "../pages/Dashboard";

function App(){
    return(
        <div>
            {/* <div className={'bg-red-500'}>
               fffffffff
            </div>*/}
            {/* <AppBar />*/}
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
