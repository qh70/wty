import { useState  } from "react"
import ListEditUser from "./components/ListEditUser"
// import AddProduct from "../../components/Add Product/index"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

const EditUser = () => {

    const [ showAddProduct, setShowAddProduct] = useState(false);

    const [ open, setOpen] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false);

    const [ deletepopup, setDeletepopup] = useState(false); 

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    const [ reset, setReset ] = useState(false);

  return (
    <div className="pageAddNewOrder">
      <ProceedWithoutSaving proceedWithoutSaving={proceedWithoutSaving} setProceedWithoutSaving={setProceedWithoutSaving}/>
      <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="user"/>
      <Header/>
      <div className="threeButtonsInAddNewOrder">
        <div>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">EDIT</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
          <Button className="buttonRestInAddNewUser" variant="outlined" color="secondary" onClick={()=>setReset(true)}>RESET PASSWORD</Button>
        </div>
      </div>
      <ListEditUser setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder} reset={reset} setReset={setReset}/>
      <div className="threeButtonsInAddNewOrder">
        <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">EDIT</Button>
        <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
      </div>
    </div>
  )
}

export default EditUser