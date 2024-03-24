/* eslint-disable prefer-const */
import { CategoryDTO } from "../models/Category/category";
import { ProductDTO } from "../models/Product/product";

export function getProductsByCategoryId(categoryId: number): ProductDTO[] | undefined {
    return products.filter(x => x.categories.map(y => y.id).find(z => z === categoryId));
}

export function getProductsByCategory(category: CategoryDTO): ProductDTO[] | undefined {
    return products.filter(x => x.categories.map(y => y.id).find(z => z === category.id));
}

export function getProducts(): ProductDTO[] {
    return products;
}

let products: ProductDTO[] = [
    {
        "id": 1,
        "name": "Computador 1",
        "categories": [
            {
                "id": 1,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 2,
        "name": "Computador 2",
        "categories": [
            {
                "id": 1,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 3,
        "name": "Computador 3",
        "categories": [
            {
                "id": 1,
                "name": "Computadores"
            }
        ]
    },
    {
        "id": 4,
        "name": "Eletrônico 1",
        "categories": [
            {
                "id": 2,
                "name": "Eletrônicos"
            }
        ]
    },
    {
        "id": 5,
        "name": "Eletrônico 2",
        "categories": [
            {
                "id": 2,
                "name": "Eletrônicos"
            }
        ]
    },
    {
        "id": 6,
        "name": "Eletrônico 3",
        "categories": [
            {
                "id": 2,
                "name": "Eletrônicos"
            }
        ]
    },
    {
        "id": 7,
        "name": "Livro 1",
        "categories": [
            {
                "id": 3,
                "name": "Livros"
            }
        ]
    },
    {
        "id": 8,
        "name": "Livro 2",
        "categories": [
            {
                "id": 3,
                "name": "Livros"
            }
        ]
    },
    {
        "id": 9,
        "name": "Livro 3",
        "categories": [
            {
                "id": 3,
                "name": "Livros"
            }
        ]
    }
]