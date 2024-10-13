import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {IToastInterface} from "@/components/interfaces/ToastInterface.ts";

export default function CustomizedSnackbars({open, handleClose, handleClick}: IToastInterface) {
  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
          open={open}
          anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
          autoHideDuration={6000}
          onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </Snackbar>
    </div>
  );
}