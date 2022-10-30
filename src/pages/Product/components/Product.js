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

function createData(name, calories) {
    return { name, calories };
};

const rows = [
    createData("Pink Angel", "Pink Angel xxxxxxxxx1"),
    createData("Pink Angel", "Pink Angel xxxxxxxxx2"),
];

const ProductList = () => {

    const [age, setAge] = useState("");
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    function goAddNewProduct (){
        document.location = "/addnewproduct";
    }

    return (
        <div>
            {/* <button className="buttons" onClick={goAddNewOrder}>Add New Product</button> */}
            <button className="buttonInProduct" onClick={goAddNewProduct}>Add New Product</button>
            {/* <List orderList={orderList}/>     */}
            <div className="productList">
                <div className="wordProductList">Product List</div>
                <div className="dropdownNtextarea">
                <FormControl className="formControlInProduct" sx={{ m: 1 }}>
                    <Select
                    className="selectInProduct"
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Product Name</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    {/* <FormHelperText>Without label</FormHelperText> */}
                </FormControl>
                {/* <TextField className="textFieldInProduct" id="outlined-basic" variant="outlined" /> */}
                <input className="textFieldInProduct" placeholder="Product Name"></input>
                </div>
                <div className="try111">
                {/* <TableContainer component={Paper} className="tableContainer"> */}
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="left">Description of Goods</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="left">{row.calories}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                {/* </TableContainer> */}
                </div>
                
                {/* <div>
                <a className="wordProductName">Product Name</a><a>Description of Goods</a>
                <hr />
                </div> */}
            </div>
            <Stack className="stackInProduct" spacing={2}>
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
        </div>
    )
}

export default ProductList
