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

    const [selectInOrder, setSelectInOrder] = useState("");
  
    const handleChange = (event) => {
        setSelectInOrder(event.target.value);
    };
    
    const try11 = () => {
        console.log(selectInOrder);
    }

    

    return (
        <div>
            {/* <List orderList={orderList}/>     */}
            <div className="purchaseOrderList">
                <div className="wordPurchaseOrderList">Purchase Order List</div>
                <div className="dropdownNTextareaInOrder">
                    <TextField
                        id="outlined -full-width"
                        label="Image Upload"
                        style={{margin: 8}}
                        name="upload photo"
                        type="file"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink:true,
                        }}
                        variant="outlined"
                        onChange={ handleChange }
                    />
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
                    <Box width="250px">
                        <TextField className="textFieldInOrder" label="Customer Code" select value={selectInOrder} onChange={handleChange} fullWidth>
                            <MenuItem value="Customer Code">Customer Code</MenuItem>
                            <MenuItem value="date">Date</MenuItem>
                        </TextField>
                    </Box>
                    {/* <TextField className="textFieldInProduct" id="outlined-basic" variant="outlined" /> */}
                    <TextField className="textFieldInOrder" id="standard-basic" label="Enter Customer Code" variant="standard" />
                    <button onClick={try11}>btn</button>
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
