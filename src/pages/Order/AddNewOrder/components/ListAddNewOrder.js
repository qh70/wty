import { useState ,useContext } from "react";
import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import DatePicker from '@mui/lab/DatePicker';
import dayjs from 'dayjs';
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import TableInAddNewOrder from "../../../../components/Table/TableInAddNewOrder";
import TableInAddNewOrder2 from "../../../../components/Table/TableInAddNewOrder2";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { OrderContext } from "../../../../OrderContext";
import { GetContext } from "../../../../GetContext";


const ListAddNewOrder = ({ setOpen, setShowAddProduct, setDeletepopup, stateAllInAddNewOrder }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};

    const { 
        customerCodeAddNewOrder, setCustomerCodeAddNewOrder,
        poNoAddNewOrder, setPoNoAddNewOrder,
        attnAddNewOrder, setAttnAddNewOrder,
        titleAddNewOrder, setTitleAddNewOrder,
        telAddNewOrder, setTelAddNewOrder,
        dateAddNewOrder, setDateAddNewOrder,
        emailAddNewOrder, setEmailAddNewOrder,
        ordernumberAddNewOrder, setOrdernumberAddNewOrder,
        faxAddNewOrder, setFaxAddNewOrder,
        //6 Files
        filepoAddNewOrder, setFilepoAddNewOrder,
        fileRefAddNewOrder, setFileRefAddNewOrder,
        fileInvoiceAddNewOrder, setFileInvoiceAddNewOrder,
        filePackingListAddNewOrder, setFilePackingListAddNewOrder,
        fileWaybillAddNewOrder, setFileWaybillAddNewOrder,
        fileUploadothersAddNewOrder, setFileUploadothersAddNewOrder
    } = useContext(OrderContext);

    const { token } = useContext(GetContext)

    const form = new FormData()

    const json = JSON.stringify({
        "customRefId": "customRefId2",
        "poNo": "poNohere0445",
        "customerId": 1,
        "issueDate": "2023-06-05",
        "revisionCount": 1,
        "userId": 1,
        "locationId": 1,
        "localeId": "tc",
        "attn": "attn",
        "remark": "remark",
        "currency": "hkd",
        "totalAmount": 111.22,
        "status": "A",
        "createBy": "U:1",
        "createTime": "2023-10-19 05:56:07",
        "updateBy": "U:1",
        "updateTime": "2023-10-19 05:56:07",
        "customerCode" : customerCodeAddNewOrder
    })

    const blob = new Blob([json], {
        type : "application/json",
    });

    const customerCodeAddNewOrderChange = (e) => {
        setCustomerCodeAddNewOrder(e.target.value)
    }

    const poNoAddNewOrderChange = (e) => {
        setPoNoAddNewOrder(e.target.value)
    }
    const attnAddNewOrderOnchange = (e) => {
        setAttnAddNewOrder(e.target.value)
    }
    const titleAddNewOrderOnchange = (e) => {
        setTitleAddNewOrder(e.target.value)
    }
    const telAddNewOrderOnchange = (e) => {
        setTelAddNewOrder(e.target.value)
    }
    const dateAddNewOrderOnchange = (e) => {
        setDateAddNewOrder(e.$D+','+e.$M+','+e.$y);
        console.log(dateAddNewOrder);
    }
    const emailAddNewOrderOnchange = (e) => {
        setEmailAddNewOrder(e.target.value)
    }
    const ordernumberAddNewOrderOnchange = (e) => {
        setOrdernumberAddNewOrder(e.target.value)
    }
    const faxAddNewOrderOnchange = (e) => {
        setFaxAddNewOrder(e.target.value)
    }

    const filepoAddNewOrderOnChange = (e) => {
        setFilepoAddNewOrder(e.target.files[0])
        // form.append("salesOrderItems", e.target.files[0])
        // form.append("salesOrder", blob)
        // console.log(form.get("salesOrder"))
        // fetch("http://192.168.0.8:8089/rest/admin/salesOrder/full/", {
        //     method: "POST",
        //     headers: {
        //     "Authorization": `Bearer ${token}`
        //     },            
        //     body : form
        // })
        // .then((response) => response.json())
        // .then((data) => {console.log(data)});

        // fetch("http://192.168.0.8:8089/rest/admin/salesOrder/?currentPage=0&pageSize=10", {
        //     method: "GET",
        //     headers: {
        //     "Authorization": `Bearer ${token}`,
        //     "Content-Type": "application/json"
        //     }
        // })
        // .then((response) => response.json())
        // // .then((data) => {if (data.token){setLogin(true);setToken(data.token);}});
        // .then((data) => {console.log(data.items[0])});
    }
    const fileRefAddNewOrderOnChange = (e) => {
        setFileRefAddNewOrder(e.target.files[0])
    }
    const fileInvoiceAddNewOrderOnChange = (e) => {
        setFileInvoiceAddNewOrder(e.target.files[0])
    }
    const filePackingListAddNewOrderOnChange = (e) => {
        setFilePackingListAddNewOrder(e.target.files[0])
    }
    const fileWaybillAddNewOrderOnChange = (e) => {
        setFileWaybillAddNewOrder(e.target.files[0])
    }
    const fileUploadothersAddNewOrderOnChange = (e) => {
        setFileUploadothersAddNewOrder(e.target.files[0])
    }

  return (
    <div className="listInAddNewOrder">
        <a className="wordProductNHashtags">Order ######</a>
        {/* <div className="listForOrder"> */}
            <Box className="listForOrder" disabled>
                <Grid container spacing={8}>
                    {/* <div className="rowInListForOrder"> */}
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Customer Code" variant="standard" fullWidth
                            value={customerCodeAddNewOrder}
                            onChange={customerCodeAddNewOrderChange}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="P/O No." variant="standard" fullWidth
                            value={poNoAddNewOrder}
                            onChange={poNoAddNewOrderChange}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Attn" variant="standard" fullWidth
                            value={attnAddNewOrder}
                            onChange={attnAddNewOrderOnchange}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <FormControl className="textFieldInAddNewOrder" variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Select a Title</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={titleAddNewOrder}
                                onChange={titleAddNewOrderOnchange}
                                label="Age"
                                disabled={stateAllInAddNewOrder}
                                defaultValue={""}
                            >
                                <MenuItem value="Mr.">Mr.</MenuItem>
                                <MenuItem value="Mrs.">Mrs.</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Telephone" variant="standard" fullWidth
                            value={telAddNewOrder}
                            onChange={telAddNewOrderOnchange}
                            disabled={stateAllInAddNewOrder}                            
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DatePicker
                                label="Select the date"
                                openTo="day"
                                views={['year', 'month', 'day']}
                                value={dateAddNewOrder}
                                onChange={dateAddNewOrderOnchange}
                                renderInput={(params) => 
                                    <TextField 
                                        className="textFieldInAddNewOrder"
                                        {...params}  
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start" type="date">
                                                <DateRangeIcon />
                                            </InputAdornment>
                                            ),
                                        }} 
                                        fullWidth
                                        style={{marginBottom: "50px"}}
                                        disabled={stateAllInAddNewOrder}
                                    />
                                }
                                showDaysOutsideCurrentMonth
                                />

                                {/* <DatePicker 
                                    label="Select the date"
                                    renderInput={(params) => <TextField {...params} />}
                                /> */}

                            </Stack>
                        </LocalizationProvider>
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Email" variant="standard" fullWidth
                            value={emailAddNewOrder}
                            onChange={emailAddNewOrderOnchange}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Order Number" variant="standard" fullWidth
                            value={ordernumberAddNewOrder}
                            onChange={ordernumberAddNewOrderOnchange}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Fax" variant="standard" fullWidth
                            value={faxAddNewOrder}
                            onChange={faxAddNewOrderOnchange}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Customer P/O" variant="outlined" type="file"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            value={filepoAddNewOrder?filepoAddNewOrder.filename:""}
                            onChange={filepoAddNewOrderOnChange}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Customer Reference" variant="outlined" type="file"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            value={fileRefAddNewOrder?fileRefAddNewOrder.filename:""}
                            onChange={fileRefAddNewOrderOnChange}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Invoice" variant="outlined" type="file"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            value={fileInvoiceAddNewOrder?fileInvoiceAddNewOrder.filename:""}
                            onChange={fileInvoiceAddNewOrderOnChange}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Packing List " variant="outlined" type="file"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            value={filePackingListAddNewOrder?filePackingListAddNewOrder.filename:""}
                            onChange={filePackingListAddNewOrderOnChange}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Waybill" variant="outlined" type="file"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            value={fileWaybillAddNewOrder?fileWaybillAddNewOrder.filename:""}
                            onChange={fileWaybillAddNewOrderOnChange}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Others" variant="outlined" type="file"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            value={fileUploadothersAddNewOrder?fileUploadothersAddNewOrder.filename:""}
                            onChange={fileUploadothersAddNewOrderOnChange}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* Product Type */}
            <div className="listForOrder" style={{marginTop: "100px"}}>
                
                <div className="wordProductsInAddNewOrder">Products</div>
                <TableInAddNewOrder setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
                {/* <TableInAddNewOrder2 setDeletepopup={setDeletepopup}/> */}
                {!stateAllInAddNewOrder?
                    <Button className="buttonADDPRODUCTInAddNewOrder" variant="outlined" color="primary" onClick={handleClickOpen}>ADD PRODUCT</Button>
                 :null
                }
            </div>
            <Box className="listForOrder">
                <Grid container spacing={8}>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DatePicker
                                label="Select the date"
                                openTo="day"
                                views={['year', 'month', 'day']}
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                components={{
                                    OpenPickerIcon: DateRangeIcon,
                                }}
                                renderInput={(params) => 
                                    <TextField 
                                        className="textFieldInAddNewOrder" 
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <DateRangeIcon/>
                                            </InputAdornment>
                                            ),
                                        }} 
                                        {...params} 
                                        fullWidth
                                        style={{marginBottom: "50px"}}
                                        disabled={stateAllInAddNewOrder}
                                    />
                                }
                                showDaysOutsideCurrentMonth
                                />
                            </Stack>
                        </LocalizationProvider>
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Terms of delivery" variant="standard" fullWidth
                        disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={12}>
                        <TextField className="last3TextFieldInAddNewOrder" id="standard-basic" label="Delivery Address" variant="standard" fullWidth
                        disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={12}>
                        <TextField className="last3TextFieldInAddNewOrder" id="standard-basic" label="Payment Terms" variant="standard" fullWidth
                        disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={12}>
                        <TextField className="last3TextFieldInAddNewOrder" id="standard-basic" label="Remarks" variant="standard" fullWidth
                        disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                </Grid>
            </Box>
                    
                
                    
                
                    
                
    </div>
  )
}

export default ListAddNewOrder
