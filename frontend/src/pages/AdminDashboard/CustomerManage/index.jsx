import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/NavBar/Admin";
import Sidebar from "../../../components/common/Sidebar";
import CommonDataTable from "../../../components/common/Table";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import AddDriver from "../../../components/AddDriver";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomerService from "../../../services/CustomerService";
import CustomSnackBar from "../../../components/common/SnackBar";

class CustomerManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            updateCustomer: {},
            isUpdate: false,
            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "id",
                    headerName: "Customer ID",
                    width: 175,
                },

                {
                    field: "name",
                    headerName: "Name",
                    width: 175,
                },

                {
                    field: "address",
                    headerName: "Address",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "mobile_Number",
                    headerName: "Mobile No.",
                    width: 175,
                    sortable: false,
                },
                {
                    field: "driving_License_Number",
                    headerName: "Driving License No",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "nIC_Number",
                    headerName: "NIC",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "email",
                    headerName: "Email",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "password",
                    headerName: "Password",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "Action",
                    headerName: "Action",
                    width: 175,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                        await this.deleteCustomers(params.row.id);
                                    }}>
                                        <DeleteIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
    }

    deleteCustomer = async (id) => {

        let params = {
            id: id,
        }
        let res = await CustomerService.deleteCustomers(params)
        console.log(res)
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadCustomerData();
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }
    }

    async loadCustomerData() {
        let resp = await CustomerService.fetchCustomer();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.id;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
    }

    componentDidMount() {
        this.loadCustomerData();
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
                                Add New Employee
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddDriver/>
                    </DialogContent>
                </Dialog>
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
            </Grid>
        );
    }
}

export default withStyles(styleSheet)(CustomerManage);