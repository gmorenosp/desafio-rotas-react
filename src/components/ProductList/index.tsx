import { getProductsByCategoryId } from "../../services/product-service";
import "./styles.css";

type Props = {
  categoryId: number;
};

export default function ProductList({ categoryId }: Props) {
  return (
    <section id="product-list-section" className="container">
      {getProductsByCategoryId(categoryId)?.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </section>
  );
}
