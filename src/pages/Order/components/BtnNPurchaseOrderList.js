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

function createData(name, POno, Attention, Date) {
    return { name, POno, Attention, Date };
};

const rows = [
    createData("CST001", "Chanel-000010", "Wai, Benny", "02 Aug 2021"),
    createData("CST002", "Chanel-000011", "Wai, Benny", "01 Aug 2021"),
];

const BtnNPurchaseOrderList = () => {

    const [selectInOrder, setSelectInOrder] = useState("Customer Code");
  
    const handleChange = (event) => {
        setSelectInOrder(event.target.value);
    }; 

    const [valueInOrder, setValueInOrder] = useState(new Date());

    return (
        <div>
            {/* <List orderList={orderList}/>     */}
            <div className="purchaseOrderList">
                <div className="wordPurchaseOrderList">Purchase Order List</div>
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
                    <TextField className="formControlInOrder" label="Customer Code" select value={selectInOrder} onChange={handleChange} fullWidth>
                        <MenuItem value="Customer Code">Customer Code</MenuItem>
                        <MenuItem value="Date">Date</MenuItem>
                    </TextField>
                    {/* <TextField className="textFieldInProduct" id="outlined-basic" variant="outlined" /> */}
                    {
                        selectInOrder === "Customer Code"?
                        <TextField className="textFieldInOrder" id="standard-basic" label="Enter Customer Code" variant="standard" />
                        :null
                    }
                    {
                        selectInOrder === "Date"?
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack className="datepickerInOrder" spacing={3}>
                                <DatePicker
                                label="Select the date"
                                openTo="day"
                                views={['year', 'month', 'day']}
                                value={valueInOrder}
                                onChange={(newValue) => {
                                    setValueInOrder(newValue);
                                }}
                                renderInput={(params) => 
                                    <TextField 
                                        {...params} 
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <DateRangeIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                }
                                showDaysOutsideCurrentMonth
                                />
                                {/* <DesktopDatePicker
                                    label="Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={valueInOrder}
                                    onChange={(newValue) => {
                                        setValueInOrder(newValue);
                                    }}
                                    renderInput={(params: TextFieldProps)=>{
                                        return <TextField {...params} />;
                                    }}
                                    views={["day", "month"]}
                                    showDaysOutsideCurrentMonth
                                /> */}
                            </Stack>
                        </LocalizationProvider>
                        :null
                    }
                </div>
                {/* <TableContainer component={Paper} className="tableContainer"> */}
                <Table className="tableInOrder" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableFirstRowInOrder">Coustomer Code</TableCell>
                            <TableCell className="tableFirstRowInOrder">P/O No.</TableCell>
                            <TableCell className="tableFirstRowInOrder">Attention</TableCell>
                            <TableCell className="tableFirstRowInOrder">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="tableCellInOrder" component="th" scope="row">{row.name}</TableCell>
                            <TableCell className="tableCellInOrder" align="left">{row.POno}</TableCell>
                            <TableCell className="tableCellInOrder" align="left">{row.Attention}</TableCell>
                            <TableCell className="lastTableCellInOrder" align="left">{row.Date}</TableCell>
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
