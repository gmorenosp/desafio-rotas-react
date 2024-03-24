import { CategoryDTO } from "../Category/category";

export type ProductDTO = {
    id: number;
    name: string;
    categories: CategoryDTO[];
}