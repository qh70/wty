import { useState, useContext } from "react";
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

import { GetContext } from "../../../../GetContext"
import { OrderContext } from "../../../../OrderContext";


const ListAddNewOrder = ({ setOpen, setShowAddProduct, setDeletepopup, stateAllInAddNewOrder }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};

    const { 
        filePoEditOrder, setFilePoEditOrder,
        filecustomerRefEditOrder, setFilecustomerRefEditOrder
    } = useContext(OrderContext);

    const { orderResponse, indexOfData, editable } = useContext(GetContext); 
    // console.log(orderResponse.find(order => order.salesOrderId === 44))
    const thisOrder = 'order'
    // const thisOrder = orderResponse.find(order => order.salesOrderId === indexOfData);

    const filePoEditOrderOnChange = (e) => {
        setFilePoEditOrder(e.target.files[0])
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
                            value = {orderResponse.customerCode}
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className = "gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="P/O No." variant="standard" fullWidth
                            value = {orderResponse.poNo}
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                            disabled = {stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Attn" variant="standard" fullWidth
                            value = {orderResponse.attn}
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                            disabled = {stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <FormControl className="textFieldInAddNewOrder" variant="standard" fullWidth>
                            <InputLabel id="demo-simple-select-standard-label">Select a Title</InputLabel>
                            <Select
                                labelId = "demo-simple-select-standard-label"
                                id ="demo-simple-select-standard"
                                // value={age}
                                // onChange={handleChange}
                                label = "Age"
                                value = {orderResponse.title}
                                InputProps={{
                                    readOnly: !editable,
                                    disableUnderline: !editable
                                }}
                                disabled = {stateAllInAddNewOrder}
                            >
                                <MenuItem value="Mr.">Mr.</MenuItem>
                                <MenuItem value="Mrs.">Mrs.</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Telephone" variant="standard" 
                            value = {orderResponse.tel}
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                            disabled={stateAllInAddNewOrder}
                            fullWidth
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                                <DatePicker
                                label="Select the date"
                                openTo="day"
                                views={['year', 'month', 'day']}
                                value = {orderResponse.issueDate}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                InputProps={{
                                    readOnly: !editable,
                                    disableUnderline: !editable
                                }}
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
                            value = {orderResponse.email}
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Order Number" variant="standard" date fullWidth
                            value = "?"
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Fax" variant="standard" fullWidth
                            value = {orderResponse.fax}
                            InputProps={{
                                readOnly: !editable,
                                disableUnderline: !editable
                            }}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Customer P/O" variant="outlined" type={editable?'file':null}
                            value={editable&&filePoEditOrder?filePoEditOrder.filename
                                :editable&&!filePoEditOrder?null
                                :orderResponse.salesOrderFiles.po.originalName}
                            onChange={filePoEditOrderOnChange}
                            InputProps={{
                                readOnly: !editable,
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                            
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Customer Reference" variant="outlined" type={editable?'file':null}
                            value={editable&&filecustomerRefEditOrder?filecustomerRefEditOrder.filename
                                :editable&&!filecustomerRefEditOrder?null
                                :orderResponse.salesOrderFiles.customerRef.originalName}
                            // onChange={filecustomerRefEditOrderOnChange}
                            InputProps={{
                                readOnly: !editable,
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Invoice" variant="outlined" type={editable?'file':null}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Packing List " variant="outlined" type={editable?'file':null}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Waybill" variant="outlined" type={editable?'file':null}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
                            fullWidth
                            disabled={stateAllInAddNewOrder}
                        />
                    </Grid>
                    <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        <TextField 
                            className="textFieldInAddNewOrder" 
                            id="standard-basic" label="Upload Others" variant="outlined" type={editable?'file':null}
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <UploadFileIcon />
                                </InputAdornment>
                                ),
                            }}
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
