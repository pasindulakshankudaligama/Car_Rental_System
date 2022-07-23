import React, {Component} from 'react';
import {styleSheet} from "./dashboard";
import {withStyles} from "@mui/styles";
import NavBar from "../../components/common/NavBar/User";
import Hero from "../../components/Hero/Hero";
import {Grid} from "@mui/material";
import ListVehicle from "../../components/ListVehicle";
import Footer from "../../components/Footer";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <NavBar />
                    <Hero/>
                    <ListVehicle/>
                    <Footer/>
                </div>
            </Grid>
        )
    }

}

export default withStyles(styleSheet)(Dashboard)