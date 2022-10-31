import { useState } from "react";
import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs';
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import TableInAddNewOrder from "../../components/Table/TableInAddNewOrder";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InputAdornment from '@mui/material/InputAdornment';


const ListAddNewProduct = ({ setOpen, setShowAddProduct }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(dayjs('2022-04-07'));
    
    const handleClickOpen = () => {setOpen(true);};

  return (
    <div className="listInAddNewOrder">
        <a className="wordProductNHashtags">Order ######</a>
        <div className="listForOrder">
            {/* <div className="rowInListForOrder"> */}
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Customer Code" variant="standard" />
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="P/O No." variant="standard" />
            {/* </div> */}

            {/* <div className="rowInListForOrder"> */}
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Attn" variant="standard" />
                <FormControl className="textFieldInAddNewOrder" variant="standard" >
                    <InputLabel id="demo-simple-select-standard-label">Select a Title</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="Mr.">Mr.</MenuItem>
                        <MenuItem value="Mrs.">Mrs.</MenuItem>
                    </Select>
                </FormControl>
            {/* </div> */}

            {/* <div className="rowInListForOrder"> */}
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Telephone" variant="standard" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack className="textFieldInAddNewOrder" spacing={3}>
                        <DatePicker
                        disableFuture
                        label="Select the date"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
            {/* </div> */}

            {/* <div className="rowInListForOrder"> */}
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Email" variant="standard" />
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Order Number" variant="standard" date/>
            {/* </div> */}

            {/* <div className="rowInListForOrder"> */}
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Fax" variant="standard" /><br></br>
            {/* </div> */}

            {/* <div className="rowInListForOrder"> */}
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
                >
                    
                </TextField>
                
            {/* </div> */}

            {/* Product Type */}
            <div className="wordProductsInAddNewOrder">Products</div>
            <TableInAddNewOrder />
            <Button className="buttonADDPRODUCTInAddNewOrder" variant="outlined" color="primary" onClick={handleClickOpen}>ADD PRODUCT</Button>
            {/* <div className="rowInListForOrder"> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack className="textFieldInAddNewOrder" spacing={3}>
                        <DatePicker
                        disableFuture
                        label="Select the date"
                        openTo="day"
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>
                <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Terms of delivery" variant="standard" />
            {/* </div> */}
            {/* <div className="rowInListForOrder"> */}
                <TextField className="last3TextFieldInAddNewOrder" id="standard-basic" label="Delivery Address" variant="standard" />
            {/* </div> */}
            {/* <div className="rowInListForOrder"> */}
                <TextField className="last3TextFieldInAddNewOrder" id="standard-basic" label="Payment Terms" variant="standard" />
            {/* </div> */}
            {/* <div className="rowInListForOrder"> */}
                <TextField className="last3TextFieldInAddNewOrder" id="standard-basic" label="Remarks" variant="standard" />
            {/* </div>             */}
        </div>
    </div>
  )
}

export default ListAddNewProduct
