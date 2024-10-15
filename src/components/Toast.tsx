import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "@/redux/hook.ts";
import {hideToast} from "@/redux/toast/toast.slice.ts";

export default function Toast() {
    const { open, message, severity } = useAppSelector((state) => state.toast)
	const dispatch = useAppDispatch();

	const handleClose = () => {
		dispatch(hideToast());
	}

	return (
		<div>
			<Snackbar
				open={open}
				anchorOrigin={{vertical: 'top', horizontal: 'right'}}
				autoHideDuration={6000}
				onClose={handleClose}>
				<Alert
					onClose={handleClose}
					severity={severity}
					sx={{width: '100%'}}
				>
					{ message }
				</Alert>
			</Snackbar>
		</div>
	);
}