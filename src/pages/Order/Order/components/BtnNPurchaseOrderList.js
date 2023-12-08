import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputAdornment from '@mui/material/InputAdornment';

// API網址
import { API_HOST } from '../../../../global/constants';

import { GetContext } from '../../../../GetContext';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';


function createData(name, POno, Attention, Date) {
    return { name, POno, Attention, Date };
};

const BtnNPurchaseOrderList = () => {

    const [selectInOrder, setSelectInOrder] = useState("Customer Code");
  
    const handleChange = (event) => {
        setSelectInOrder(event.target.value);
    }; 

    const [valueInOrder, setValueInOrder] = useState(new Date());

    const history = useHistory();

    const goToEditOrder = () => {
        history.push("/editorder")
    }

    const { token, orderResponse, setOrderResponse, setIndexOfData } = useContext(GetContext); //props from Context

    // 更改頁碼後去後端fetch該頁會有的資料
    const [ current, setCurrent ] = useState(1);

    const handlePageChange = (page) => {
        console.log(page.nativeEvent.target.innerText)
        setCurrent(page.nativeEvent.target.innerText);
    };
    
    useEffect(()=>{
        console.log(current)
    }, [current])

    useEffect (()=>{
        console.log(current)
        fetch(`${API_HOST}/salesOrder/?currentPage=${current-1}&pageSize=10`, {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then((response) => response.json())
          .then((data) => {setOrderResponse(data.items)
        });  
    }, [current])

    // orderResponse.map((row)=>{console.log(row)})

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
                        {orderResponse.map((row, index) => (
                        <TableRow
                            key={index}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => {
                                setIndexOfData(index);
                            }}
                        >
                            <TableCell onClick={goToEditOrder} className="tableCellInOrder pointer" component="th" scope="row">{row.clientCustomerCode}</TableCell>
                            <TableCell onClick={goToEditOrder} className="tableCellInOrder pointer" align="left">{row.poNo}</TableCell>
                            <TableCell onClick={goToEditOrder} className="tableCellInOrder pointer" align="left">{row.attn}</TableCell>
                            <TableCell onClick={goToEditOrder} className="lastTableCellInOrder pointer" align="left">{row.issueDate}</TableCell>
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
                <Pagination count={10} onChange={handlePageChange}/>
            </Stack>
        </div>
    )
}

export default BtnNPurchaseOrderList
