import {FunctionComponent, useEffect} from "react";
import {Button} from "@mui/material";
import productsClient from "@/apis/productsClient.ts";
import {useAppSelector} from "@/redux/hook.ts";

const ProductList: FunctionComponent = () => {
    const { user, isAuthenticated } = useAppSelector(state => state.user);

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
            <h1>Hello {user.firstName + ' ' + user.lastName}</h1>
            { isAuthenticated ? <h1>Authenticated</h1> : <h1>Not Authenticated</h1> }
        </div>
    );
};

export default ProductList;