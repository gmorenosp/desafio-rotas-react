import ProductList from "../../../components/ProductList";

type Props = {
    categoryId: number;
}

export default function GroupItens({ categoryId }: Props) {
    return (
        <ProductList categoryId={categoryId} />
    );
}