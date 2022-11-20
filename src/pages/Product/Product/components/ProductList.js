import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { TextFieldProps } from "@mui/material";
import dayjs from 'dayjs';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputAdornment from '@mui/material/InputAdornment';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';

function createData( ProductName, DescriptionProduct ) {
    return { ProductName, DescriptionProduct };
};

const rows = [
    createData("Pink Angel", "Pink Angel xxxxxxxxxx Pink Angel xxxxxxxxxx Pink Angel xxxxxxxxxx Pink Angel xxxxxxxxxx"),
    createData("CST002", "Pink Angel xxxxxxxxxx Pink Angel xxxxxxxxxx Pink Angel xxxxxxxxxx Pink Angel xxxxxxxxxx"),
];

const BtnNPurchaseOrderList = () => {

    const [selectInOrder, setSelectInOrder] = useState("Product Name");
  
    const handleChange = (event) => {
        setSelectInOrder(event.target.value);
    }; 

    const [valueInOrder, setValueInOrder] = useState(new Date());

    const goToEditProduct = () => {
        document.location = "editproduct"
    }

    return (
        <div>
            {/* <List orderList={orderList}/>     */}
            <div className="purchaseOrderList">
                <div className="wordPurchaseOrderList">Purduct List</div>
                <div className="dropdownNTextareaInOrder">
                    
                    {/* <FormControl className="formControlInOrder" sx={{ m: 1 }}>
                        <Select
                        className="selectInOrder"
                        value={selectInOrder}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                Customer Code
                            </MenuItem>
                            <MenuItem value="date">Date</MenuItem>
                        </Select> */}
                        {/* <FormHelperText>Without label</FormHelperText> */}
                    {/* </FormControl> */}
                    <TextField className="formControlInOrder" select value={selectInOrder} onChange={handleChange} fullWidth>
                        <MenuItem value="Product Name" >Product Name</MenuItem>
                        <MenuItem value="Description of Goods">Description of Goods</MenuItem>
                    </TextField>
                    {/* <TextField className="textFieldInProduct" id="outlined-basic" variant="outlined" /> */}
                    {
                        selectInOrder === "Product Name"?
                        <TextField className="textFieldInProduct" id="standard-basic" label="Enter Product Name" variant="standard" sx={{width: 250}}/>
                        :
                        <TextField className="textFieldInProduct" id="standard-basic" label="Enter Description of Goods" variant="standard" sx={{width: 250}}/>
                    }
                </div>
                {/* <TableContainer component={Paper} className="tableContainer"> */}
                <Table className="tableInOrder" aria-label="simple table">
                    <colgroup>
                        <col style={{width:'12%'}}/>
                        <col style={{width:'88%'}}/>
                    </colgroup>
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableFirstRowInProduct">Product Name</TableCell>
                            <TableCell className="tableFirstRowInProduct">Description of Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="tableCellInProduct" component="th" scope="row" onClick={goToEditProduct}>{row.ProductName}</TableCell>
                            <TableCell className="tableCellInProduct" align="left" onClick={goToEditProduct}>{row.DescriptionProduct}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {/* </TableContainer> */}
                
                {/* <div>
                <a className="wordProductName">Product Name</a><a>Description of Goods</a>
                <hr />
                </div> */}
            </div>
            <Stack className="stackInOrder">
                <Pagination count={10} />
            </Stack>
        </div>
    )
}

export default BtnNPurchaseOrderList
