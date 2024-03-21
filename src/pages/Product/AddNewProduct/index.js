import { useState, useContext, useEffect  } from "react"
import { useHistory } from "react-router-dom";
import ListAddNewProduct from "./components/ListAddNewProduct"
import Header from "../../../components/Header/Header"
import ProceedWithoutSaving from "../../../components/Dialog/ProceedWithoutSaving"
import { Button } from "@mui/material"

import { API_HOST } from "../../../global/constants"

import { GetContext } from "../../../GetContext";
import { ProductContext } from "../../../ProductContext";


const AddNewProduct = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);
    
    const [ proceedWithoutSaving, setProceedWithoutSaving ] = useState(false);

    // 把disable的功能註解掉
    // const [ stateAllInAddNewOrder, setStateAllInAddNewOrder] = useState(false);
    
    // const disableAllInAddNewOrder = function () {
    //   setStateAllInAddNewOrder(true);
    // }

    // goToEditProduct
    const history = useHistory();

    const goToEditProduct = () => {
        history.push("/editproduct");
    }

    const { 
      token
     } = useContext(GetContext);

     const { 
      wtcCode, setWtcCode,
      luziCode, setLuziCode,
      customerCode, setCustomerCode,
      gender, setGender,
      name, setName,
      nameCN, setNameCN,
      inspiredByDesigner, setInspiredByDesigner,
      inspiredByDesignerCN, setInspiredByDesignerCN,
      inspiredByBrand, setInspiredByBrand,
      inspiredByBrandCN, setInspiredByBrandCN,
      discriptionOfGoods, setDiscriptionOfGoods,
      remarks, setRemarks,

      fileCoaAddNewProduct,
      fileCoaCnAddNewProduct,
      fileMsdsAddNewProduct,
      fileMsdsCnAddNewProduct,
      fileFragranceProfileAddNewProduct,
      fileIfraCertAddNewProduct,
      fileAllergyListAddNewProduct
     } = useContext(ProductContext);

    // async function saveNewProduct () {
    //   const res = await fetch(`${API_HOST}/product`, {
    //     method : "PUT",
    //     headers : {
    //       "Content-type" : "application/json"
    //     },
    //     body : JSON.stringify({
    //         "productId" : 101,
    //         "productNameEn" : "test"
    //     })
    //   })
    // }

    const saveNewProduct = () => {
      const json = JSON.stringify({
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
        "wyt": wtcCode?wtcCode:"string",
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
    
    const form = new FormData()
    const blob = new Blob([json], {
        type : "application/json",
    });

    form.append("coa", fileCoaAddNewProduct)
    form.append("coaCn", fileCoaCnAddNewProduct)
    form.append("msds", fileMsdsAddNewProduct)
    form.append("msdsCn", fileMsdsCnAddNewProduct)
    form.append("fragranceProfile", fileFragranceProfileAddNewProduct)
    form.append("ifraCert", fileIfraCertAddNewProduct)
    form.append("allergyList", fileAllergyListAddNewProduct)
    form.append("product", blob)
    fetch("http://192.168.0.8:8089/rest/admin/product/full/", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },            
        body : form
    })
    .then((response) => response.json())
    .then((data) => {console.log(data, 'save product')})
    .catch((error)=>{console.log(error);});
    alert("Draft Saved");

      // fetch("http://192.168.0.8:8089/rest/admin/product/", {
      //   method : "POST",
      //   headers : {
      //     "Authorization": `Bearer ${token}`,
      //     "Content-type" : "application/json"
      //   },
      //   body : JSON.stringify({
          
      //   })
      // })
      // .then((response) => response.json())
      // .then((data) => console.log(data,"save6"))
      
      
    }

  return (
    <div className="pageAddNewOrder">
      <ProceedWithoutSaving proceedWithoutSaving={proceedWithoutSaving} setProceedWithoutSaving={setProceedWithoutSaving}/>
      <Header/>
      <div className="threeButtonsInAddNewOrder">
          <Button className="buttonsInAddNewOrder" variant="outlined" color="secondary" onClick={saveNewProduct}>Save Draft</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="info" onClick={goToEditProduct}>Confirm</Button>
          <Button className="buttonsInAddNewOrder" variant="outlined" color="error" onClick={setProceedWithoutSaving}>Cancel</Button>
          {/* <button className="buttons" onClick={handleClickOpen}>Dialog</button> */}
      </div>
      <ListAddNewProduct setShowAddProduct={setShowAddProduct}/>
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