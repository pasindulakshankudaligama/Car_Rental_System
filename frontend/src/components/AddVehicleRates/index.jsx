import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";
import CustomSnackBar from "../common/SnackBar";
import VehicleRatesService from "../../services/VehicleRatesService";


class AddVehicleRates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                "rate_Id": props.isUpdate ? props.obj.rate_Id : '',
                "daily_Rate": props.isUpdate ? props.obj.daily_Rate : '',
                "monthly_rate": props.isUpdate ? props.obj.monthly_rate : '',
                "free_Km_Day": props.isUpdate ? props.obj.free_Km_Day : '',
                "free_Km_Month": props.isUpdate ? props.obj.free_Km_Month : '',
                "extra_Km_Price": props.isUpdate ? props.obj.extra_Km_Price : '',
            },
            alert: false,
            message: '',
            severity: ''
        };
    }

    handleSubmit = async () => {
        let formData = this.state.formData;
        if (this.props.isUpdate) {
            let res = await VehicleRatesService.updateVehicleRates(formData)
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: 'Rates Updated!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Rates Update Unsuccessful!',
                    severity: 'error'
                });
            }
        } else {
            let res = await VehicleRatesService.postVehicleRate(formData)
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: 'Rates Saved!',
                    severity: 'success'
                })
            } else {
                this.setState({
                    alert: true,
                    message: 'Rates Saved Unsuccessful!',
                    severity: 'error'
                });
            }
        }
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "rate_Id":
                const rate_Id = event.target.value;
                this.setState(Object.assign(this.state.formData, {rate_Id: rate_Id}));
                // this.setState({ userId });
                break;

            case "daily_Rate":
                const daily_Rate = event.target.value;
                this.setState(Object.assign(this.state.formData, {daily_Rate: daily_Rate}));
                break;

            case "monthly_rate":
                const monthly_rate = event.target.value;
                this.setState(Object.assign(this.state.formData, {monthly_rate: monthly_rate}));
                break;


            case "free_Km_Day":
                const free_Km_Day = event.target.value;
                this.setState(Object.assign(this.state.formData, {free_Km_Day: free_Km_Day}));
                break;

                case "free_Km_Month":
                const free_Km_Month = event.target.value;
                this.setState(Object.assign(this.state.formData, {free_Km_Month: free_Km_Month}));
                break;

            case "extra_Km_Price":
                const extra_Km_Price = event.target.value;
                this.setState(Object.assign(this.state.formData, {extra_Km_Price: extra_Km_Price}));
                break;

            default:
                break;
        }
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <Grid container direction={'row'} xs={12} className={classes.container}>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={classes.validator}
                    >
                        <Grid item container direction={'row'} xs={12} gap={'15px'} justifyContent={'center'}
                              alignContent={'center'}
                              className={classes.container}>
                            <Grid item container direction={'column'} xs={12} gap={'15px'}>
                                <TextValidator
                                    label="Rate ID"
                                    onChange={this.handleChange}
                                    name="rateId"
                                    value={this.state.formData.rate_Id}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Daily Rate"
                                    onChange={this.handleChange}
                                    name="dailyRate"
                                    value={this.state.formData.daily_Rate}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Free Km For a Day"
                                    onChange={this.handleChange}
                                    name="freeKmForaDay"
                                    value={this.state.formData.free_Km_Day}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Free Km For a Month"
                                    onChange={this.handleChange}
                                    name="freeKmForaMonth"
                                    value={this.state.formData.free_Km_Month}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Monthly Rate"
                                    onChange={this.handleChange}
                                    name="monthlyRate"
                                    value={this.state.formData.extra_Km_Price}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Price Per Extra Km"
                                    onChange={this.handleChange}
                                    name="pricePerExtraKm"
                                    value={this.state.formData.pricePerExtraKm}
                                    validators={["required", "isFloat"]}
                                    errorMessages={["This field is required", 'input is not valid']}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <CommonButton
                                    size="large"
                                    variant="contained"
                                    label={this.props.isUpdate ? 'Update' : 'Add'}
                                    type="submit"
                                    className="text-white bg-blue-500 font-bold tracking-wide"
                                    style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                                />
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </Grid>
                <CustomSnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant={'filled'}
                />
            </>);

    }
}

export default withStyles(styleSheet)(AddVehicleRates);