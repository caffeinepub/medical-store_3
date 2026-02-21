import { Link, useParams, useNavigate } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useGetProductById } from "../hooks/useQueries";
import { ArrowLeft, Package, ShieldCheck, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailPage() {
  const { id } = useParams({ strict: false });
  const navigate = useNavigate();
  const productId = BigInt(id || "0");
  const { data: product, isLoading, error } = useGetProductById(productId);

  if (isLoading) {
    return (
      <div className="container py-12">
        <Skeleton className="h-10 w-32 mb-8" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skeleton className="aspect-square w-full rounded-lg" />
          <div className="space-y-6">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container py-16">
        <div className="text-center max-w-md mx-auto">
          <div className="inline-flex p-4 bg-destructive/10 rounded-full mb-4">
            <Package className="h-10 w-10 text-destructive" />
          </div>
          <h2 className="font-serif text-3xl font-bold mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate({ to: "/products" })}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      {/* Product Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square bg-secondary/30 relative">
                <img
                  src={product.imageUrl || "/placeholder-product.jpg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <Badge variant="secondary" className="text-lg px-6 py-3">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4 flex items-center space-x-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold">Quality Assured</div>
                  <div className="text-muted-foreground text-xs">
                    Verified & Certified
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center space-x-3">
                <Package className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold">Fast Delivery</div>
                  <div className="text-muted-foreground text-xs">
                    Same-day available
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          {/* Category Badge */}
          <Badge variant="secondary" className="text-sm">
            {product.category}
          </Badge>

          {/* Product Name */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            {product.name}
          </h1>

          {/* Price and Stock */}
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            <Badge
              variant={product.inStock ? "default" : "secondary"}
              className={`text-sm px-3 py-1 ${
                product.inStock ? "bg-success hover:bg-success/90" : ""
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          {/* Product Details */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl font-semibold">Product Details</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Product ID:</dt>
                <dd className="font-medium">{product.id.toString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Category:</dt>
                <dd className="font-medium">{product.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Availability:</dt>
                <dd className="font-medium">
                  {product.inStock ? "Available for order" : "Currently unavailable"}
                </dd>
              </div>
            </dl>
          </div>

          <Separator />

          {/* Action Button */}
          <div className="space-y-3">
            <Button
              size="lg"
              className="w-full text-base"
              disabled={!product.inStock}
            >
              {product.inStock ? "Contact for Purchase" : "Out of Stock"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              For orders and inquiries, please{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact us
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <Card className="mt-12 bg-muted/30">
        <CardContent className="p-8">
          <h2 className="font-serif text-2xl font-semibold mb-6 text-center">
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <h3 className="font-semibold">Prescription Requirements</h3>
              <p className="text-muted-foreground">
                Some products may require a valid prescription. Our licensed pharmacists will verify before dispensing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Consultation Available</h3>
              <p className="text-muted-foreground">
                Need advice? Our professional pharmacists are available 24/7 to answer your questions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                All our products are sourced from certified manufacturers and undergo strict quality checks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
