import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import UseProductQuery from "@/features/products/hooks/useProductQuery.tsx";

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
	},
	{
		field: 'main_image',
		headerName: 'Main Image',
		sortable: false,
		width: 160,
		renderCell: (url) => {
			console.log(url);
			return <img width={'100'} src={"http://localhost:5000/images/products/" + url.value} alt={url.value}/>
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
];

export default function ProductsListAdmin() {
	const { data, isLoading, error } = UseProductQuery();

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
