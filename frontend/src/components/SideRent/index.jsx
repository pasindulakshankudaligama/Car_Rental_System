import React, {Component} from 'react';
import {FormControlLabel, Grid, Switch, Typography, Checkbox } from "@mui/material";
import TextField from '@mui/material/TextField';

import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import CommonButton from "../common/Button";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";


class SideRent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navBar: false,
            selectedRentDate: new Date(),
            selectedReturnDate: new Date()
        };
    }

    render() {
        return (<Grid container direction={"column"} item xs={12} sm={12} md={12} lg={3} gap={2}
                      className={'bg-white mt-4 rounded-2xl '}>
            <Grid container direction={"row"} justifyContent={'center'} className={'bg-yellow-400 p-5 rounded-t-2xl'}>
                <Typography variant={'h4'}>
                    Enquiry Now
                </Typography>
            </Grid>
            <Grid item className={'p-5'}>

                    <ValidatorForm useref={"form"}
                                   onSubmit={this.handleSubmit}
                                   onError={(errors) => console.log(errors)}
                                   // className={classes.validator}
                    ><Grid container item direction={"column"} gap={2}>

                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DesktopDatePicker
                                disablePast={true}
                                showToolbar={false}
                                label="Rent Date"
                                inputFormat="MM/D/yyyy"
                                value={this.state.selectedDate}
                                onChange={this.handleChangeDate}
                                renderInput={(params) => <TextValidator
                                    validators={["required"]}
                                    style={{minWidth: '100%'}}
                                    errorMessages={["This field is required"]}
                                    {...params}
                                />}

                            />
                            <DesktopDatePicker
                                disablePast={true}
                                showToolbar={false}
                                label="Return Date"
                                inputFormat="MM/D/yyyy"
                                value={this.state.selectedReturnDate}
                                onChange={this.handleChangeDate}
                                renderInput={(params) => <TextValidator
                                    validators={["required"]}
                                    style={{minWidth: '100%'}}
                                    errorMessages={["This field is required"]}
                                    {...params}
                                />}

                            />
                            <Grid item>
                                <FormControlLabel control={<Checkbox />} label="Book for month" />
                                <br/>
                                <FormControlLabel control={<Checkbox />} label="With Driver" />
                            </Grid>
                        </LocalizationProvider>
                        <CommonButton
                            size="large"
                            variant="contained"
                            label="Find"
                            type="submit"
                            className="text-white bg-yellow-500 font-bold tracking-wide"
                        /><CommonButton
                        size="large"
                        variant="contained"
                        label="Book Now"
                        type="submit"
                        className="text-white bg-yellow-500 font-bold tracking-wide"
                    />
                    </Grid>

                    </ValidatorForm>

            </Grid>
        </Grid>);
    }
}

export default SideRent;