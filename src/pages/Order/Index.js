
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Header from "./components/Header"
import BtnNPurchaseOrderList from "./components/BtnNPurchaseOrderList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Order = () => {

  return (
    <div className="order">
      <Header title="Order"/>
      <BtnNPurchaseOrderList/>
    </div>
  )
}

export default Order
