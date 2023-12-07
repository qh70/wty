import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { GetContext } from "../../GetContext";

export default function Delete({ deletepopup, setDeletepopup, modules }) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const handleClose = () => {
    setDeletepopup(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  function valuetext(value) {
    return `${value}`;
  }

  const history = useHistory();

  const {
    token,
  } = React.useContext(GetContext);

  function deleteProduct(){
    fetch("http://192.168.0.8:8089/rest/admin/product/6", {
        method : "DELETE",
        headers : {
          "Authorization": `Bearer ${token}`,
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data,"delete6"))
      .catch((error)=>{console.log(error);});
      alert("product deleted");
      history.push("/product")
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={deletepopup}
        onClose={handleClose}
      >
        <div className="wordAddProductInDialog">Do you want to delete this {modules}?</div>
        <div className="secondWordsInDeleteDialog">If you delete this {modules},you cannot recover it back.</div>
        <DialogActions>
          <Button color="primary" onClick={deleteProduct}>YES,PLEASE DELETE</Button>
          <Button onClick={handleClose} color="warning">NO</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
