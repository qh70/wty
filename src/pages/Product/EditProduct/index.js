import { useContext, useState } from "react"
import ListUneditableProduct from "./components/ListUneditableProduct"
import Header from "../../../components/Header/Header"
import { Button } from "@mui/material"
import Delete from "../../../components/Dialog/Delete"

import { GetContext } from "../../../GetContext";
import { UserContext } from "../../../UserContext";



const AddNewProduct = () => {

  const {
    token,
    editable, setEditable
  } = useContext(GetContext);

  const {
    wtcCode, setWtcCode,
    luziCode, setLuziCode,
    customerCode, setCustomerCode,
    gender, setGenger,
    name, setName,
    nameCN, setNameCN,
    inspiredByDesigner, setInspiredByDesigner,
    inspiredByDesignerCN, setInspiredByDesignerCN,
    inspiredByBrand, setInspiredByBrand,
    inspiredByBrandCN, setInspiredByBrandCN,
    discriptionOfGoods, setDiscriptionOfGoods,
    remarks, setRemarks
  } = useContext(UserContext);

    const [showAddProduct, setShowAddProduct] = useState(false);

    const [open, setOpen] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false);

    const [deletepopup, setDeletepopup] = useState(false); 

    const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    const disableAllInAddNewOrder = function () {
      setStateAllInAddNewOrder(true);
    }

    const clickSaveInEditProduct = ()=>{
      fetch("http://192.168.0.8:8089/rest/admin/product/1", {
        method : "PUT",
        headers : {
          "Authorization": `Bearer ${token}`,
          "Content-type" : "application/json"
        },
        body : JSON.stringify({
          "productId": 1,
          "productCode": customerCode?customerCode:"string",
          "productNameEn": name?name:"string",
          "productNameTc": "string",
          "productNameSc": nameCN?nameCN:"string",
          "longDescEn": discriptionOfGoods?discriptionOfGoods:"string",
          "longDescTc": "string",
          "longDescSc": "string",
          "price": 0,
          "status": "A",
          "createBy": "U:1",
          "createTime": "2023-11-06 16:41:02",
          "updateBy": "U:1",
          "updateTime": "2023-11-06 16:41:02",
          "color": "string",
          "size": "string",
          "weight": "string",
          "wyt": "string",
          "luzi": luziCode?luziCode:"string",
          "sex": gender?gender:"string",
          "remark": remarks?remarks:"string",
          "brandEN": inspiredByBrand?inspiredByBrand:"string",
          "brandTC": "string",
          "brandSC": inspiredByBrandCN?inspiredByBrandCN:"string",
          "designerEN": inspiredByDesigner?inspiredByDesigner:"string",
          "designerTC": "string",
          "designerSC": inspiredByDesignerCN?inspiredByDesignerCN:"string"
        })
      })
      .then((response) => response.json())
      .then((data) => console.log(data,"save6"))
      .catch((error)=>{console.log(error);});
    }

  return (
    <div className="pageAddNewOrder">
      <Delete deletepopup={deletepopup} setDeletepopup={setDeletepopup} modules="product"/>
      <Header/>
      <div>
        <div className="threeButtonsInAddNewOrder">
            {!editable ? 
              <div>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
              </div>
              :
              <div>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={clickSaveInEditProduct}>SAVE</Button>
                <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={()=>{setEditable(false)}}>CANCEL</Button>
              </div>
            }
        </div>
        <ListUneditableProduct setShowAddProduct={setShowAddProduct} setOpen={setOpen} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
        <div className="threeButtonsInAddNewOrder">
          {!editable ? 
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={()=>{setEditable(true)}}>EDIT</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={setDeletepopup}>DELETE</Button>
            </div>
            :
            <div>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="primary" onClick={clickSaveInEditProduct}>SAVE</Button>
              <Button className="buttonsInAddNewOrder" variant="outlined" color="warning" onClick={()=>{setEditable(false)}}>CANCEL</Button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default AddNewProduct