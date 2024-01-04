import { useEffect, useContext } from 'react';

import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Header from "../../../components/Header/Header"
import BtnNPurchaseOrderList from "./components/BtnNPurchaseOrderList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstButton from '../../../components/Button/FirstButton';

import { GetContext } from '../../../GetContext';

const Order = ({token}) => {

  const { setEditable } = useContext(GetContext)

  useEffect(() => {
    setEditable(false);
  }, []);

  return (
    <div className="order">
      <Header/>
      <FirstButton goto="Order" token={token}/>
      <BtnNPurchaseOrderList/>
    </div>
  )
}

export default Order
