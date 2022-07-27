import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/NavBar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/Table";
import AddIcon from "@mui/icons-material/Add";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import AddVehicleType from "../../../components/AddVehicleType";
import DriverService from "../../../services/DriverService";
import VehicleTypeSevice from "../../../services/VehicleTypeSevice";

class VehicleType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "registrationNumber",
                    headerName: "Vehicle Type ID",
                    width: 400,
                },

                {
                    field: "Type",
                    headerName: "Type",
                    width: 400,
                },

                {
                    field: "L.D.W.",
                    headerName: "L.D.W.",
                    width: 400,
                    sortable: false,
                },

                {
                    field: "Action",
                    headerName: "Action",
                    width: 400,
                },
            ],
        };
    }
    updateVehicleType=(data)=>{
        const rows =data;
        console.log(rows)
    }
    async loadData() {
        let resp = await VehicleTypeSevice.fetchVehicleType();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.vehicle_Type_Id;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
        console.log(this.state.data);
        // console.log(this.state.data);
        /*this.state.data.map((value, index)=>{
            console.log(index)
            console.log(value)
        })*/

    }


    componentDidMount() {
        this.loadData();
        console.log("Mounted");
    }

    render() {
        const {classes} = this.props;
        return (
            <Grid container direction={"row"} columns="12">
                <Grid item xs={"auto"}>
                    <Sidebar/>
                </Grid>
                <Grid item xs className="">
                    <Navbar/>
                    <Grid container item xs={"auto"} className="flex p-5 gap-5">
                        <Grid
                            container
                            item
                            xs={12}
                            gap="5px"
                            className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                        >
                            <CommonButton
                                variant="outlined"
                                label="Add Vehicle Type"
                                onClick={() => this.setState({popup: true})}
                                startIcon={<AddIcon/>}
                            />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            gap="5px"
                            className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            style={{height: "700px"}}
                        >
                            <CommonDataTable
                                columns={this.state.columns}
                                rows={this.state.data}
                                rowsPerPageOptions={5}
                                pageSize={10}
                                // checkboxSelection={true}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                Add New Vehicle Type
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers={this.state.updateVehicleType[0]}>
                        <AddVehicleType/>
                    </DialogContent>
                </Dialog>
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(VehicleType);