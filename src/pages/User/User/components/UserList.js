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

// API網址
import { API_HOST } from '../../../../global/constants';

import { GetContext } from "../../../../GetContext";

function createData( LoginName, UserName, Email, Role ) {
    return { LoginName, UserName, Email, Role };
};

const BtnNPurchaseOrderList = () => {

    const [selectInUser, setSelectInUser] = useState("Login Name");
  
    const handleChange = (event) => {
        setSelectInUser(event.target.value);
    };

    const history = useHistory();

    const goToEditUser = () => {
        history.push("/edituser")
    }

    const { token, userResponse, singleUserResponse, setSingleUserResponse, setIndexOfData } = useContext(GetContext);

    return (
        <div>
            {/* <List orderList={orderList}/>     */}
            <div className="purchaseOrderList">
                <div className="wordPurchaseOrderList">Users List</div>
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
                    <TextField className="formControlInOrder" select value={selectInUser} onChange={handleChange} fullWidth>
                        <MenuItem value="Login Name" >Login Name</MenuItem>
                        <MenuItem value="User Name">User Name</MenuItem>
                    </TextField>
                    {/* <TextField className="textFieldInProduct" id="outlined-basic" variant="outlined" /> */}
                    {
                        selectInUser === "Login Name"?
                        <TextField className="textFieldInProduct" id="standard-basic" label="Search Login Name" variant="standard" sx={{width: 250}}/>
                        :
                        <TextField className="textFieldInProduct" id="standard-basic" label="Search User Name" variant="standard" sx={{width: 250}}/>
                    }
                </div>
                {/* <TableContainer component={Paper} className="tableContainer"> */}
                <Table className="tableInOrder" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="tableFirstRowInProduct">Login Name</TableCell>
                            <TableCell className="tableFirstRowInProduct">User Name</TableCell>
                            <TableCell className="tableFirstRowInProduct">Email</TableCell>
                            <TableCell className="tableFirstRowInProduct">Role</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userResponse.map((row) => (
                        <TableRow
                            key={row.name}
                            onClick={() => {
                                console.log(row.userId)
                                setIndexOfData(row.userId);
                                fetch(`${API_HOST}/users/${row.userId}`, {
                                    method: "GET",
                                    headers: {
                                      "Authorization": `Bearer ${token}`
                                    }
                                  })
                                  .then((response) => response.json())
                                  .then((data) => {setSingleUserResponse(data);console.log(singleUserResponse);goToEditUser()
                                });
                            }}
                        >
                            <TableCell className="tableCellInOrder pointer" component="th" scope="row">{row.name}</TableCell>
                            <TableCell className="tableCellInOrder pointer" align="left">{row.username}</TableCell>
                            <TableCell className="tableCellInOrder pointer" align="left">{row.email}</TableCell>
                            <TableCell className="tableCellInOrder pointer" align="left">{row.userRoleId}</TableCell>
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
