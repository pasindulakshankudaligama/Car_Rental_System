import React, {Component} from 'react';
import {styleSheet} from "./dashboard";
import {withStyles} from "@mui/styles";
//import AppBar from '../../components/common/appBar'
import Hero from "../../components/Hero/Hero";


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div>
                {/*<AppBar/>*/}
                <Hero/>

            </div>
        )
    }

}

export default withStyles(styleSheet)(Dashboard)