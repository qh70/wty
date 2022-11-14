import { useState  } from "react"
import ListAddNewUser from "./components/ListAddNewUser"
// import AddProduct from "../../components/Add Product/index"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

const AddNewUser = () => {

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
        {!reset?
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={disableAllInAddNewOrder}>Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={setDeletepopup}>Cancel</Button>
            <Button className="buttonRestInAddNewUser" variant="outlined" color="secondary" onClick={()=>setReset(true)}>RESET PASSWORD</Button>
          </div>
         :
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={()=>setReset(false)}>Save</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={disableAllInAddNewOrder}>Cancel</Button>
          </div>
        }
      </div>
      <ListAddNewUser setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder} reset={reset} setReset={setReset}/>
      <div className="threeButtonsInAddNewOrder">
        {!reset?
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={disableAllInAddNewOrder}>Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={setDeletepopup}>Cancel</Button>
          </div>
         :
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={()=>setReset(false)}>Save</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={disableAllInAddNewOrder}>Cancel</Button>
          </div>
        }
      </div>
    </div>
  )
}

export default AddNewUser