import { useState  } from "react"
import { useHistory } from "react-router-dom";
import ListAddNewProduct from "./components/ListAddNewProduct"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"


const AddNewProduct = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false);

    // 把disable的功能註解掉
    // const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    // const disableAllInAddNewOrder = function () {
    //   setStateAllInAddNewOrder(true);
    // }

    // goToEditProduct
    let history = useHistory();

    const goToEditProduct = () => {
        history.push("/editproduct");
    }

  return (
    <div className="pageAddNewOrder">
      <ProceedWithoutSaving proceedWithoutSaving={proceedWithoutSaving} setProceedWithoutSaving={setProceedWithoutSaving}/>
      <Header/>
      <div className="threeButtonsInAddNewOrder">
          <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={setProceedWithoutSaving}>Save Draft</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditProduct}>Confirm</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
          {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
      </div>
      <ListAddNewProduct setShowAddProduct={setShowAddProduct} setOpen={setOpen} />
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