import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UseCategoryQuery from "@/features/category/hooks/useCategoryQuery.tsx";
import CategoryIcons from "@/components/CategoryIcons.tsx";
import {Button} from "@mui/material";


export default function CategoryListAdmin(
	{
		handleOpenConfirmModal,
		setCategoryId
	} : {
		handleOpenConfirmModal: () => void
		setCategoryId: (categoryId: number) => void
	}) {
	const { data, isLoading, error } = UseCategoryQuery();

	if (isLoading) return <>Loading...</>
	if (error) return <>An error has occurred: {error}</>

	function handleDeleteCategory(id: number) {
		return () => {
			setCategoryId(id);
			handleOpenConfirmModal();
		}
	}

	return (
		<TableContainer component={Paper} >
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell align="right">Icon</TableCell>
						<TableCell align="right">Delete Category</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.data?.map((row) => (
						<TableRow
							key={row.id}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">
								{CategoryIcons[row.icon]}
							</TableCell>
							<TableCell align={'right'}>
								<Button onClick={handleDeleteCategory(row.id)} variant={'outlined'} color={'error'}>Delete</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}