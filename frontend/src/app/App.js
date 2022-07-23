import Dashboard from "../pages/Dashboard";
import LoginAdmin from "../pages/session/Login/admin";
import AdminManageDashboard from "../pages/AdminDashboard/AdminManage/admindashboard";
import {Route,Routes} from "react-router-dom";
import LoginDriver from "../pages/session/Login/driver";
import NotFound from "../pages/session/NotFound";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route path="dashboard" element={<AdminManageDashboard/>}/>

            <Route path="admin">
                <Route index element={<LoginAdmin/>}/>
                <Route path="dashboard">
                    <Route index element={<AdminManageDashboard/>}/>
                </Route>
            </Route>
            <Route path="driver">
                <Route index element={<LoginDriver/>}/>

            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
}


export default App;
