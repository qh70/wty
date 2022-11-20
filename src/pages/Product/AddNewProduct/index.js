import { useState  } from "react"
import ListAddNewProduct from "./components/ListAddNewProduct"
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

    const goToEditProduct = () => {
        document.location = "editproduct"
    }

  return (
    <div className="pageAddNewOrder">
      <ProceedWithoutSaving proceedWithoutSaving={proceedWithoutSaving} setProceedWithoutSaving={setProceedWithoutSaving}/>
      <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="product"/>
      <Header/>
      <div className="threeButtonsInAddNewOrder">
          <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditProduct}>Confirm</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={setDeletepopup}>Cancel</Button>
          {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
      </div>
      <ListAddNewProduct setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
      <div className="threeButtonsInAddNewOrder">
          <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" >Save Draft</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditProduct}>Confirm</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
          {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
      </div>
      {/* <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/> */}
    </div>
  )
}

export default AddNewProduct