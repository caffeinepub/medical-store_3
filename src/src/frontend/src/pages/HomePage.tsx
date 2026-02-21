import { Link } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useGetAllProducts } from "../hooks/useQueries";
import {
  Package,
  ShieldCheck,
  Truck,
  Pill,
  Heart,
  Stethoscope,
  ActivitySquare,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  const { data: products = [], isLoading } = useGetAllProducts();
  const featuredProducts = products.slice(0, 4);

  const categories = [
    {
      name: "Prescription Drugs",
      icon: Pill,
      description: "Licensed medications with prescription",
      color: "text-primary",
    },
    {
      name: "Over-the-Counter",
      icon: Package,
      description: "Self-care medications and supplements",
      color: "text-accent",
    },
    {
      name: "Medical Equipment",
      icon: Stethoscope,
      description: "Professional-grade medical devices",
      color: "text-success",
    },
    {
      name: "Wellness Products",
      icon: Heart,
      description: "Vitamins, supplements, and health aids",
      color: "text-warning",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed Pharmacists",
      description: "Professional consultation available 24/7",
    },
    {
      icon: ActivitySquare,
      title: "Quality Assurance",
      description: "All products verified and certified",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available in your area",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Trusted Healthcare Partner
            </Badge>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-balance">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Access quality medications, professional consultation, and wellness products—all delivered to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/products">
                  Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal accent */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Categories Grid */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our comprehensive range of healthcare products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to="/products"
                search={{ category: category.name }}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full transition-all hover:shadow-lift hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardContent className="p-6 space-y-4">
                    <div className={`p-3 bg-secondary/50 rounded-lg w-fit ${category.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Top picks from our catalog of verified healthcare products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id.toString()}
                  to="/products/$id"
                  params={{ id: product.id.toString() }}
                  className="group"
                >
                  <Card className="h-full transition-all hover:shadow-lift hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-secondary/30 rounded-t-lg overflow-hidden">
                        <img
                          src={product.imageUrl || "/placeholder-product.jpg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        <h3 className="font-serif font-semibold text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center justify-between">
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
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link to="/products">
                  View All Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Why Choose MediCare Plus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Commitment to excellence in healthcare delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center space-y-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
