
import TextField from '@mui/material/TextField';
// import FormHelperText from '@mui/material/FormHelperText';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Header from "../../../components/Header/Header"
import ClientList from "./components/ClientList"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstButton from '../../../components/Button/FirstButton';


const Client = () => {

  return (
    <div className="order">
      <Header title="Clients"/>
      <FirstButton goto="CLIENT"/>
      <ClientList/>
    </div>
  )
}

export default Client
