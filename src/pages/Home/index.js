import { useState, useContext } from "react";

import Left from "./components/Left"
import LeftNew from "./components/LeftNew"
import Order from "../Order/Index"
import Product from "../Product/Product/index"
import User from "../User/User/index"
import Client from "../Client/Client/index"
import "../../index.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNewOrder from "../Add New Order/index"
import AddNewProduct from "../Product/AddNewProduct"
import EditProduct from "../Product/EditProduct"
import AddNewUser from "../User/AddNewUser"
import AddNewClient from "../Client/AddNewClient"

import { UserContext } from "../../UserContext"

import LoginPopup from "../../components/Dialog/LoginPopup"
import Header from "../../components/Header/Header"

import { useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { LoginContext } from "../../LoginContext";

import LogoutPopup from "../../components/Dialog/LogoutPopup";

const Home = () => {
    
    const [ product11, setProduct11 ] = useState("");

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
                    {/* user */}
                    <Route exact path="/user">
                        <User/> 
                    </Route>
                    <Route exact path="/addnewuser">
                        <AddNewUser />
                    </Route>
                    {/* clients */}
                    <Route exact path="/clients">
                        <Client/> 
                    </Route>
                    <Route exact path="/addnewclient">
                        <AddNewClient />
                    </Route>
                    {/* product */}
                    <UserContext.Provider value={{ product11, setProduct11 }}>
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
