import React, {Component} from 'react';
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
//import AppBar from '../../components/common/appBar'
import Hero from "../../components/Hero";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                <AppBar/>
                <Hero/>

            </div>
        )
    }

}

export default withStyles(styleSheet)(Dashboard)