import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {UseMutationResult} from "@tanstack/react-query";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface IConfirmModalProps<ItemType, IBackResponse> {
	openConfirmModal: boolean;
	handleCloseConfirmModal: () => void;
	selectedItem: ItemType | undefined;
	itemName: string;
	getItemName: () => string;
	useDelete: (cb: () => void) => UseMutationResult<IBackResponse, Error, number, unknown>;
}

export default function ModalConfirm<ItemType extends { id: number; name: string }, IBackResponse>({
		openConfirmModal,
		handleCloseConfirmModal,
		selectedItem,
		itemName,
		getItemName,
		useDelete,
	}: IConfirmModalProps<ItemType, IBackResponse>) {

	const deleteMutation = useDelete(handleCloseConfirmModal);

	const handleSubmit = () => {
		console.log(selectedItem);
		if (selectedItem) {
			deleteMutation.mutate(selectedItem.id);
			handleCloseConfirmModal();
		}
	}

	return (
		<div>
			<Modal
				open={openConfirmModal}
				onClose={handleCloseConfirmModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Are you sure to delete { itemName }: { getItemName() }?
					</Typography>
					<Button onClick={handleSubmit} variant={'contained'}>Yes</Button>
				</Box>
			</Modal>
		</div>
	);
}