import CategoryListAdmin from "@/features/category/components/CategoryListAdmin.tsx";
import AddCategoryModal from "@/features/category/components/addCategoryModal.tsx";
import ConfirmModal from "@/features/category/components/confirmModal.tsx";
import * as React from "react";
import UseDeleteCategoryMutation from "@/features/category/hooks/useDeleteCategoryMutation.tsx";
import UpdateModal from "@/features/category/components/updateModal.tsx";

const CategoryAdminPage = () => {
	const [categoryId, setCategoryId] = React.useState<number>(0);
	const deleteCategoryMutation = UseDeleteCategoryMutation();
	const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
	const handleOpenConfirmModal = () => setOpenConfirmModal(true);
	const handleCloseConfirmModal = () => setOpenConfirmModal(false);
	const [openUpdate, setOpenUpdate] = React.useState(false);
	const handleOpenUpdate = () => setOpenUpdate(true);
	const handleCloseUpdate = () => setOpenUpdate(false);

	const handleConfirmDelete = () => {
		if (categoryId) {
			deleteCategoryMutation.mutate(categoryId);
		}
		handleCloseConfirmModal();
	}
	const handleConfirmUpdate = () => {
		handleCloseUpdate();
	}

	return (

		<div className={"dashboard_margin"}>
			<AddCategoryModal/>
			<UpdateModal openUpdate={openUpdate} handleOpenUpdate={handleOpenUpdate} handleCloseUpdate={handleCloseUpdate} handleConfirmUpdate={handleConfirmUpdate} categoryId={categoryId}/>
			<CategoryListAdmin  handleOpenConfirmModal={ handleOpenConfirmModal } handleOpenUpdateModal={handleOpenUpdate} setCategoryId={setCategoryId}/>
			<ConfirmModal openConfirmModal={openConfirmModal} handleOpenConfirmModal={handleOpenConfirmModal} handleCloseConfirmModal={handleCloseConfirmModal} handleConfirmDelete={handleConfirmDelete}/>
		</div>
	);
};

export default CategoryAdminPage;