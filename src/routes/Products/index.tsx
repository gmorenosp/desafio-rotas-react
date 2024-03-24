import { Outlet } from "react-router-dom";
import ProductGroup from "../../components/ProductGroup";

export default function Products() {
    return (
        <>
            <ProductGroup />
            <Outlet />
        </>
    );
}