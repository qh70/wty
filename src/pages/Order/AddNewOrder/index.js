import { useState ,useContext } from "react";
import { useHistory } from "react-router-dom";
import ListAddNewOrder from "./components/ListAddNewOrder"
import Header from "../../../components/Header/Header"
import MaxWidthDialog from "../../../components/Dialog"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

import { GetContext } from "../../../GetContext";
import { OrderContext } from "../../../OrderContext";

const AddNewOrder = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false);  

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);

    // goToEditOrder
    let history = useHistory();

    const goToEditOrder = () => {
        history.push("/editorder");
    }

    const { token } = useContext(GetContext)

    const { 
        customerCodeAddNewOrder,
        poNoAddNewOrder,
        attnAddNewOrder,
        titleAddNewOrder,
        telAddNewOrder,
        emailAddNewOrder,
        ordernumberAddNewOrder,
        faxAddNewOrder,
        //6 Files
        filepoAddNewOrder,
        fileRefAddNewOrder,
        fileInvoiceAddNewOrder,
        filePackingListAddNewOrder,
        fileWaybillAddNewOrder,
        fileUploadothersAddNewOrder
    } = useContext(OrderContext);

    const saveDraftInAddNewOrder = () => {
        const form = new FormData()

        const json = JSON.stringify({
            "customRefId": "customRefId2",
            "poNo": poNoAddNewOrder?poNoAddNewOrder:"null",
            "customerId": 1,
            "issueDate": "2023-06-05",
            "revisionCount": 1,
            "userId": 1,
            "locationId": 1,
            "localeId": "tc",
            "attn": attnAddNewOrder?attnAddNewOrder:"null",
            "remark": "remark",
            "currency": "hkd",
            "totalAmount": 111.22,
            "status": "A",
            "createBy": "U:1",
            "createTime": "2023-10-19 05:56:07",
            "updateBy": "U:1",
            "updateTime": "2023-10-19 05:56:07",
            "customerCode" : customerCodeAddNewOrder?customerCodeAddNewOrder:"null",
            "title": titleAddNewOrder?titleAddNewOrder:"null",
            "tel": telAddNewOrder?telAddNewOrder:"null",
            "email": emailAddNewOrder?emailAddNewOrder:"null",
            "fax": faxAddNewOrder?faxAddNewOrder:"null"
        })

        const blob = new Blob([json], {
            type : "application/json",
        });
        form.append("po", filepoAddNewOrder)
        form.append("customerRef", fileRefAddNewOrder)
        form.append("invoice", fileInvoiceAddNewOrder)
        form.append("packingList", filePackingListAddNewOrder)
        form.append("waybill", fileWaybillAddNewOrder)
        form.append("others", fileUploadothersAddNewOrder)
        form.append("salesOrder", blob)
        fetch("http://192.168.0.8:8089/rest/admin/salesOrder/full/", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },            
            body : form
        })
        .then((response) => response.json())
        .then((data) => {console.log(data)});
    }

  return (
    <div className="pageAddNewOrder">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="order"/>
        <Header/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={saveDraftInAddNewOrder}>Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditOrder} >Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen} setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
        <div className="threeButtonsInAddNewOrder">
            <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" >Save Draft</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditOrder} >Confirm</Button>
            <Button className="buttonsInAddNewOrder" variant="outlined" color="error">Cancel</Button>
            {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
        </div>
        {/* <AddProduct showAddProduct={showAddProduct} setShowAddProduct={setShowAddProduct}/> */}
    </div>
  )
}

export default AddNewOrder