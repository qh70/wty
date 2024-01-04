import { useState } from "react";
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
//Context
import { UserContext } from "../../UserContext";
import { LoginContext } from "../../LoginContext";
import { GetContext } from "../../GetContext";
import { OrderContext } from "../../OrderContext";

import LoginPopup from "../../components/Dialog/LoginPopup";


const Home = () => {

    // for page order
    const [ tryup, setTryup ] = useState();
    const [ customerCodeAddNewOrder, setCustomerCodeAddNewOrder ] = useState("")
    const [ poNoAddNewOrder, setPoNoAddNewOrder ] = useState()
    const [ attnAddNewOrder, setAttnAddNewOrder ] = useState()
    const [ titleAddNewOrder, setTitleAddNewOrder ] = useState()
    const [ telAddNewOrder, setTelAddNewOrder ] = useState()
    const [ emailAddNewOrder, setEmailAddNewOrder ] = useState()
    const [ ordernumberAddNewOrder, setOrdernumberAddNewOrder ] = useState()
    const [ faxAddNewOrder, setFaxAddNewOrder ] = useState()
    const [ filepoAddNewOrder, setFilepoAddNewOrder ] = useState()
    const [ fileRefAddNewOrder, setFileRefAddNewOrder ] = useState()
    const [ fileInvoiceAddNewOrder, setFileInvoiceAddNewOrder ] = useState()
    const [ filePackingListAddNewOrder, setFilePackingListAddNewOrder ] = useState()
    const [ fileWaybillAddNewOrder, setFileWaybillAddNewOrder ] = useState()
    const [ fileUploadothersAddNewOrder, setFileUploadothersAddNewOrder ] = useState()
    // for Edit Order
    const [ filepoEditOrder, setFilepoEditOrder ] = useState(null)
    
    // for page addnewproduct
    const [ wtcCode, setWtcCode ] = useState();
    const [ luziCode, setLuziCode ] = useState("");
    const [ customerCode, setCustomerCode ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ name, setName ] = useState("");
    const [ nameCN, setNameCN ] = useState("");
    const [ inspiredByDesigner, setInspiredByDesigner ] = useState("");
    const [ inspiredByDesignerCN, setInspiredByDesignerCN ] = useState("");
    const [ inspiredByBrand, setInspiredByBrand ] = useState("");
    const [ inspiredByBrandCN, setInspiredByBrandCN ] = useState("");
    const [ discriptionOfGoods, setDiscriptionOfGoods ] = useState("");
    const [ remarks, setRemarks ] = useState("");
    

    const [ login, setLogin ] = useState(false);

    const [token, setToken ]= useState(null);

    const [ logoutPopup, setLogoutPopup ] = useState(false)

    // 4 modules API
    const [ orderResponse, setOrderResponse ] = useState(null) 
    const [ productResponse, setProductResponse ] = useState(null) 
    const [ userResponse, setUserResponse ] = useState(null) 
    const [ clientsResponse, setClientsResponse ] = useState(null) 

    // index of data
    const [ indexOfData, setIndexOfData ] = useState(null)

    // 按下EDIT鍵後可編輯
    const [ editable, setEditable ] = useState(false);

  return (
    <Router>
        <GetContext.Provider value={{ 
            setLogin, token, setToken, 
            orderResponse, setOrderResponse, productResponse, setProductResponse, userResponse,setUserResponse, clientsResponse, setClientsResponse, 
            indexOfData, setIndexOfData,
            editable, setEditable
        }}>
        {!login?<LoginPopup/>
         :<div className="wholePicture">
            <LeftNew/>
            {/* <div className="right"> */}
                {/* <Header/> */}
                <Switch>
                    <LoginContext.Provider value={{ login, setLogin, logoutPopup, setLogoutPopup }}>

                        {/* order */}
                        <OrderContext.Provider value={{ 
                            customerCodeAddNewOrder, setCustomerCodeAddNewOrder,
                            poNoAddNewOrder, setPoNoAddNewOrder,
                            attnAddNewOrder, setAttnAddNewOrder,
                            titleAddNewOrder, setTitleAddNewOrder,
                            telAddNewOrder, setTelAddNewOrder,
                            emailAddNewOrder, setEmailAddNewOrder,
                            ordernumberAddNewOrder, setOrdernumberAddNewOrder,
                            faxAddNewOrder, setFaxAddNewOrder,
                            //6 Files
                            filepoAddNewOrder, setFilepoAddNewOrder,
                            fileRefAddNewOrder, setFileRefAddNewOrder,
                            fileInvoiceAddNewOrder, setFileInvoiceAddNewOrder,
                            filePackingListAddNewOrder, setFilePackingListAddNewOrder,
                            fileWaybillAddNewOrder, setFileWaybillAddNewOrder,
                            fileUploadothersAddNewOrder, setFileUploadothersAddNewOrder,
                            // for Edit Order
                            filepoEditOrder, setFilepoEditOrder
                        }}>
                            <Route exact path="/order">
                                <Order token={token}/> 
                            </Route>
                            <Route exact path="/addneworder">
                                <AddNewOrder />
                            </Route>
                            <Route exact path="/editorder">
                                <EditOrder />
                            </Route>
                        </OrderContext.Provider>

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
                            discriptionOfGoods, setDiscriptionOfGoods,
                            remarks, setRemarks,

                            tryup, setTryup
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
        </GetContext.Provider>
    </Router>
    
  )
}

export default Home
