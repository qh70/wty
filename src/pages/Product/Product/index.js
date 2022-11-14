
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Header from "../../../components/Header/Header"
import ProductList from "./components/ProductList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstButton from '../../../components/Button/FirstButton';


const Product = () => {

  return (
    <div className="product">
      <Header/>
      <FirstButton goto="PRODUCT"/>
      <ProductList/>
    </div>
  )
}

export default Product
