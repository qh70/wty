import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

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
          <Button color="primary">YES,PLEASE DELETE</Button>
          <Button onClick={handleClose} color="warning">NO</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
