import ProductsListAdmin from "@/features/products/components/ProductsListAdmin.tsx";
import ProductModal from "@/features/products/components/ProductModal.tsx";
import ModalConfirm from "@/components/ModalConfirm.tsx";
import useProductDeleteMutation from "@/features/products/hooks/useProductDeleteMutation.tsx";
import React from "react";

const ProductsAdminPage = () => {
	const [openConfirmModal, setOpenConfirmModal] = React.useState(false);
	const handleCloseConfirmModal = () => setOpenConfirmModal(false);
	const handleOpenConfirmModal = () => setOpenConfirmModal(true);
	const [selectedProduct, setSelectedProduct] = React.useState<IProductBody | undefined>(undefined);

	return (
		<div className={"dashboard_margin"}>
			<ModalConfirm<IProductBody, IBackendResponse<IProductBody>>
				openConfirmModal={openConfirmModal}
				handleCloseConfirmModal={handleCloseConfirmModal}
				selectedItem={selectedProduct}
				itemName={'product'}
				getItemName={() => (selectedProduct ? selectedProduct.name : '')}
				useDelete={useProductDeleteMutation}/>
			<ProductModal/>
			<ProductsListAdmin setSelectedItem={setSelectedProduct} handleOpenConfirmModal={handleOpenConfirmModal}/>
		</div>
	);
};

export default ProductsAdminPage;