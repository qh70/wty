import { useState  } from "react"
import ListAddNewOrder from "./ListAddNewOrder"
import AddProduct from "../../components/Add Product/index"
import Header from "../Product/components/Header"
import MaxWidthDialog from "../../components/Dialog"
import { Button } from "@mui/material"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

const AddNewOrder = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    

  return (
    <div className="pageAddNewOrder">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Header title="Add New Order"/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" disabled>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" disabled>Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen}/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" disabled>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" disabled>Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        {/* <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/> */}
    </div>
  )
}

export default AddNewOrder