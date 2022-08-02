import React, {Component} from 'react';
import {Grid, Typography} from "@mui/material";
import NavBarVehicle from "../../components/common/NavBar/User";
import Footer from "../../components/Footer";
import SideRent from "../../components/SideRent";
import {withRouter} from '../../withRouter'
import vehicleService from "../../services/VehicleService";


class DetailsOfAVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'consectetur adipisicing elit.Lorem ipsum dolor sit amet,',
            // img:'./assets/img/cover/car_04.jpg'
            img: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21vYmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80g',
            price: {
                perDay: '20000.00',
                monthly: '50000.00',
                driver: '1000.00',
                ldw: '60000.00'
            },
            vehicleObj: {
                "registration_Number": '',
                "colour": '',
                "no_Of_Passengers": '',
                "transmission_Type": '',
                "brand": '',
                "status": '',
                "fuel_Type": '',
                "running_Km": '',

                "vehicleType": {
                    "vehicle_Type_Id": '',
                    "type": '',
                    "loss_Damage_Waiver": '',
                },
                "rates": {
                    "rate_Id": '',
                    "daily_Rate": '',
                    "monthly_rate": '',
                    "free_Km_Day": '',
                    "free_Km_Month": '',
                    "extra_Km_Price": '',
                }
            },
        }
    }

    async loadVehicle(id) {
        let res = await vehicleService.fetchVehicle(id)
        if (res.status === 200) {
            this.setState({
                vehicleObj: res.data.data
            })
        } else {
            console.log(res.status)
        }
    }

    async componentDidMount() {
        const {regNumber} = this.props.params
        await this.loadVehicle(regNumber)

    }

    render() {
        return (
            <Grid container>
                <Grid container item xs={12}>
                    <NavBarVehicle/>
                </Grid>
                <Grid container item xs={12} gap={'10px'} justifyContent={'center'} className={'bg-gray-200 p-3'}>
                    <Grid container direction={"column"} item xs={12} md={12} lg={8}>
                        <Grid container item sm={"auto"}>

                            <Grid item xs={12} sm={12} md={12} lg={4} height={"max-content"} className={'mt-4'}>
                                <Grid height={'500px'}
                                      style={{backgroundImage: `url(${this.state.img})`}}
                                      className={' border-amber-50 border-2 bg-center bg-cover mr-2 rounded-2xl'}>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={8}
                                  className={'bg-white p-5 break-words mt-4 rounded-2xl capitalize'}>
                                <Typography variant={'h5'} className={'mb-5 font-medium'}>
                                    {this.state.vehicleObj.brand}
                                </Typography>
                                <hr/>
                                <br/>
                                <Grid item container direction={'column'} gap={2} className={"font-bold px-6"}>
                                    <ul className={'list-disc list-outside flex flex-col gap-3'}>
                                        <li><Typography variant={'p'}>
                                            Per Day Charge : Rs {this.state.vehicleObj.rates.daily_Rate}
                                        </Typography></li>
                                        <li><Typography variant={'p'}>
                                            Monthly Charge : Rs {this.state.vehicleObj.rates.monthly_rate}
                                        </Typography></li>
                                        <li><Typography variant={'p'}>
                                            Driver Per Day Charge : Rs {this.state.price.driver}
                                        </Typography></li>
                                        <li><Typography variant={'p'} component={'div'} className={'flex flex-col'}>
                                            Loss Damage Waiver(LDW) : Rs {this.state.vehicleObj.vehicleType.loss_Damage_Waiver} <br/>
                                            <Typography variant={'span'} className={'text-sm  text-red-500 font-thin'}>*After
                                                the
                                                vehicle is returned, a brief inspection will be done, and if the vehicle
                                                is
                                                damaged or harmed, an appropriate amount will be deducted from the Loss
                                                Damage Waiver payment and the rest will be returned.</Typography>
                                        </Typography></li>
                                    </ul>
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid container item sm={"auto"}>
                            <Grid item xs={12} sm={12} className={'bg-white p-5 break-words mt-4 rounded-2xl pb-16'}>
                                <Typography variant={'h6'}>
                                    Description
                                    <hr/>
                                </Typography>
                                <Grid container item className={'pb-5'}>
                                    <Grid item container justifyContent={'center'} xs={12} gap={5}>
                                        <Grid item container direction={'column'} gap={1} xs={12} sm={12} md={5}
                                              className={'mt-4 divide-dashed divide-yellow-500'}>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Brand</Typography>
                                                <Typography variant={'p'}>{this.state.vehicleObj.brand}</Typography>
                                            </Grid>
                                            <hr/>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Color</Typography>
                                                <Typography variant={'p'}>{this.state.vehicleObj.colour}</Typography>
                                            </Grid>
                                            <hr/>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>No. Of
                                                    Passengers</Typography>
                                                <Typography
                                                    variant={'p'}>{this.state.vehicleObj.no_Of_Passengers}</Typography>
                                            </Grid>
                                            <hr/>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Loss Damage
                                                    Waiver(LDW)</Typography>
                                                <Typography variant={'p'}>{this.state.vehicleObj.vehicleType.loss_Damage_Waiver}</Typography>
                                            </Grid>

                                        </Grid>

                                        <Grid item container direction={'column'} gap={1} xs={12} sm={12} md={5}
                                              className={'mt-4 divide-dashed divide-yellow-500'}>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Fuel
                                                    Type</Typography>
                                                <Typography variant={'p'}>{this.state.vehicleObj.fuel_Type}</Typography>
                                            </Grid>
                                            <hr/>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Transmission
                                                    Type</Typography>
                                                <Typography
                                                    variant={'p'}>{this.state.vehicleObj.transmission_Type}</Typography>
                                            </Grid>
                                            <hr/>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Running
                                                    Km</Typography>
                                                <Typography variant={'p'}>{this.state.vehicleObj.running_Km}</Typography>
                                            </Grid>
                                            <hr/>
                                            <Grid item container justifyContent={'space-between'}>
                                                <Typography variant={'p'} className={'font-medium'}>Type</Typography>
                                                <Typography variant={'p'}>{this.state.vehicleObj.vehicleType.type}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container item direction={'row'} justifyContent={'center'} xs={12}>
                                    <Grid item>
                                        <table className={'border-collapse'}>
                                            <caption className={'font-medium'}>Rates</caption>
                                            <thead>
                                            <tr>
                                                <th className={'border border-slate-600 border-dashed p-1'}>Monthly Rate
                                                    (Rs)
                                                </th>
                                                <th className={'border border-slate-600 border-dashed p-1'}>Daily Rate
                                                    (Rs)
                                                </th>
                                                <th className={'border border-slate-600 border-dashed p-1'}>Free Km For
                                                    a Month
                                                </th>
                                                <th className={'border border-slate-600 border-dashed p-1'}>Free Km For
                                                    a Day
                                                </th>
                                                <th className={'border border-slate-600 border-dashed p-1'}>Price Per
                                                    Extra Km (Rs)
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className={'border border-slate-600 border-dashed text-center'}>{this.state.vehicleObj.rates.monthly_rate}</td>
                                                <td className={'border border-slate-600 border-dashed text-center'}>{this.state.vehicleObj.rates.daily_Rate}</td>
                                                <td className={'border border-slate-600 border-dashed text-center'}>{this.state.vehicleObj.rates.free_Km_Month}</td>
                                                <td className={'border border-slate-600 border-dashed text-center'}>{this.state.vehicleObj.rates.free_Km_Day}</td>
                                                <td className={'border border-slate-600 border-dashed text-center'}>{this.state.vehicleObj.rates.extra_Km_Price}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*<Grid item xs={12} sm={12} md={12} lg={3} className={'bg-yellow-500 mt-4 rounded-2xl p-5'}>
                        dsa
                    </Grid>*/}
                    <SideRent/>
                </Grid>
                <Footer/>
            </Grid>
        );
    }
}
export default DetailsOfAVehicle;