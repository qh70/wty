import { useState,useContext } from "react";
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
import { UserContext } from "../../../../UserContext"


const ListUneditableProduct = ({ setOpen, setShowAddProduct, stateAllInAddNewOrder }) => {
    
    // const [showAddProduct, setShowAddProduct] = useState(false);

    const [value, setValue] = useState(new Date());
    
    const handleClickOpen = () => {setOpen(true);};
    
    const {
        wtcCode,
        luziCode,
        customerCode,
        gender,
        name,
        nameCN,
        inspiredByDesigner,
        inspiredByDesignerCN,
        inspiredByBrand,
        inspiredByBrandCN,
        remarks
    } = useContext(UserContext);

  return (
    <div className="listInAddNewOrder">
        <a className="wordProductNHashtags">Product ######</a>
        {/* <div className="listForOrder"> */}
        <Box className="listForOrder" disabled>
            <Grid container spacing={8}>
                {/* <div className="rowInListForOrder"> */}
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="WTC code" variant="standard" fullWidth
                        value = {wtcCode}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Luzi code" variant="standard" fullWidth
                        value = {luziCode}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Customer code" variant="standard" fullWidth
                        value = {customerCode}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Gender" variant="standard" fullWidth
                        value = {gender}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Name" variant="standard" fullWidth
                        value = {name}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Name (CN)" variant="standard" fullWidth
                        value = {nameCN}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by designer" variant="standard" date fullWidth
                        value = {inspiredByDesigner}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by designer (CN)" variant="standard" fullWidth
                        value = {inspiredByDesignerCN}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by brand" variant="standard" date fullWidth
                        value = {inspiredByBrand}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField className="textFieldInAddNewOrder" id="standard-basic" label="Inspired by brand (CN)" variant="standard" fullWidth
                        value = {
                            inspiredByBrandCN}
                        InputProps={{
                            readOnly: true,
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
                        value="Description of the goods, put some context here."
                        InputProps={{
                            style: {fontSize: 16,fontWeight: 400},
                            readOnly: true,
                        }}
                    />
                </Grid>
                <Grid className="gridsInAddNewOrder" item xs={12} sm={6}>
                    <TextField 
                        className="textFieldInAddNewOrder" 
                        id="standard-basic" label="Upload COA" variant="outlined"
                        value="coa.pdf"
                        InputProps={{
                            readOnly: true,
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
                        id="standard-basic" label="Upload COA (CN)" variant="outlined"
                        value="coa-cn.pdf"
                        InputProps={{
                            readOnly: true,
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
                        id="standard-basic" label="Upload MSDS" variant="outlined"
                        value="msds.pdf"
                        InputProps={{
                            readOnly: true,
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
                        id="standard-basic" label="Upload MSDS (CN)" variant="outlined"
                        value="msds-cn.pdf"
                        InputProps={{
                            readOnly: true,
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
                        id="standard-basic" label="Upload Fragrance profile" variant="outlined"
                        value="fragranceprofile.pdf"
                        InputProps={{
                            readOnly: true,
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
                        id="standard-basic" label="Upload IFRA Cert" variant="outlined"
                        value="CustomerRef.pdf"
                        InputProps={{
                            readOnly: true,
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
                        id="standard-basic" label="Upload 26 allergy list" variant="outlined"
                        value="26allergylist.pdf"
                        InputProps={{
                            readOnly: true,
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
                    InputProps={{
                            readOnly: true,
                        }}
                    />
                </Grid>
            </Grid>
        </Box>  
    </div>
  )
}

export default ListUneditableProduct
