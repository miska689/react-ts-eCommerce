import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import useCategoryMutation from "@/features/category/hooks/useCategoryMutation.tsx";
import {ICategoryFormInput} from "@/features/category/interfaces/categoryForm.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {categorySchema} from "@/features/category/schemas/CategorySchema.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import FormControl from "@mui/material/FormControl";
import {InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import categoryIcons from "@/components/CategoryIcons.tsx";

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

export default function AddCategoryModal() {
	const categoryMutation = useCategoryMutation();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<ICategoryFormInput>({
		resolver: yupResolver(categorySchema)
	});

	const handleChange = (event: SelectChangeEvent) => {
		setValue('icon', event.target.value );
	};


	const onSubmit:SubmitHandler<ICategoryFormInput> = (data) => {
		console.log(data)
		categoryMutation.mutate(data);
		setOpen(false)
	}

	console.log('errors: ', errors)

	return (
		<div>
			<Button onClick={handleOpen} variant={'contained'}>Add Category</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} component={'form'} onSubmit={handleSubmit(onSubmit)}>
					<Typography id="modal-modal-title" variant="h6" component="h2" sx={{ marginBottom: '10px' }}>
						Category
					</Typography>
					<TextField label={'Name'}
					           variant={'outlined'}
					           fullWidth
					           sx={{ marginBottom: '10px'}}
					           error={Boolean(errors.name)}
					           helperText={errors.name?.message}
					           { ...register('name') }/>
					<FormControl fullWidth sx={{ marginBottom: '10px' }} >
						<InputLabel id="demo-simple-select-label">Icons</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Icon"
							defaultValue={''}
							onChange={handleChange}
						>
							{
								Object.keys(categoryIcons).map((categoryKey) => {

									return <MenuItem key={categoryKey} value={categoryKey}>
										{categoryIcons[categoryKey]}&nbsp;-&nbsp;
										{categoryKey}
									</MenuItem>
								})
							}
						</Select>
						{ errors.icon && <Typography color={'red'}>{errors.icon?.message}</Typography> }
					</FormControl>
					<Button type={'submit'} variant={'contained'} fullWidth>Submit</Button>
				</Box>
			</Modal>
		</div>
	);
}