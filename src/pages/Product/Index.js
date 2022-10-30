
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Header from "./components/Header"
import ProductList from "./components/Product"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Product = () => {

  return (
    <div className="product">
      <Header title="Product" />
      <ProductList />
    </div>
  )
}

export default Product
