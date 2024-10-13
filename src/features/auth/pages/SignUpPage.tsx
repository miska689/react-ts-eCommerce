import React from 'react';
import SignUp from "@/features/auth/components/SignUp.tsx";
import Toast from "@/components/Toast.tsx";
import {SnackbarCloseReason} from "@mui/material";


const SignUpPage: React.FunctionComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
          return;
        }

        setOpen(false);
    };

    return (
        <div>
            <SignUp handleClick={handleClick}/>
            <Toast open={open} handleClick={handleClick} handleClose={handleClose} />
        </div>
    );
};

export default SignUpPage;