import { useState } from "react";

import Left from "./components/Left"
import LeftNew from "./components/LeftNew"
import Right from "./components/Right"
import Order from "../Order/Index"
import "../../index.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddNewOrderBefore from "../Add New Order Before/index"
import AddNewOrder from "../Add New Order/index"
import AddNewProduct from "../Add New Product/index"

const Home = () => {

  return (
    <Router>
        <div className="wholePicture">
            <LeftNew/>
            <Switch>
                {/* 實作 */}
                <Route exact path="/order">
                    <Order/> 
                </Route>
                <Route exact path="/addneworder">
                    <AddNewOrder />
                </Route>
                <Route path="/addnewproduct">
                    <AddNewProduct />
                </Route>
                {/* 範例 */}
                <Route exact path="/">
                    <Right /> 
                </Route>
                <Route path="/addneworderbefore">
                    <AddNewOrderBefore />
                </Route>
            </Switch>
        </div>
    </Router>
    
  )
}

export default Home
