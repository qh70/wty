import { useState, useContext } from 'react';
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

import { GetContext } from "../../../../GetContext";

function createData( LoginName, UserName, Email, Role ) {
    return { LoginName, UserName, Email, Role };
};

const BtnNPurchaseOrderList = () => {

    const [selectInClient, setSelectInClient] = useState("Enter Customer Code");
  
    const handleChange = (event) => {
        setSelectInClient(event.target.value);
    }; 

    const history = useHistory();
    const goToEditClient = () => {
        history.push("/editclient")
    }

    const { clientsResponse } = useContext(GetContext); 

    return (
        <div>
            {/* <List orderList={orderList}/>     */}
            <div className="purchaseOrderList">
                <div className="wordPurchaseOrderList">Clients List</div>
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
                    <TextField className="formControlInOrder" select value={selectInClient} onChange={handleChange} fullWidth>
                        <MenuItem value="Enter Customer Code" >Enter Customer Code</MenuItem>
                        <MenuItem value=""></MenuItem>
                    </TextField>
                    {/* <TextField className="textFieldInProduct" id="outlined-basic" variant="outlined" /> */}
                    {
                        selectInClient === "Enter Customer Code"?
                        <TextField className="textFieldInProduct" id="standard-basic" label="Enter Customer Code" variant="standard" sx={{width: 250}}/>
                        :
                        <TextField className="textFieldInProduct" id="standard-basic" label="" variant="standard" sx={{width: 250}}/>
                    }
                </div>
                {/* <TableContainer component={Paper} className="tableContainer"> */}
                <Table className="tableInOrder" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableFirstRowInProduct">Customer Code</TableCell>
                            <TableCell className="tableFirstRowInProduct">Customer Name</TableCell>
                            <TableCell className="tableFirstRowInProduct">Company Name</TableCell>
                            <TableCell className="tableFirstRowInProduct">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientsResponse.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell className="tableCellInOrder pointer" onClick={goToEditClient} component="th" scope="row">{row.customerNameEn}</TableCell>
                            <TableCell className="tableCellInOrder pointer" onClick={goToEditClient} align="left">{row.customerNameTc}</TableCell>
                            <TableCell className="tableCellInOrder pointer" onClick={goToEditClient} align="left">{row.email}</TableCell>
                            <TableCell className="tableCellInOrder pointer" onClick={goToEditClient} align="left">{row.customerId}</TableCell>
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
