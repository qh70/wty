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


const ListAddNewUser = ({ setShowAddProduct, stateAllInAddNewOrder, reset, setReset }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());

  return (
    <div className="listInAddNewOrder">
        {!reset?
            <div>
                <a className="wordProductNHashtags">User ######</a>
                <Box className="listForOrder" disabled>
                    <Grid container spacing={8}>
                        {/* <div className="rowInListForOrder"> */}
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Login Name" variant="standard" fullWidth="50%"
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Email" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Password" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Confirm Password" variant="standard" fullWidth="50%"
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="First Name" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Last Name" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Initial" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <FormControl className="textFieldInAddNewOrder" variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-standard-label">Title</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Age"
                                    disabled={stateAllInAddNewOrder}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <FormControl className="textFieldInAddNewOrder" variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-standard-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Age"
                                    disabled={stateAllInAddNewOrder}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField 
                                className="textFieldInAddNewOrder" 
                                id="standard-basic" label="Phone" variant="standard" 
                                disabled={stateAllInAddNewOrder}
                                fullWidth
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <FormControl className="textFieldInAddNewOrder" variant="standard" fullWidth>
                                <InputLabel id="demo-simple-select-standard-label">User Group</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    // value={age}
                                    // onChange={handleChange}
                                    label="Age"
                                    disabled={stateAllInAddNewOrder}
                                >
                                    <MenuItem value="Male">Male</MenuItem>
                                    <MenuItem value="Female">Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            :
            <div>
                <a className="wordProductNHashtags">Reset Password</a>
                <Box className="listForOrder" disabled>
                    <Grid container spacing={8}>
                        {/* <div className="rowInListForOrder"> */}
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Login Name" variant="standard" fullWidth="50%"
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Email" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Existing Password" variant="standard" fullWidth="50%"
                                disabled={stateAllInAddNewOrder}
                                type="password"
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="New Password" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                                type="password"
                            />
                        </Grid>
                        <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                            <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Confirm New Password" variant="standard" fullWidth
                                disabled={stateAllInAddNewOrder}
                                type="password"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        }
        
    </div>
  )
}

export default ListAddNewUser
