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

function createData( ProductName, DescriptionProduct ) {
    return { ProductName, DescriptionProduct };
};

const ProductList = () => {

    const [selectInOrder, setSelectInOrder] = useState("Product Name");
  
    const handleChange = (event) => {
        setSelectInOrder(event.target.value);
    }; 

    const [valueInOrder, setValueInOrder] = useState(new Date());

    const history = useHistory();

    const goToEditProduct = () => {
        history.push("/editproduct");
    }

    const { productResponse, indexOfData, setIndexOfData } = useContext(GetContext); 
    

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
                        {productResponse.map((row, index) => (
                        <TableRow
                            key={index}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            onClick={() => {
                                setIndexOfData(index);
                            }}
                        >
                            <TableCell className="tableCellInProduct" component="th" scope="row" onClick={goToEditProduct}>{row.productNameEn}</TableCell>
                            <TableCell className="tableCellInProduct" align="left" onClick={goToEditProduct}>{row.longDescEn}</TableCell>
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

export default ProductList
