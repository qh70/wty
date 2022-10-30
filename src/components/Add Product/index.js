import { useState } from 'react';
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

// Currency
const currencies = [

    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
];

const AddProduct = ({ showAddProduct, setShowAddProduct }) =>{

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      // Quantity
      const [ counter, setCounter ] = useState(0);

      const inc = () => { setCounter(counter + 1); };
      const dec = () => { setCounter(counter - 1); };

      const [currency, setCurrency] = useState('EUR');

      const handleChangeCurrency = (event) => {

        setCurrency(event.target.value);
      };

      const options = [
        {
          label: "Apple",
          value: "apple",
        },
        {
          label: "Mango",
          value: "mango",
        },
      ]

    

    return (
        showAddProduct?
        <div className="overlayAddProduct">
            <div className="addProductblock">
                <h2 className="addProduct">Add Product</h2>
                <div className="textField">
                <TextField  id="outlined-basic" placeholder="Search for Products" variant="outlined" options={options}/> 
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={options}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Movie" />}
                />               
                </div>
                <div>
                  <input list="data"/>
                  <datalist id="data">
                    <option>one</option>
                    <option>two</option>
                    <option>three</option>
                  </datalist>
                  
                    
                </div>
                {/* <div className="firstRow"> */}
                    <Stack direction="row" spacing={2} justifyContent="space-evenly">
                        <div className="unitPrice">Unit Price</div>
                        <FormControl className="formControl" 
                            fullWidth sx={{ width: "30%", height: "5%", marginTop: "50px", paddingBottom: "10px"}} variant="filled">
                            <FilledInput
                                sx={{ height: "30px",margin: "0px", marginTop: "10px", paddingBottom: "16px", paddingLeft: "15px"}}
                                id="filled-adornment-amount"
                                value={values.amount}
                                onChange={handleChange('amount')}
                                startAdornment={<InputAdornment position="end" sx={{ marginLeft: "10px", paddingTop: "16px", paddingLeft: "5px"}}>$</InputAdornment>}
                            />
                        </FormControl>
                        <div className="unitPrice">Quantity</div>
                        <div className="incDec" style={{alignItems: "center",}}>
                            <div onClick={dec}>-</div>
                            <div>|</div>
                            <div>{counter}</div>
                            <div>|</div>
                            <div onClick={inc}>+</div>
                        </div>
                    </Stack>
                    
                {/* </div> */}
                <div className="secondRow">
                    <div className="currency">Currency</div>
                    {/* <Box
                        className="box"
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: "30%" }
                        }}
                        noValidate
                        autoComplete="off"
                    /> */}
                        <div className="textField1on">
                            <TextField 
                            className="textField1"
                            id="outlined-select-currency"
                            select
                            label="Select"
                            value={currency}
                            onChange={handleChangeCurrency}
                            >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </div>
                </div>
                    <button className="buttons">Confirm</button>
                    <button className="buttons" onClick={()=>{setShowAddProduct(false)}}>Cancel</button>
            </div>
        </div>
        :null
    )
}

export default AddProduct