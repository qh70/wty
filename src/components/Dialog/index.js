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

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 100,
      label: '100',
    },
  ];

export default function MaxWidthDialog({ open, setOpen,}) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClose = () => {
    setOpen(false);
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
        open={open}
        onClose={handleClose}
      >
        <div className="wordAddProductInDialog">Add Product</div>
        <DialogContent>
            <Box className="box1InDialog">
                <TextField label="Search by" select fullWidth>
                    <MenuItem value="WTY Code">WTY Code</MenuItem>
                    <MenuItem value="Some other Code">Some other Code</MenuItem>
                </TextField>
            </Box>
            <Box className="box1InDialog">
                <TextField label="Search for Products" fullWidth placeholder="Search ...">
                    <MenuItem value="WTY Code">WTY Code</MenuItem>
                    <MenuItem value="Some other Code">Some other Code</MenuItem>
                </TextField>
            </Box>
            <Box sx={{ width: 525, mt: "50px" }}>
                <Slider
                    sx={{color: "#BDBDBD", height: "2px"}}
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button color="primary">CONFIRM</Button>
          <Button onClick={handleClose} color="warning">CANCEL</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
