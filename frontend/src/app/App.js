import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import NotFound from '../pages/session/NotFound'


function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
          {/*  <Route path="admin" element={< />} />*/}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;