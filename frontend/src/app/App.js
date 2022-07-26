import Dashboard from "../pages/Dashboard";
import LoginAdmin from "../pages/session/Login/admin";
import AdminManageDashboard from "../pages/AdminDashboard/AdminManage/admindashboard";
import {Route,Routes} from "react-router-dom";
import LoginDriver from "../pages/session/Login/driver";
import NotFound from "../pages/session/NotFound";
import VehicleManage from "../pages/AdminDashboard/Vehicle Manage";
import AddNewVehicle from "../components/AddVehicle";
import VehicleRates from "../pages/AdminDashboard/VehicleRates";
import VehicleType from "../pages/AdminDashboard/VehicleTypes";
import DriverManage from "../pages/AdminDashboard/DriverManage";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route path="dashboard" element={<AdminManageDashboard/>}/>

            <Route path="admin">
                <Route index element={<LoginAdmin/>}/>
                <Route path="dashboard">
                    <Route index element={<AdminManageDashboard/>}/>
                    <Route path="vehiclemanage" element={<VehicleManage />} />
                    <Route path="vehiclerates" element={<VehicleRates/>}/>
                    <Route path="vehicletype" element={<VehicleType/>}/>
                    <Route path="drivermanage" element={<DriverManage/>}/>
                    <Route path="test" element={<AddNewVehicle />} />
                </Route>
            </Route>
            <Route path="driver">
                <Route index element={<LoginDriver/>}/>
                <Route path="dashboard" element={<AdminManageDashboard/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>

    );
}


export default App;
