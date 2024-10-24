import Box from '@mui/material/Box';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import UseProductQuery from "@/features/products/hooks/useProductQuery.tsx";
import UseCategoryQuery from "@/features/category/hooks/useCategoryQuery.tsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface IProductListAdminProps {
	setSelectedItem: (item: IProductBody | undefined) => void;
	handleOpenConfirmModal: () => void;
}

export default function ProductsListAdmin({ setSelectedItem, handleOpenConfirmModal }: IProductListAdminProps) {
	const { data, isLoading, error } = UseProductQuery();
	const { data: dataCategories } = UseCategoryQuery();
	const columns: GridColDef<IProductBody>[] = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'name',
			headerName: 'Name',
			width: 150,
			editable: true,
		},
		{
			field: 'longDescription',
			headerName: 'Long Description',
			width: 150,
			editable: true,
		},
		{
			field: 'shortDescription',
			headerName: 'Short Description',
			type: 'number',
			width: 110,
			editable: true,
		},
		{
			field: 'quantity',
			headerName: 'Quantity',
			type: 'number',
			width: 110,
			editable: true,
		},
		{
			field: 'price',
			headerName: 'Price',
			type: 'number',
			width: 110,
			editable: true,
		},
		{
			field: 'categoryId',
			headerName: 'Category',
			type: 'number',
			width: 110,
			editable: true,
			renderCell: (params) => {
				const category = getCategoryName(params.value);
				return category?.name;
			},
		},
		{
			field: 'main_image',
			headerName: 'Main Image',
			sortable: false,
			width: 160,
			renderCell: (url) => {
				return <img width={'50'} height={"50"} src={`${import.meta.env.VITE_BACKEND_URL}/images/products/${url.value}`} alt={url.value}/>
			},
		},
		{
			field: 'createdAt',
			headerName: 'Created At',
			type: 'string',
			width: 110,
			editable: true,
		},
		{
			field: 'updatedAt',
			headerName: 'Updated At',
			type: 'string',
			width: 110,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			type: 'boolean',
			width: 110,
			editable: true,
		},
		{
			field: 'shopId',
			headerName: 'Shop ID',
			width: 110,
			editable: true,
		},
		{
			field: 'actions',
			headerName: 'Actions',
			width: 150,
			renderCell: (params) => {
				const handleClick = () => {
					const product = params.row;
					setSelectedItem(product)
					handleOpenConfirmModal();
				}

				return (
					<div>
						<IconButton >
							<EditIcon color={'warning'}/>
						</IconButton>
						<IconButton onClick={handleClick}>
							<DeleteIcon color={'error'}/>
						</IconButton>
					</div>
				)
			},
		}
	];

	const getCategoryName = (id: number) => {
		const categories = dataCategories?.data;
		return categories?.find((category) => category.id === id);
	}

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error?.message}</div>;

	const products = data.data;

	return (
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={products}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	);
}
