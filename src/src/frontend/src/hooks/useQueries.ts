import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";
import type { Product, ProductId } from "../backend.d";

// Query: Get all products
export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

// Query: Get products by category
export function useGetProductsByCategory(category: string | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      if (!category) return actor.getAllProducts();
      return actor.getProductsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

// Query: Get product by ID
export function useGetProductById(id: ProductId) {
  const { actor, isFetching } = useActor();
  return useQuery<Product>({
    queryKey: ["product", id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}

// Query: Get all categories
export function useGetAllCategories() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCategories();
    },
    enabled: !!actor && !isFetching,
  });
}

// Mutation: Add product
export function useAddProduct() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      description: string;
      category: string;
      price: number;
      inStock: boolean;
      imageUrl: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.addProduct(
        data.name,
        data.description,
        data.category,
        data.price,
        data.inStock,
        data.imageUrl
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}

// Mutation: Update product
export function useUpdateProduct() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      id: ProductId;
      name: string;
      description: string;
      price: number;
      inStock: boolean;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.updateProduct(
        data.id,
        data.name,
        data.description,
        data.price,
        data.inStock
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

// Mutation: Delete product
export function useDeleteProduct() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: ProductId) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
}
