import { useState  } from "react"
import { useHistory } from "react-router-dom";
import ListAddNewUser from "./components/ListAddNewUser"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"

const AddNewUser = () => {

    const [ showAddProduct, setShowAddProduct] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false); 

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    const [ reset, setReset ] = useState(false);

    // goToEditUser
    let history = useHistory();

    const goToEditUser = () => {
        history.push("/edituser");
    }

  return (
    <div className="pageAddNewOrder">
      <ProceedWithoutSaving proceedWithoutSaving={proceedWithoutSaving} setProceedWithoutSaving={setProceedWithoutSaving}/>
      <Header/>
      <div className="threeButtonsInAddNewOrder">
        {!reset?
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditUser}>Confirm</Button>
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
      <ListAddNewUser setShowAddProduct={setShowAddProduct} stateAllInAddNewOrder={stateAllInAddNewOrder} reset={reset} setReset={setReset}/>
      <div className="threeButtonsInAddNewOrder">
        {!reset?
          <div>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditUser}>Confirm</Button>
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

export default AddNewUser