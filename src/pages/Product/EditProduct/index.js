import { useState, useContext } from "react"
import ListUneditableProduct from "./components/ListUneditableProduct"
import ListEditableProduct from "./components/ListEditableProduct"
// import AddProduct from "../../components/Add Product/index"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import Delete from "../../../components/Dialog/Delete"



const AddNewProduct = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false); 

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    const [ editable, setEditable ] = useState(false);

  return (
    <div className="pageAddNewOrder">
      <Header/>
      {editable?
        <div>
            <div className="threeButtonsInAddNewOrder">
                <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">SAVE</Button>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="warning">CANCEL</Button>
                {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
            </div>
            <ListEditableProduct setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder} />
            <div className="threeButtonsInAddNewOrder">
                <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">SAVE</Button>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="warning">CANCEL</Button>
                {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
            </div>
        </div>
       :<div>
            <div className="threeButtonsInAddNewOrder">
                <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="warning">DELETE</Button>
                {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
            </div>
            <ListUneditableProduct setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
            <div className="threeButtonsInAddNewOrder">
                <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="warning">DELETE</Button>
                {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
            </div>
       </div>
      }
      
      {/* <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/> */}
    </div>
  )
}

export default AddNewProduct