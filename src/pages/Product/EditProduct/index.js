import { useState } from "react"
import ListUneditableProduct from "./components/ListUneditableProduct"
import Header from "../../../components/Header/Header"
import { Button } from "@mui/material"
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
      <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="product"/>
      <Header/>
      <div>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
        </div>
        <ListUneditableProduct setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
        </div>
      </div>
    </div>
  )
}

export default AddNewProduct