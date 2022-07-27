import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";
import VehicleTypeService from "../../services/VehicleTypeService";
import CustomSnackBar from "../common/SnackBar";

class AddVehicleType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                vehicle_Type_Id: props.isUpdate?props.typeObj.vehicle_Type_Id:'',
                type: props.isUpdate?props.typeObj.type:'',
                ldw:props.isUpdate?props.typeObj.ldw:'',
            },
            alert: false,
            message: '',
            severity: ''
        };
    }

    handleSubmit = async () => {
        let formData = this.state.formData
        if (this.props.isUpdate){
            let res = await VehicleTypeService.updateVehicleType(formData)
            if (res.status === 200) {
                this.setState({
                    alert:true,
                    message:'Vehicle Type Updated!',
                    severity:'success'
                })

            }else {
                this.setState({
                    alert:false,
                    message:'Vehicle Type Update Unsuccessful!',
                    severity:'error'
                })
            }

        }else {
            let res = await VehicleTypeService.postVehicleType(formData)
            if (res.status === 201) {
                this.setState({
                    alert:true,
                    message:'Vehicle Type Saved!',
                    severity:'success'
                })

            }else {
                this.setState({
                    alert:false,
                    message:'Vehicle Type Saved Unsuccessful!',
                    severity:'error'
                })
            }
        }

    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "vehicleTypeId":
                const vehicle_Type_Id = event.target.value;
                this.setState(Object.assign(this.state.formData, {vehicle_Type_Id: vehicle_Type_Id}));
                // this.setState({ userId });
                break;

            case "type":
                const type = event.target.value;
                this.setState(Object.assign(this.state.formData, {type: type}));
                break;

            case "ldw":
                const ldw = event.target.value;
                this.setState(Object.assign(this.state.formData, {ldw: ldw}));
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
                                    label="Vehicle Type ID"
                                    onChange={this.handleChange}
                                    name="vehicle_Type_Id"
                                    value={this.state.formData.vehicle_Type_Id}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="Type"
                                    onChange={this.handleChange}
                                    name="type"
                                    value={this.state.formData.type}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className="w-full"
                                    style={{minWidth: '100%'}}
                                />
                                <TextValidator
                                    label="L.D.W"
                                    onChange={this.handleChange}
                                    name="ldw"
                                    value={this.state.formData.ldw}
                                    validators={["required","isFloat"]}
                                    errorMessages={["This field is required",'input is not valid']}
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
                    onClose={()=>{
                        this.setState({alert:false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant={'filled'}
                />
            </>);
    }
}

export default withStyles(styleSheet)(AddVehicleType);