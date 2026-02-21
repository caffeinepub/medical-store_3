import { useState, useMemo } from "react";
import { Link, useSearch } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllProducts, useGetAllCategories } from "../hooks/useQueries";
import { Search, ShoppingBag, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPage() {
  const search = useSearch({ strict: false }) as { category?: string };
  const { data: products = [], isLoading: productsLoading } = useGetAllProducts();
  const { data: categories = [], isLoading: categoriesLoading } = useGetAllCategories();

  const [selectedCategory, setSelectedCategory] = useState<string>(search.category || "all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [products, selectedCategory, searchQuery]);

  const isLoading = productsLoading || categoriesLoading;

  return (
    <div className="container py-12">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Our Products
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our complete catalog of quality healthcare products
        </p>
      </div>

      {/* Filters Section */}
      <div className="mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing {filteredProducts.length} of {products.length} products
          </span>
          {selectedCategory !== "all" && (
            <Badge variant="secondary">
              {selectedCategory}
            </Badge>
          )}
        </div>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i}>
              <CardContent className="p-0">
                <Skeleton className="aspect-square w-full rounded-t-lg" />
                <div className="p-4 space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <div className="inline-flex p-4 bg-muted rounded-full mb-4">
            <AlertCircle className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id.toString()}
              to="/products/$id"
              params={{ id: product.id.toString() }}
              className="group"
            >
              <Card className="h-full transition-all hover:shadow-lift hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-square bg-secondary/30 rounded-t-lg overflow-hidden relative">
                    <img
                      src={product.imageUrl || "/placeholder-product.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                        <Badge variant="secondary" className="text-base px-4 py-2">
                          Out of Stock
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      <Badge
                        variant={product.inStock ? "default" : "secondary"}
                        className={
                          product.inStock
                            ? "bg-success hover:bg-success/90"
                            : ""
                        }
                      >
                        {product.inStock ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {/* Empty State for No Products at All */}
      {!isLoading && products.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex p-4 bg-muted rounded-full mb-4">
            <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-2">
            No products available yet
          </h3>
          <p className="text-muted-foreground">
            Check back soon for our product catalog
          </p>
        </div>
      )}
    </div>
  );
}
