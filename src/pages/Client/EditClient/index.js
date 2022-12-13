import { useState  } from "react"
import ListAddNewClient from "./components/ListEditClient"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

const EditClient = () => {

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
      <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="client"/>
      <Header title={!reset?"Add New User":"Edit User Info"}/>
      <div className="threeButtonsInAddNewOrder">
        <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">EDIT</Button>
        <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
      </div>
      <ListAddNewClient setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder} reset={reset} setReset={setReset}/>
      <div className="threeButtonsInAddNewOrder">
        <Button className="buttonsInAddNewOrder" variant="outlined" color="primary">EDIT</Button>
        <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
      </div>
    </div>
  )
}

export default EditClient