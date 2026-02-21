import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type ProductId = bigint;
export interface Product {
    id: ProductId;
    inStock: boolean;
    name: string;
    description: string;
    imageUrl: string;
    category: string;
    price: number;
}
export interface backendInterface {
    addProduct(name: string, description: string, category: string, price: number, inStock: boolean, imageUrl: string): Promise<ProductId>;
    deleteProduct(id: ProductId): Promise<void>;
    getAllCategories(): Promise<Array<string>>;
    getAllProducts(): Promise<Array<Product>>;
    getProductById(id: ProductId): Promise<Product>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    updateProduct(id: ProductId, name: string, description: string, price: number, inStock: boolean): Promise<void>;
}
