import * as React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Delete({ deletepopup, setDeletepopup }) {
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
        <div className="wordAddProductInDialog">Do you want to delete this order?</div>
        <div className="secondWordsInDeleteDialog">If you delete this order,you cannot recover it back.</div>
        <DialogActions>
          <Button color="primary">YES,PLEASE DELETE</Button>
          <Button onClick={handleClose} color="warning">NO</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
