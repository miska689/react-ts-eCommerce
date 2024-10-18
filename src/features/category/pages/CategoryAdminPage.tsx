import CategoryListAdmin from "@/features/category/components/CategoryListAdmin.tsx";
import AddCategoryModal from "@/features/category/components/addCategoryModal.tsx";
import ConfirmModal from "@/features/category/components/confirmModal.tsx";
import * as React from "react";
import UseDeleteCategoryMutation from "@/features/category/hooks/useDeleteCategoryMutation.tsx";

const CategoryAdminPage = () => {
	const [categoryId, setCategoryId] = React.useState<number>(0);
	const deleteCategoryMutation = UseDeleteCategoryMutation();
	const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
	const handleOpenConfirmModal = () => setOpenConfirmModal(true);
	const handleCloseConfirmModal = () => setOpenConfirmModal(false);

	const handleConfirmDelete = () => {
		if (categoryId) {
			deleteCategoryMutation.mutate(categoryId);
		}
		handleCloseConfirmModal();
	}

	return (

		<div className={"dashboard_margin"}>
			<AddCategoryModal/>
			<CategoryListAdmin handleOpenConfirmModal={ handleOpenConfirmModal } setCategoryId={setCategoryId}/>
			<ConfirmModal openConfirmModal={openConfirmModal} handleOpenConfirmModal={handleOpenConfirmModal} handleCloseConfirmModal={handleCloseConfirmModal} handleConfirmDelete={handleConfirmDelete}/>
		</div>
	);
};

export default CategoryAdminPage;