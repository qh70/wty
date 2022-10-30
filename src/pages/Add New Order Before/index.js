import { useState  } from "react"
import ListAddNewOrder from "./ListAddNewOrder"
import "../../index.css"
// import { Button } from 'antd';
import Button from "@mui/material/Button"
import AddProduct from "../../components/Add Product/index"
import { Box, AppBar, Toolbar } from "@mui/material"

const AddNewOrder = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

  return (
    <div className="pageAddNewOrder">
        <AppBar position="sticky">
            <Toolbar>Navbar</Toolbar>
        </AppBar>
        <div>Add New Order</div>
        <div>
            <button className="buttons">Save Draft</button>
            <button className="buttons">Confirm</button>
            <button className="buttons">Cancel</button>
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct}/>
        <div>
            <button className="buttons">Save Draft</button>
            <button className="buttons">Confirm</button>
            <button className="buttons">Cancel</button>
        </div>
        <Button size="small" onClick={()=>alert("hello")} href="#" variant="contained" color="success">Hello World</Button>
        <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/>
        <Box 
            bgcolor="skyblue" 
            flex={1} 
            p={2} 
            sx={{display: { xs: "none", sm: "block"}}}>
                test
        </Box>
    </div>
  )
}

export default AddNewOrder