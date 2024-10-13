import {FunctionComponent, useEffect} from "react";
import {Button} from "@mui/material";
import productsClient from "@/apis/productsClient.ts";
import Toast from "@/components/Toast.tsx";

const ProductList: FunctionComponent = () => {
    const fetchProducts = async () => {
        const res = productsClient.getAllProducts();

        console.log("Res: ", res);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Button variant='contained' color={'success'}>My Button</Button>
            <Toast />
        </div>
    );
};

export default ProductList;