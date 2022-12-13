import { useState, useContext } from "react";
import LeftNew from "./components/LeftNew";
//Order
import Order from "../Order/Order/Index";
import AddNewOrder from "../../pages/Order/AddNewOrder";
import EditOrder from "../../pages/Order/EditOrder";

//Product
import Product from "../Product/Product/index";
import AddNewProduct from "../Product/AddNewProduct";
import EditProduct from "../Product/EditProduct";
//User
import User from "../User/User/index";
import AddNewUser from "../User/AddNewUser";
import EditUser from "../User/EditUser";
//Clients
import Client from "../Client/Client";
import AddNewClient from "../Client/AddNewClient";
import EditClient from "../Client/EditClient";

import "../../index.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserContext } from "../../UserContext";

import LoginPopup from "../../components/Dialog/LoginPopup";
import { LoginContext } from "../../LoginContext";

const Home = () => {
    
    // for page addnewproduct
    const [ wtcCode, setWtcCode ] = useState("");
    const [ luziCode, setLuziCode ] = useState("");
    const [ customerCode, setCustomerCode ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ name, setName ] = useState("");
    const [ nameCN, setNameCN ] = useState("");
    const [ inspiredByDesigner, setInspiredByDesigner ] = useState("");
    const [ inspiredByDesignerCN, setInspiredByDesignerCN ] = useState("");
    const [ inspiredByBrand, setInspiredByBrand ] = useState("");
    const [ inspiredByBrandCN, setInspiredByBrandCN ] = useState("");
    const [ remarks, setRemarks ] = useState("");
    

    const [ login, setLogin ] = useState(false);

    const [ logoutPopup, setLogoutPopup ] = useState(false)

  return (
    <Router>
        {!login?<LoginPopup setLogin={setLogin}/>
         :<div className="wholePicture">
            <LeftNew/>
            {/* <div className="right"> */}
                {/* <Header/> */}
                <Switch>
                    <LoginContext.Provider value={{ login, setLogin, logoutPopup, setLogoutPopup }}>

                        {/* order */}
                        <Route exact path="/order">
                            <Order/> 
                        </Route>
                        <Route exact path="/addneworder">
                            <AddNewOrder />
                        </Route>
                        <Route exact path="/editorder">
                            <EditOrder />
                        </Route>

                        {/* user */}
                        <Route exact path="/user">
                            <User/> 
                        </Route>
                        <Route exact path="/addnewuser">
                            <AddNewUser />
                        </Route>
                        <Route exact path="/edituser">
                            <EditUser />
                        </Route>

                        {/* clients */}
                        <Route exact path="/clients">
                            <Client/> 
                        </Route>
                        <Route exact path="/addnewclient">
                            <AddNewClient />
                        </Route>
                        <Route exact path="/editclient">
                            <EditClient />
                        </Route>

                        {/* product */}
                        <UserContext.Provider value={{ 
                            wtcCode, setWtcCode,
                            luziCode, setLuziCode,
                            customerCode, setCustomerCode,
                            gender, setGender,
                            name, setName,
                            nameCN, setNameCN,
                            inspiredByDesigner, setInspiredByDesigner,
                            inspiredByDesignerCN, setInspiredByDesignerCN,
                            inspiredByBrand, setInspiredByBrand,
                            inspiredByBrandCN, setInspiredByBrandCN,
                            remarks, setRemarks
                        }}>
                            <Route exact path="/product">
                                <Product/> 
                            </Route>
                            <Route exact path="/addnewproduct">
                                <AddNewProduct/>
                            </Route>
                            <Route exact path="/editproduct">
                                <EditProduct/>
                            </Route>
                        </UserContext.Provider>
                    </LoginContext.Provider>
                    {/* <Route path="/try" exact component={Client} /> */}
                </Switch>
            </div>
        //   </div>
        }
    </Router>
    
  )
}

export default Home
