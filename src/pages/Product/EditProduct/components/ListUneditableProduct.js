import { useState, useEffect, useContext } from "react";
import { TextField } from "@mui/material"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
// import DatePicker from '@mui/lab/DatePicker';
import dayjs from 'dayjs';
import Button from "@mui/material/Button";
import Input from '@mui/material/Input';
import TableInAddNewOrder from "../../../../components/Table/TableInAddNewOrder";
import TableInAddNewOrder2 from "../../../../components/Table/TableInAddNewOrder2";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DateRangeIcon from '@mui/icons-material/DateRange';

// useContext
import { GetContext } from "../../../../GetContext"
import { ProductContext } from "../../../../ProductContext"


const ListUneditableProduct = ({ setOpen, setShowAddProduct, stateAllInAddNewOrder }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};
    
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
        // Files
        fileCoaEditProduct, setFileCoaEditProduct,
        fileCoaCnEditProduct, setFileCoaCnEditProduct,
        fileMsdsEditProduct, setFileMsdsEditProduct,
        fileMsdsCnEditProduct, setFileMsdsCnEditProduct,
        fileFragranceProfileEditProduct, setFileFragranceProfileEditProduct,
        fileIfraCertEditProduct, setFileIfraCertEditProduct,
        fileAllergyListEditProduct, setFileAllergyListEditProduct
    } = useContext(ProductContext);

    const { productResponse, singleProductResponse, indexOfData, editable } = useContext(GetContext); 
    // const thisProduct = productResponse[indexOfData];
    useEffect(()=>{
        setWtcCode(singleProductResponse.wyt)
        setLuziCode(singleProductResponse.luzi)
        setCustomerCode(singleProductResponse.productCode)
        setGender(singleProductResponse.sex)
        setName(singleProductResponse.productNameEn)
        setNameCN(singleProductResponse.productNameEnSC)
        setInspiredByDesigner(singleProductResponse.designerEN)
        setInspiredByDesignerCN(singleProductResponse.designerSC)
        setInspiredByBrand(singleProductResponse.brandEN)
        setInspiredByBrandCN(singleProductResponse.brandSC)
        setDiscriptionOfGoods(singleProductResponse.longDescEn)
        setRemarks(singleProductResponse.remark)
    },[])
    
    function wtcCodeChange(e) {
        setWtcCode(e.target.value)
    }

    function luziCodeChange(e) {
        setLuziCode(e.target.value)
    }

    function customerCodeChange(e) {
        setCustomerCode(e.target.value)
    }

    function genderChange(e) {
        setGender(e.target.value)
    }

    function nameChange(e) {
        setName(e.target.value)
    }

    function nameCNChange(e) {
        setNameCN(e.target.value)
    }

    function inspiredByDesignerChange(e) {
        setInspiredByDesigner(e.target.value)
    }

    function inspiredByDesignerCNChange(e) {
        setInspiredByDesignerCN(e.target.value)
    }

    function inspiredByBrandChange(e) {
        setInspiredByBrand(e.target.value)
    }

    function inspiredByBrandCNChange(e) {
        setInspiredByBrandCN(e.target.value)
    }

    function discriptionOfGoodsChange(e) {
        setDiscriptionOfGoods(e.target.value)
    }

    function remarksChange(e) {
        setRemarks(e.target.value)
    }
    // Files
    const fileCoaEditProductOnChange = (e) => {
        setFileCoaEditProduct(e.target.files[0])
    }

    const fileCoaCnEditProductOnChange = (e) => {
        setFileCoaCnEditProduct(e.target.files[0])
    }

    const fileMsdsEditProductOnChange = (e) => {
        setFileMsdsEditProduct(e.target.files[0])
    }

    const fileMsdsCnEditProductOnChange = (e) => {
        setFileMsdsCnEditProduct(e.target.files[0])
    }

    const fileFragranceProfileEditProductOnChange = (e) => {
        setFileFragranceProfileEditProduct(e.target.files[0])
    }

    const fileIfraCertEditProductOnChange = (e) => {
        setFileIfraCertEditProduct(e.target.files[0])
    }

    const fileAllergyListEditProductOnChange = (e) => {
        setFileAllergyListEditProduct(e.target.files[0])
    }

  return (
    <div className="listInAddNewOrder">
        <a className="wordProductNHashtags">{singleProductResponse.productCode}</a>
        {/* <div className="listForOrder"> */}
        <Box className="listForOrder" disabled>
            <Grid container spacing={8}>
                {/* <div className="rowInListForOrder"> */}
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="WTC code" variant="standard" fullWidth
                        value = {wtcCode}
                        onChange={wtcCodeChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Luzi code" variant="standard" fullWidth
                        value = {luziCode}
                        onChange={luziCodeChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Customer code" variant="standard" fullWidth
                        value = {customerCode}
                        onChange={customerCodeChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Gender" variant="standard" fullWidth
                        value = {gender}
                        onChange={genderChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Name" variant="standard" fullWidth
                        value = {name}
                        onChange={nameChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Name (CN)" variant="standard" fullWidth
                        value = {nameCN}
                        onChange={nameCNChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by designer" variant="standard" date fullWidth
                        value = {inspiredByDesigner}
                        onChange={inspiredByDesignerChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by designer (CN)" variant="standard" fullWidth
                        value = {inspiredByDesignerCN}
                        onChange={inspiredByDesignerCNChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by brand" variant="standard" date fullWidth
                        value = {inspiredByBrand}
                        onChange={inspiredByBrandChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by brand (CN)" variant="standard" fullWidth
                        value = {inspiredByBrandCN}
                        onChange={inspiredByBrandCNChange}
                        InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
        <div className="wordProductType">Product Type</div>
            {/* Product Type */}
            {/* <div className="listForOrder" style={{marginTop: "100px"}}>
                
                <div className="wordProductsInAddNewOrder">Products</div>
                <TableInAddNewOrder setDeletepopup={setDeletepopup} stateAllInAddNewOrder={stateAllInAddNewOrder}/>
                <TableInAddNewOrder2 setDeletepopup={setDeletepopup}/>
                {!stateAllInAddNewOrder?
                    <Button className="buttonADDPRODUCTInAddNewOrder" variant="outlined" color="primary" onClick={handleClickOpen}>ADD PRODUCT</Button>
                 :null
                }
            </div> */}
        <Box className="listForOrder">
            <Grid container spacing={8}>
                <Grid className="gridDescriptionOfGoodsInAddNewProduct" item xs={12} sm={12}>
                    <TextField className="TextFieldDescriptionOfGoodsInEditProduct" 
                        // id="standard-basic" 
                        label="Description of Goods" variant="standard" fullWidth
                        value={discriptionOfGoods}
                        onChange={discriptionOfGoodsChange}
                        InputProps={{
                            style: {fontSize: 16,fontWeight: 400},
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload COA" variant="outlined" type={editable?'file':null}
                        value={editable&&fileCoaEditProduct?fileCoaEditProduct.fileName
                            :editable&&!fileCoaEditProduct?null
                            :singleProductResponse.productFiles.coa?singleProductResponse.productFiles.coa.originalName
                            :null
                        }
                        onChange={fileCoaEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload COA (CN)" variant="outlined" type={editable?'file':null}
                        value={editable&&fileCoaCnEditProduct?fileCoaCnEditProduct.fileName
                            :editable&&!fileCoaCnEditProduct?null
                            :singleProductResponse.productFiles.coaCn?singleProductResponse.productFiles.coaCn.originalName
                            :null
                        }
                        onChange={fileCoaCnEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload MSDS" variant="outlined" type={editable?'file':null}
                        value={editable&&fileMsdsEditProduct?fileMsdsEditProduct.fileName
                            :editable&&!fileMsdsEditProduct?null
                            :singleProductResponse.productFiles.msds?singleProductResponse.productFiles.msds.originalName
                            :null
                        }
                        onChange={fileMsdsEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload MSDS (CN)" variant="outlined" type={editable?'file':null}
                        value={editable&&fileMsdsCnEditProduct?fileMsdsCnEditProduct.fileName
                            :editable&&!fileMsdsCnEditProduct?null
                            :singleProductResponse.productFiles.msdsCn?singleProductResponse.productFiles.msdsCn.originalName
                            :null
                        }
                        onChange={fileMsdsCnEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload Fragrance profile" variant="outlined" type={editable?'file':null}
                        value={editable&&fileFragranceProfileEditProduct?fileFragranceProfileEditProduct.fileName
                            :editable&&!fileFragranceProfileEditProduct?null
                            :singleProductResponse.productFiles.fragranceProfile?singleProductResponse.productFiles.fragranceProfile.originalName
                            :null
                        }
                        onChange={fileFragranceProfileEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload IFRA Cert" variant="outlined" type={editable?'file':null}
                        value={editable&&fileIfraCertEditProduct?fileIfraCertEditProduct.fileName
                            :editable&&!fileIfraCertEditProduct?null
                            :singleProductResponse.productFiles.ifraCert?singleProductResponse.productFiles.ifraCert.originalName
                            :null
                        }
                        onChange={fileIfraCertEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload 26 allergy list" variant="outlined" type={editable?'file':null}
                        value={editable&&fileAllergyListEditProduct?fileAllergyListEditProduct.fileName
                            :editable&&!fileAllergyListEditProduct?null
                            :singleProductResponse.productFiles.allergyList?singleProductResponse.productFiles.allergyList.originalName
                            :null
                        }
                        onChange={fileAllergyListEditProductOnChange}
                        InputProps={{
                            readOnly: !editable,
                            startAdornment: (
                            <InputAdornment position="start">
                                <UploadFileIcon />
                            </InputAdornment>
                            ),
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={12}>
                    <TextField className="lastTextFieldInAddNewProduct" id="standard-basic" label="Remarks" variant="standard" fullWidth
                    value = {remarks}
                    onChange={remarksChange}
                    InputProps={{
                            readOnly: !editable,
                            disableUnderline: !editable
                        }}
                    />
                </Grid>
            </Grid>
        </Box>  
    </div>
  )
}

export default ListUneditableProduct
