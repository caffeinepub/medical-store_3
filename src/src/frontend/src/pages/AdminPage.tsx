import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAddProduct } from "../hooks/useQueries";
import { SAMPLE_PRODUCTS } from "../utils/sampleData";
import { toast } from "sonner";
import { Package, Loader2, CheckCircle } from "lucide-react";

export default function AdminPage() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [addedCount, setAddedCount] = useState(0);
  const addProduct = useAddProduct();

  const handleInitializeProducts = async () => {
    setIsInitializing(true);
    setAddedCount(0);

    let successCount = 0;
    const total = SAMPLE_PRODUCTS.length;

    for (const product of SAMPLE_PRODUCTS) {
      try {
        await addProduct.mutateAsync({
          name: product.name,
          description: product.description,
          category: product.category,
          price: product.price,
          inStock: product.inStock,
          imageUrl: product.imageUrl,
        });
        successCount++;
        setAddedCount(successCount);
      } catch (error) {
        console.error(`Failed to add ${product.name}:`, error);
        toast.error(`Failed to add ${product.name}`);
      }
    }

    setIsInitializing(false);
    
    if (successCount === total) {
      toast.success("All products added successfully!", {
        description: `${successCount} products are now available in the store.`,
      });
    } else {
      toast.warning("Some products failed to add", {
        description: `${successCount} of ${total} products were added.`,
      });
    }
  };

  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-serif font-bold mb-4">
            Store Administration
          </h1>
          <p className="text-muted-foreground">
            Initialize your medical store with sample products
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-serif">Sample Data Initialization</CardTitle>
                <CardDescription>
                  Add {SAMPLE_PRODUCTS.length} pre-configured products to your store
                </CardDescription>
              </div>
              <Package className="h-8 w-8 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Products to be added:</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">Prescription Drugs</span>
                  <Badge variant="secondary">4</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">Over-the-Counter</span>
                  <Badge variant="secondary">5</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">Medical Equipment</span>
                  <Badge variant="secondary">5</Badge>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="text-sm">Wellness Products</span>
                  <Badge variant="secondary">6</Badge>
                </div>
              </div>
            </div>

            {isInitializing && (
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  <span className="font-medium">Adding products...</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{
                      width: `${(addedCount / SAMPLE_PRODUCTS.length) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {addedCount} of {SAMPLE_PRODUCTS.length} products added
                </p>
              </div>
            )}

            {addedCount === SAMPLE_PRODUCTS.length && !isInitializing && (
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium text-success-foreground">
                      Initialization Complete!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      All {SAMPLE_PRODUCTS.length} products have been added to your store.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={handleInitializeProducts}
              disabled={isInitializing}
              size="lg"
              className="w-full"
            >
              {isInitializing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Initializing...
                </>
              ) : (
                "Initialize Sample Products"
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              This will add sample products to your store. Run this only once when setting up your store for the first time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
