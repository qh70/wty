import { useState  } from "react"
import ListAddNewProduct from "./ListAddNewProduct"
import AddProduct from "../../components/Add Product/index"
import Header from "../Product/components/Header"
import MaxWidthDialog from "../../components/Dialog"

const AddNewProduct = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

  return (
    <div className="pageAddNewProduct">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Header title="Add New Product"/>
        <div>
            <button className="buttons">Save Draft</button>
            <button className="buttons">Confirm</button>
            <button className="buttons">Cancel</button>
            <button className="buttons" onClick={handleClickOpen}>Dialog</button>
        </div>
        <ListAddNewProduct setShowAddProduct={setShowAddProduct}/>
        <div>
            <button className="buttons">Save Draft</button>
            <button className="buttons">Confirm</button>
            <button className="buttons">Cancel</button>
        </div>
        <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/>
    </div>
  )
}

export default AddNewProduct