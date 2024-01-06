import { useState, useContext } from "react"
import ListAddNewOrder from "./components/ListAddNewOrder"
import Header from "../../../components/Header/Header"
import MaxWidthDialog from "../../../components/Dialog"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

import { GetContext } from "../../../GetContext"
import { OrderContext } from "../../../OrderContext"

const AddNewOrder = () => {

  
    const {  token, editable, setEditable } = useContext(GetContext);

    const { 
      filepoEditOrder,
      customerCodeAddNewOrder,
      poNoAddNewOrder,
      attnAddNewOrder,
      titleAddNewOrder,
      telAddNewOrder,
      emailAddNewOrder,
      ordernumberAddNewOrder,
      faxAddNewOrder,
      //6 Files
      // filepoAddNewOrder,
      // fileRefAddNewOrder,
      // fileInvoiceAddNewOrder,
      // filePackingListAddNewOrder,
      // fileWaybillAddNewOrder,
      // fileUploadothersAddNewOrder

    } = useContext(OrderContext);

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false);  

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    

    const clickSaveInEditOrder = () => {
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

      form.append("po", filepoEditOrder)
      form.append("salesOrder", blob)

      fetch("http://192.168.0.8:8089/rest/admin/salesOrder/full/13?", {
        method : "PUT",
        headers : {
          "Authorization": `Bearer ${token}`,
        },
        body : form
      })
      .then((response) => response.json())
      .then((data) => console.log(data,"save6"))
      .catch((error)=>{console.log(error);});

    }

  return (
    <div className="pageAddNewOrder">
        <MaxWidthDialog open={open} setOpen={setOpen} />
        <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="order"/>
        <Header/>
        <div className="threeButtonsInAddNewOrder">
          {!editable?
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
            </div>
            :
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={clickSaveInEditOrder}>SAVE</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={()=>{setEditable(false)}}>CANCEL</Button>
            </div>
          }
        </div>
        <ListAddNewOrder setShowAddProduct={setShowAddProduct} setOpen={setOpen} setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
        <div className="threeButtonsInAddNewOrder">
          {!editable?
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
            </div>
            :
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={clickSaveInEditOrder}>SAVE</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={()=>{setEditable(false)}}>CANCEL</Button>
            </div>
          }
        </div>
    </div>
  )
}

export default AddNewOrder