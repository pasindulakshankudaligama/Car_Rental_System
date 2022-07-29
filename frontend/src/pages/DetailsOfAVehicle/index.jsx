import React, {Component} from 'react';
import {Grid, Typography} from "@mui/material";
import NavBarVehicle from "../../components/common/NavBar/User";
import Footer from "../../components/Footer";
import SideRent from "../../components/SideRent";


class DetailsOfAVehicle extends Component {
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
                                      className={'bg-loginAdmin-img border-amber-50 border-2 bg-center bg-cover mr-2 rounded-2xl'}>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={8}
                                  className={'bg-white p-5 break-words mt-4 rounded-2xl'}>
                                <Typography variant={'h5'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </Typography>
                                <hr/>
                                <br/>
                                dsadasdasd
                            </Grid>

                        </Grid>

                        <Grid container item sm={"auto"}>
                            <Grid item xs={12} sm={12} className={'bg-white p-5 break-words mt-4 rounded-2xl'}>
                                <Typography variant={'h6'}>
                                    Description
                                    <hr/>
                                </Typography>
                                <Typography variant={'p'}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </Typography>
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