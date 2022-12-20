import { useState  } from "react";
import { useHistory } from "react-router-dom";
import ListAddNewOrder from "./components/ListAddNewOrder"
import Header from "../../../components/Header/Header"
import MaxWidthDialog from "../../../components/Dialog"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

const AddNewOrder = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false);  

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);

    // goToEditOrder
    let history = useHistory();

    const goToEditOrder = () => {
        history.push("/editorder");
    }

  return (
    <div className="pageAddNewOrder">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="order"/>
        <Header/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary">Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditOrder} >Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen} setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" >Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditOrder} >Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        {/* <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/> */}
    </div>
  )
}

export default AddNewOrder