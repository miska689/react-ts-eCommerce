import ProductsListAdmin from "@/features/products/components/ProductsListAdmin.tsx";
import ProductModal from "@/features/products/components/ProductModal.tsx";

const ProductsAdminPage = () => {
	return (
		<div className={"dashboard_margin"}>
			<ProductModal/>
			<ProductsListAdmin/>
		</div>
	);
};

export default ProductsAdminPage;