export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image_url: string;
}

export interface Category {
    category_id: string;
    category_name: string;
    products: Product[];
}

export interface ApiData {
    categories: Category[];
}
