import { useState, useContext } from "react"
import ListAddNewOrder from "./components/ListAddNewOrder"
import Header from "../../../components/Header/Header"
import MaxWidthDialog from "../../../components/Dialog"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

import { GetContext } from "../../../GetContext"

const AddNewOrder = () => {

  
    const {  editable, setEditable } = useContext(GetContext);

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false);  

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    const clickSaveInEditOrder = () => {

    }

  return (
    <div className="pageAddNewOrder">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="order"/>
        <Header/>
        <div className="threeButtonsInAddNewOrder">
          {!editable?
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
            </div>
            :
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={clickSaveInEditOrder}>SAVE</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={()=>{setEditable(false)}}>CANCEL</Button>
            </div>
          }
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen} setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
        <div className="threeButtonsInAddNewOrder">
          {!editable?
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
            </div>
            :
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={clickSaveInEditOrder}>SAVE</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={()=>{setEditable(false)}}>CANCEL</Button>
            </div>
          }
        </div>
    </div>
  )
}

export default AddNewOrder