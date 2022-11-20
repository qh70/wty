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

const Home = () => {
    
    const [ product11, setProduct11 ] = useState("")

  return (
    <Router>
        <div className="wholePicture">
            <LeftNew/>
            <Switch>
                <Route exact path="/order">
                    <Order/> 
                </Route>
                <Route exact path="/addneworder">
                    <AddNewOrder />
                </Route>

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
                
                <Route exact path="/user">
                    <User/> 
                </Route>
                <Route exact path="/addnewuser">
                    <AddNewUser />
                </Route>

                <Route exact path="/clients">
                    <Client/> 
                </Route>
                <Route exact path="/addnewclient">
                    <AddNewClient />
                </Route>
                <Route path="/try" exact component={Client} />
            </Switch>
        </div>
    </Router>
    
  )
}

export default Home
