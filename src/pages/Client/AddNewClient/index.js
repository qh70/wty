import { useState  } from "react"
import ListAddNewClient from "./components/ListAddNewClient"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"

const AddNewClient = () => {

    const [ showAddProduct, setShowAddProduct] = useState(false);

    const [ open, setOpen] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false);

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    const [ reset, setReset ] = useState(false);

  return (
    <div className="pageAddNewOrder">
      <ProceedWithoutSaving proceedWithoutSaving={proceedWithoutSaving} setProceedWithoutSaving={setProceedWithoutSaving}/>
      <Header title={!reset?"Add New User":"Edit User Info"}/>
      <div className="threeButtonsInAddNewOrder">
        {!reset?
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={disableAllInAddNewOrder}>Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            <Button className="buttonRestInAddNewUser" variant="outlined" color="secondary" onClick={()=>setReset(true)}>RESET PASSWORD</Button>
          </div>
         :
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={()=>setReset(false)}>Save</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={disableAllInAddNewOrder}>Cancel</Button>
          </div>
        }
      </div>
      <ListAddNewClient setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder} reset={reset} setReset={setReset}/>
      <div className="threeButtonsInAddNewOrder">
        {!reset?
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={disableAllInAddNewOrder}>Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
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

export default AddNewClient