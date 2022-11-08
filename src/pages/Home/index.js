import { useState } from "react";

import Left from "./components/Left"
import LeftNew from "./components/LeftNew"
import Order from "../Order/Index"
import Product from "../Product/Product/index"
import "../../index.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNewOrder from "../Add New Order/index"

const Home = () => {

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
                <Route exact path="/product">
                    <Product/> 
                </Route>
            </Switch>
        </div>
    </Router>
    
  )
}

export default Home
