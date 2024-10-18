import CategoryListAdmin from "@/features/category/components/CategoryListAdmin.tsx";
import AddCategoryModal from "@/features/category/components/addCategoryModal.tsx";

const CategoryAdminPage = () => {
	return (
		<div className={"dashboard_margin"}>
			<AddCategoryModal/>
			<CategoryListAdmin/>
		</div>
	);
};

export default CategoryAdminPage;