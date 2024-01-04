
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
import { useEffect,useContext } from 'react';
import { API_HOST } from '../../../global/constants';

import { GetContext } from "../../../GetContext";

const Product = () => {

  const { token, setProductResponse, setEditable } = useContext(GetContext); //props from Context

  useEffect(() => {
    setEditable(false);
  }, []);

  

  useEffect(()=>{
    fetch(`${API_HOST}/product/?currentPage=0&pageSize=10`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then((response) => response.json())
    .then((data) => {setProductResponse(data.items)});  
  }, [])

  return (
    <div className="product">
      <Header/>
      <FirstButton goto="PRODUCT"/>
      <ProductList/>
    </div>
  )
}

export default Product
