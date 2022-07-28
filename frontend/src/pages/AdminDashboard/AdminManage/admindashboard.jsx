import { Grid } from '@mui/material'
import React, { Component } from 'react'
import Navbar from '../../../components/common/NavBar/Admin'
import Sidebar from '../../../components/common/Sidebar'
import Widget from '../../../components/common/widgets'

class AdminManageDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: '',
            bookings: '',
            availableCars: '',
            reservedCars: '',
            activeBooking: '',
            availableDrivers: '',
            occupiedDrivers: '',
            needToMaintenance: '',
            underMaintenance: ''
        }
    }
    render() {
        return (
            <Grid container direction={'row'} columns='12'>
                <Grid item xs={'auto'} ><Sidebar/></Grid>
                <Grid item xs className=''>
                    <Navbar/>
                    <Grid container item xs={'auto'} className='flex p-5 gap-5'>
                        <Widget type="users" path="" number='500'/>
                        <Widget type="bookings" path="/driver" number='10'/>
                        <Widget type="Available cars" path="/driver" number='30'/>
                        <Widget type="Reserved cars" path="/driver" number='10'/>
                        <Widget type="Active Bookings" path="/driver" number='5'/>

                        <Widget type="Available Drivers" path="/driver" number='5'/>
                        <Widget type="Occupied Drivers" path="/driver" number='5'/>

                        <Widget type="Need To Maintenance" path="/driver" number='5'/>
                        <Widget type="Under Maintenance" path="/driver" number='5'/>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default AdminManageDashboard