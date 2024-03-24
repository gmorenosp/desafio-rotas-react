/* eslint-disable prefer-const */
import { CategoryDTO } from "../models/Category/category";

export function getCategories() {
    return categories;
}

let categories: CategoryDTO[] = [
    {
        "id": 1,
        "name": "Computadores",
        "routerName": "computers"
    },
    {
        "id": 2,
        "name": "Eletrônicos",
        "routerName": "eletronics"
    },
    {
        "id": 3,
        "name": "Livros",
        "routerName": "books"
    }
]