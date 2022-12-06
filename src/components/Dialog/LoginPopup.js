import * as React from 'react';
import { useState } from "react";
import { Box, TextField, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { height } from '@mui/system';

// for password input
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function LoginPopup({ proceedWithoutSaving, setProceedWithoutSaving, login, setLogin }) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClose = () => {
    
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  function valuetext(value) {
    return `${value}`;
  }
  // for password input
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // set userName & password
  const [ userName, setUserName ] = useState("charles");
  const [ password, setPassword ] = useState("abcd1234");

  function userNameChange(e) {
    setUserName(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  const clickingSignIn = () => {
    fetch("http://ec2-13-212-207-229.ap-southeast-1.compute.amazonaws.com:8088/rest/authenticate/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": userName,
        "password": password
      })
    })
    .then((response) => response.json())
    .then((data) => {if (data.role === "SUPER_ADMIN"){setLogin(true);}});
  }
  
  return (
    <React.Fragment>
      <Dialog
        className="DialogInLoginPopup"
        fullWidth
        open={!login}
        onClose={handleClose}
        maxWidth="sm"
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <FormControl fullWidth variant="standard">
          <TextField 
            label="User Name" variant="standard" fullWidth
            value={userName}
            onChange={userNameChange}
          />
          </FormControl>
          {/* <TextField className="passwordTextFieldInLoginPopup" label="Password" variant="standard" type="password" fullWidth></TextField> */}
          <FormControl fullWidth variant="standard" sx={{marginTop: 3}}>
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={password}
              onChange={passwordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </DialogContent>
        
        <DialogActions>
          <Button color="primary" onClick={()=>{clickingSignIn()}}>SIGN IN</Button>
          <Button color="warning">CANCEL</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
