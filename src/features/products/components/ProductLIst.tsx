import {FunctionComponent, useEffect} from "react";
import {Button} from "@mui/material";
import productsClient from "@/apis/productsClient.ts";
import {useAppSelector} from "@/redux/hook.ts";

const ProductList: FunctionComponent = () => {
    const { isAuthenticated } = useAppSelector(state => state.user);

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
            {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
        </div>
    );
};

export default ProductList;