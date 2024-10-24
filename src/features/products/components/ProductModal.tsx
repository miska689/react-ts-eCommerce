import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import {Grid2, InputLabel, Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {styled} from "@mui/material/styles";
import useCategoryQuery from "@/features/category/hooks/useCategoryQuery.tsx";
import {productSchema} from "@/features/products/schemas/productSchema.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import {SubmitHandler, useForm} from "react-hook-form";
import useProductCreateMutation from "@/features/products/hooks/useProductCreateMutation.tsx";

// import categoryIcons from "@/components/CategoryIcons.tsx";

const VisuallyHiddenInput = styled('input')({
	clip: 'rect(0 0 0 0)',
	clipPath: 'inset(50%)',
	height: 1,
	overflow: 'hidden',
	position: 'absolute',
	bottom: 0,
	left: 0,
	whiteSpace: 'nowrap',
	width: 1,
});

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function ProductModal() {
	const { data } = useCategoryQuery();
	// Form input
	const {
		register,
		handleSubmit,
		setValue,
		setError,
		reset,
		formState: { errors }
	} = useForm<IProductPayload>({
		resolver: yupResolver(productSchema)
	});
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
		setSelectedImage('');
		setCategory('');
		reset();
	};
	const [category, setCategory] = React.useState('');
	const [selectedImage, setSelectedImage] = React.useState<string | null>('');

	const createMutation = useProductCreateMutation(handleClose);

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string);
		setValue('categoryId', parseInt(event.target.value));
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if(!event.target.files) {
			setSelectedImage('');
			setValue('main_image', '');
			return;
		}

		const objectURL = URL.createObjectURL(event.target.files[0]);

		setSelectedImage(objectURL);

		setValue('main_image', event.target.files[0]);
		setError('main_image', { message: undefined });
	};

	const onSubmit: SubmitHandler<IProductPayload> = (data) => {
		console.log(data);

		const formData = new FormData();

		formData.append('name', data.name);
		formData.append('longDescription', data.longDescription);
		formData.append('shortDescription', data.shortDescription);
		formData.append('quantity', data.quantity.toString());
		formData.append('price', data.price.toString());
		formData.append('categoryId', data.categoryId.toString());
		formData.append('main_image', data.main_image);

		console.log(formData.get('main_image'));

		createMutation.mutate(formData);
	}

	return (
		<div>
			<Button sx={{ marginBottom: "20px" }} variant={'contained'} onClick={handleOpen}>
				Create product
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} component={'form'} onSubmit={handleSubmit(onSubmit)}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Product
					</Typography>
					<br/>
					<Grid2 container columnSpacing={2}>
						<Grid2 size={6}>
							<TextField
								sx={{ marginBottom: '10px' }}
								label="Name" variant="outlined"
								fullWidth
								error={Boolean(errors.name)}
								helperText={errors.name?.message}
								{ ...register('name') }
							/>
						</Grid2>
						<Grid2 size={6}>
							<TextField
								sx={{ marginBottom: '10px' }}
								label="Long Description"
								variant="outlined"
								fullWidth
								error={Boolean(errors.longDescription)}
								helperText={errors.longDescription?.message}
								{ ...register('longDescription') }
							/>
						</Grid2>
					</Grid2>
					<Grid2 container columnSpacing={2}>
						<Grid2 size={6}>
							<TextField
								sx={{ marginBottom: '10px' }}
								label="Short Description"
								variant="outlined"
								fullWidth
								error={Boolean(errors.shortDescription)}
								helperText={errors.shortDescription?.message}
								{ ...register('shortDescription') }
							/>
						</Grid2>
						<Grid2 size={6}>
							<TextField
								sx={{ marginBottom: '10px' }}
								label="Quantity"
								variant="outlined"
								fullWidth
								error={Boolean(errors.quantity)}
								helperText={errors.quantity?.message}
								{ ...register('quantity') }
							/>
						</Grid2>
					</Grid2>
					<Grid2 container columnSpacing={2}>
						<Grid2 size={6}>
							<TextField
								sx={{ marginBottom: '10px' }}
								label="Price"
								variant="outlined"
								fullWidth
								error={Boolean(errors.price)}
								helperText={errors.price?.message}
								{ ...register('price') }
							/>
						</Grid2>
						<Grid2 size={6}>
							<FormControl fullWidth sx={{ marginBottom: '10px' }}>
								<InputLabel id="demo-simple-select-label">Category</InputLabel>
								<Select
									variant={'outlined'}
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={category}
									label="Category"
									defaultValue={''}
									onChange={handleChange}
								>
									{
										data?.data?.map(({id, name}) => {
											return <MenuItem key={id} value={id}>
												{/*{ categoryIcons[icon] }*/}&nbsp;&nbsp;
												{ name }
											</MenuItem>
										})
									}
								</Select>
								{ errors.categoryId ? <Typography color={'error'} sx={{ fontSize: '12px', marginLeft: "10px"}}>{errors.categoryId.message}</Typography> : null }
							</FormControl>
						</Grid2>
					</Grid2>
					<Button
						component="label"
						role={undefined}
						variant="contained"
						color={'warning'}
						tabIndex={-1}
						startIcon={<CloudUploadIcon />}
						sx={{
							marginBottom: '10px'
						}}
					>
						Upload files
						<VisuallyHiddenInput
							type="file"
							onChange={handleFileChange}
							multiple
						/>
					</Button>
					{ errors.main_image ? <Typography color={'error'} sx={{ fontSize: '12px', marginLeft: "10px"}}>{errors.main_image.message}</Typography> : null }

					<div>{ selectedImage ? <img alt={'photo'} style={{ width: '200px', marginBottom: '10px' }} src={selectedImage}/> : null}</div>
					<Button type={'submit'} fullWidth variant={'contained'}>
						Create
					</Button>
				</Box>
			</Modal>
		</div>
	);
}